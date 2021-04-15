-- 0. Drop Table if exists
drop table if exists public.likes;

-- 1. Create Table
create table public.likes (
  id            bigint generated by default as identity primary key,
  inserted_at   timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id       uuid references public.users(id) not null,
  box_shadow_id bigint references public.box_shadows(id) not null
);
comment on table public.likes is 'Each like on the box shadows.';

-- 2. Secure the table
alter table public.likes enable row level security;

create policy "Allow anon-key full access"
  on public.likes for select using (
    auth.role() = 'anon'
  );

create policy "Allow authenticated read access"
  on public.box_shadows for select using (
    auth.role() = 'authenticated'
  );


create policy "Allow individual insert access"
  on public.likes for insert with check (
    auth.uid() = user_id
  );

create policy "Allow individual update access"
  on public.likes for update using (
    auth.uid() = user_id
  );

create policy "Allow individual delete access"
  on public.likes for delete using (
    auth.uid() = user_id
  );

-- 3. Send "previous data" on change
alter table public.likes replica identity full;


-- 4. Create a RPC to get most liked box_shadow
drop function get_most_popular_box_shadow;
create or replace function public.get_most_popular_box_shadow()
returns table(box_shadow_id bigint, likes_count bigint)
as $$
begin
  return query
  select public.likes.box_shadow_id, count(id) as likes_count
  from public.likes
  group by public.likes.box_shadow_id
  order by count(id) desc
  limit 1;
end;
$$ language plpgsql immutable;
