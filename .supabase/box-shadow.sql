-- 0. Drop Table and Types if exists
drop table if exists public.box_shadows;

drop type if exists public.box_shadows_theme;
drop type if exists public.box_shadows_shape;

-- 1. Custom types
create type public.shape as enum ('square', 'circle');
create type public.theme as enum ('light', 'dark');

-- 2. Create Table
create table public.box_shadows (
  id            bigint generated by default as identity primary key,
  title         text not null unique,
  slug          text not null unique,
  box_shadow    jsonb not null,
  inserted_at   timestamp with time zone default timezone('utc'::text, now()) not null,
  shape         shape,
  theme         theme,
  user_id       uuid references public.users(id) not null
);

comment on table public.box_shadows is 'Box shadows design data.';

-- 3. Enable RLS
alter table public.box_shadows
  enable row level security;

-- 4. Create Policies
create policy "Allow anon-key read access"
  on public.box_shadows for select using (
    auth.role() = 'anon'
  );

create policy "Allow individual insert access"
  on public.box_shadows for insert with check (
     auth.uid() = box_shadows.user_id
  );

create policy "Allow individual update access"
  on public.box_shadows for update using (
    auth.uid() = box_shadows.user_id
  );

create policy "Allow individual delete access"
  on public.box_shadows for delete using (
    auth.uid() = box_shadows.user_id
  );


-- 5. Send "previous data" on change
alter table public.box_shadows replica identity full;
