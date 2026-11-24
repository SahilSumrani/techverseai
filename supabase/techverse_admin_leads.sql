-- TechVerse AI contact leads and admin access
-- Run this in Supabase SQL Editor for project miqgajkwnyfhmkztnkud.
-- Admin email allowlisting is intentionally a separate manual step below.

create table if not exists public.contact_queries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 120),
  phone text not null check (char_length(btrim(phone)) between 7 and 32),
  email text not null check (
    char_length(btrim(email)) between 3 and 320
    and btrim(email) ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  ),
  subject text not null check (char_length(btrim(subject)) between 1 and 180),
  message text not null check (char_length(btrim(message)) between 1 and 8000),
  source text check (source is null or char_length(source) <= 120),
  date timestamptz not null default now(),
  status text not null default 'new'
    check (status in ('new', 'contacted', 'resolved'))
);

create index if not exists contact_queries_date_idx
  on public.contact_queries (date desc);

create index if not exists contact_queries_status_date_idx
  on public.contact_queries (status, date desc);

create table if not exists public.techverse_admins (
  email text primary key check (
    char_length(btrim(email)) between 3 and 320
    and btrim(email) ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  ),
  created_at timestamptz not null default now()
);

alter table public.contact_queries enable row level security;
alter table public.techverse_admins enable row level security;

-- The allowlist itself is not readable or writable through the public API.
revoke all on table public.techverse_admins from anon, authenticated;

create or replace function public.is_techverse_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $function$
  select exists (
    select 1
    from public.techverse_admins as admins
    where lower(btrim(admins.email)) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$function$;

revoke all on function public.is_techverse_admin() from public, anon;
grant execute on function public.is_techverse_admin() to authenticated;

-- Public visitors can submit contact details but cannot read or alter leads.
revoke all on table public.contact_queries from anon, authenticated;
grant insert (name, phone, email, subject, message, source)
  on table public.contact_queries to anon, authenticated;
grant select, delete on table public.contact_queries to authenticated;
grant update (status) on table public.contact_queries to authenticated;

drop policy if exists "public can submit contact leads" on public.contact_queries;
create policy "public can submit contact leads"
  on public.contact_queries
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "admins can read contact leads" on public.contact_queries;
create policy "admins can read contact leads"
  on public.contact_queries
  for select
  to authenticated
  using (public.is_techverse_admin());

drop policy if exists "admins can update lead status" on public.contact_queries;
create policy "admins can update lead status"
  on public.contact_queries
  for update
  to authenticated
  using (public.is_techverse_admin())
  with check (public.is_techverse_admin());

drop policy if exists "admins can delete contact leads" on public.contact_queries;
create policy "admins can delete contact leads"
  on public.contact_queries
  for delete
  to authenticated
  using (public.is_techverse_admin());

-- After the admin email has an account in Supabase Auth, run this separately
-- after replacing the placeholder with that exact Auth user's email:
-- insert into public.techverse_admins (email)
-- values ('YOUR_SUPABASE_AUTH_EMAIL')
-- on conflict (email) do nothing;
