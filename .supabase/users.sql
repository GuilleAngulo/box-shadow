-- 0. Drop Table if exists
drop table if exists public.users;

-- 1. Create Table
create table public.users (
  id uuid not null primary key references auth.users(id),
  name text,
  avatar_url text
);

comment on table public.users is 'Profile data for each user.';
comment on column public.users.id is 'References the internal Supabase Auth user.';

-- 2. Enable RLS
alter table public.users
  enable row level security;

-- 3. Create Policies
create policy "Allow anon-key select access."
  on public.users for select using (
    auth.uid() = 'anon-key'
  );

create policy "Allow authenticated read access"
  on public.box_shadows for select using (
    auth.role() = 'authenticated'
  );

create policy "Allow individual insert access"
  on public.users for insert using (
    auth.uid() = id
  );

create policy "Allow individual update access"
  on public.users for update using (
    auth.uid() = id
  );

-- 4.1 Drop trigger and function if exists
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists handle_new_user;

-- 4.2 Create trigger to insert a new user created on Auth
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 5. Send "previous data" on change
alter table public.users replica identity full;
