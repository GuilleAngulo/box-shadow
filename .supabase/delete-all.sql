drop table if exists public.likes;
drop table if exists public.box_shadows;
drop table if exists public.users;

drop type if exists public.box_shadows_theme;
drop type if exists public.box_shadows_shape;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user;
