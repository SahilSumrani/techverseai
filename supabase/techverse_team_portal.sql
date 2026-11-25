-- TechVerse AI team portal. Run after techverse_admin_leads.sql.
-- The bootstrap owner must already exist in Supabase Auth. Passwords are never stored here.

alter table public.techverse_admins add column if not exists role text not null default 'owner'
  check (role in ('owner', 'admin'));

insert into public.techverse_admins (email, role)
values ('officialsahilarora05@gmail.com', 'owner')
on conflict (email) do update set role = 'owner';

delete from public.techverse_admins
where lower(btrim(email)) = 'admin@techverseai.in';

create table if not exists public.company_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text not null check (char_length(btrim(full_name)) between 1 and 120),
  title text not null default '',
  department text not null default '',
  role text not null default 'employee' check (role in ('owner', 'admin', 'employee')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.company_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(btrim(title)) between 1 and 180),
  description text not null default '',
  assignee_id uuid not null references public.company_members(user_id),
  assigned_by uuid not null default auth.uid() references public.company_members(user_id),
  status text not null default 'todo' check (status in ('todo', 'in_progress', 'review', 'done')),
  priority text not null default 'normal' check (priority in ('low', 'normal', 'high', 'urgent')),
  due_at date,
  progress smallint not null default 0 check (progress between 0 and 100),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.work_logs (
  id uuid primary key default gen_random_uuid(),
  task_id uuid not null references public.company_tasks(id) on delete cascade,
  employee_id uuid not null default auth.uid() references public.company_members(user_id),
  minutes integer not null check (minutes between 1 and 1440),
  note text not null default '' check (char_length(note) <= 2000),
  logged_at timestamptz not null default now()
);

create table if not exists public.payroll_records (
  id uuid primary key default gen_random_uuid(),
  employee_id uuid not null references public.company_members(user_id),
  period date not null,
  amount numeric(12,2) not null check (amount >= 0),
  currency char(3) not null default 'INR',
  status text not null default 'draft' check (status in ('draft', 'approved', 'paid')),
  note text not null default '' check (char_length(note) <= 1000),
  created_by uuid not null default auth.uid() references public.company_members(user_id),
  created_at timestamptz not null default now(),
  unique (employee_id, period)
);

create table if not exists public.company_notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references public.company_members(user_id) on delete cascade,
  title text not null check (char_length(btrim(title)) between 1 and 160),
  body text not null default '' check (char_length(body) <= 2000),
  kind text not null default 'announcement' check (kind in ('task', 'announcement', 'system')),
  task_id uuid references public.company_tasks(id) on delete cascade,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists company_tasks_assignee_idx on public.company_tasks (assignee_id, status, due_at);
create index if not exists work_logs_employee_date_idx on public.work_logs (employee_id, logged_at desc);
create index if not exists payroll_employee_period_idx on public.payroll_records (employee_id, period desc);
create index if not exists company_notifications_recipient_idx on public.company_notifications (recipient_id, created_at desc);

create or replace function public.is_techverse_manager()
returns boolean language sql stable security definer set search_path = '' as $function$
  select exists (
    select 1 from public.techverse_admins a
    where lower(btrim(a.email)) = lower(coalesce(auth.jwt() ->> 'email', ''))
  ) or exists (
    select 1 from public.company_members m
    where m.user_id = auth.uid() and m.active and m.role in ('owner', 'admin')
  );
$function$;

create or replace function public.techverse_current_role()
returns text language sql stable security definer set search_path = '' as $function$
  select coalesce(
    (select a.role from public.techverse_admins a where lower(btrim(a.email)) = lower(coalesce(auth.jwt() ->> 'email', ''))),
    (select m.role from public.company_members m where m.user_id = auth.uid() and m.active),
    'none'
  );
$function$;

create or replace function public.techverse_set_member_role(p_user_id uuid, p_role text)
returns void language plpgsql security definer set search_path = '' as $function$
begin
  if auth.uid() is null then
    raise exception 'Sign in required.' using errcode = '42501';
  end if;
  if p_role is null or p_role not in ('employee', 'admin') then
    raise exception 'Only employee or admin access can be assigned.' using errcode = '22023';
  end if;
  if not exists (
    select 1 from public.techverse_admins a
    where lower(btrim(a.email)) = lower(coalesce(auth.jwt() ->> 'email', '')) and a.role = 'owner'
  ) and not exists (
    select 1 from public.company_members m
    where m.user_id = auth.uid() and m.active and m.role = 'owner'
  ) then
    raise exception 'Only the owner can change team roles.' using errcode = '42501';
  end if;
  if p_user_id = auth.uid() then
    raise exception 'You cannot change your own owner access.' using errcode = '42501';
  end if;
  update public.company_members set role = p_role, updated_at = now()
  where user_id = p_user_id and role <> 'owner';
  if not found then
    raise exception 'Member not found or owner access cannot be changed.' using errcode = 'P0002';
  end if;
end;
$function$;

revoke all on function public.is_techverse_manager() from public, anon;
revoke all on function public.techverse_current_role() from public, anon;
revoke all on function public.techverse_set_member_role(uuid, text) from public, anon;
grant execute on function public.is_techverse_manager() to authenticated;
grant execute on function public.techverse_current_role() to authenticated;
grant execute on function public.techverse_set_member_role(uuid, text) to authenticated;

create or replace function public.techverse_bootstrap_owner()
returns trigger language plpgsql security definer set search_path = '' as $function$
declare allowed_role text;
begin
  select a.role into allowed_role from public.techverse_admins a
  where lower(btrim(a.email)) = lower(new.email);
  if allowed_role is not null then
    insert into public.company_members (user_id, email, full_name, role)
    values (new.id, new.email, coalesce(nullif(new.raw_user_meta_data ->> 'full_name', ''), split_part(new.email, '@', 1)), allowed_role)
    on conflict (user_id) do update set role = excluded.role, email = excluded.email, updated_at = now();
  end if;
  return new;
end;
$function$;

drop trigger if exists techverse_auth_user_bootstrap on auth.users;
drop trigger if exists techverse_auth_user_bootstrap_email on auth.users;
create trigger techverse_auth_user_bootstrap after insert on auth.users
for each row execute function public.techverse_bootstrap_owner();
create trigger techverse_auth_user_bootstrap_email after update of email on auth.users
for each row execute function public.techverse_bootstrap_owner();

-- Backfill pre-existing allowlisted Auth users.
insert into public.company_members (user_id, email, full_name, role)
select u.id, u.email, coalesce(nullif(u.raw_user_meta_data ->> 'full_name', ''), split_part(u.email, '@', 1)), a.role
from auth.users u join public.techverse_admins a on lower(a.email) = lower(u.email)
on conflict (user_id) do update set role = excluded.role, email = excluded.email, updated_at = now();

update public.company_members
set role = 'employee', updated_at = now()
where lower(btrim(email)) = 'admin@techverseai.in' and role = 'owner';

alter table public.company_members enable row level security;
alter table public.company_tasks enable row level security;
alter table public.work_logs enable row level security;
alter table public.payroll_records enable row level security;
alter table public.company_notifications enable row level security;

revoke all on public.company_members, public.company_tasks, public.work_logs, public.payroll_records, public.company_notifications from anon, authenticated;
grant select on public.company_members to authenticated;
grant update (full_name, title, department, active) on public.company_members to authenticated;
revoke insert on public.company_members from authenticated;
revoke update (role) on public.company_members from authenticated;
grant select on public.company_tasks to authenticated;
grant insert (title, description, assignee_id, status, priority, due_at) on public.company_tasks to authenticated;
grant update (title, description, assignee_id, status, priority, due_at, progress) on public.company_tasks to authenticated;
grant delete on public.company_tasks to authenticated;
grant select, insert on public.work_logs to authenticated;
grant select, insert, update, delete on public.payroll_records to authenticated;
grant select, insert on public.company_notifications to authenticated;
grant update (read_at) on public.company_notifications to authenticated;

drop policy if exists members_read_company on public.company_members;
create policy members_read_company on public.company_members for select to authenticated
using (public.is_techverse_manager() or user_id = auth.uid());
drop policy if exists members_manage_company on public.company_members;
create policy members_manage_company on public.company_members for all to authenticated
using (public.is_techverse_manager()) with check (public.is_techverse_manager());

drop policy if exists tasks_read_company on public.company_tasks;
create policy tasks_read_company on public.company_tasks for select to authenticated
using (public.is_techverse_manager() or assignee_id = auth.uid());
drop policy if exists tasks_manager_insert on public.company_tasks;
create policy tasks_manager_insert on public.company_tasks for insert to authenticated
with check (public.is_techverse_manager());
drop policy if exists tasks_manager_update on public.company_tasks;
create policy tasks_manager_update on public.company_tasks for update to authenticated
using (public.is_techverse_manager()) with check (public.is_techverse_manager());
drop policy if exists tasks_employee_progress on public.company_tasks;
create policy tasks_employee_progress on public.company_tasks for update to authenticated
using (assignee_id = auth.uid()) with check (assignee_id = auth.uid());

create or replace function public.techverse_guard_task_update()
returns trigger language plpgsql security invoker set search_path = '' as $function$
begin
  if not public.is_techverse_manager() and (
    new.title is distinct from old.title or new.description is distinct from old.description
    or new.assignee_id is distinct from old.assignee_id or new.assigned_by is distinct from old.assigned_by
    or new.priority is distinct from old.priority or new.due_at is distinct from old.due_at
    or new.created_at is distinct from old.created_at
  ) then
    raise exception 'Employees may only update task progress and status';
  end if;
  return new;
end;
$function$;
drop trigger if exists company_tasks_guard_update on public.company_tasks;
create trigger company_tasks_guard_update before update on public.company_tasks
for each row execute function public.techverse_guard_task_update();

create or replace function public.techverse_touch_task_updated_at()
returns trigger language plpgsql set search_path = '' as $function$
begin
  new.updated_at := now();
  return new;
end;
$function$;
drop trigger if exists company_tasks_touch_updated_at on public.company_tasks;
create trigger company_tasks_touch_updated_at before update on public.company_tasks
for each row execute function public.techverse_touch_task_updated_at();

create or replace function public.techverse_notify_task_assignment()
returns trigger language plpgsql security definer set search_path = '' as $function$
begin
  if tg_op = 'INSERT' or new.assignee_id is distinct from old.assignee_id then
    insert into public.company_notifications (recipient_id, title, body, kind, task_id)
    values (new.assignee_id, 'New task assigned', new.title, 'task', new.id);
  end if;
  return new;
end;
$function$;
drop trigger if exists company_tasks_notify_assignment on public.company_tasks;
drop trigger if exists company_tasks_notify_insert on public.company_tasks;
create trigger company_tasks_notify_insert after insert on public.company_tasks
for each row execute function public.techverse_notify_task_assignment();
create trigger company_tasks_notify_assignment after update of assignee_id on public.company_tasks
for each row execute function public.techverse_notify_task_assignment();
drop policy if exists tasks_manager_delete on public.company_tasks;
create policy tasks_manager_delete on public.company_tasks for delete to authenticated
using (public.is_techverse_manager());

drop policy if exists work_logs_read on public.work_logs;
create policy work_logs_read on public.work_logs for select to authenticated
using (public.is_techverse_manager() or employee_id = auth.uid());
drop policy if exists work_logs_insert on public.work_logs;
create policy work_logs_insert on public.work_logs for insert to authenticated
with check (employee_id = auth.uid() and exists (select 1 from public.company_tasks t where t.id = task_id and (public.is_techverse_manager() or t.assignee_id = auth.uid())));

drop policy if exists payroll_read on public.payroll_records;
create policy payroll_read on public.payroll_records for select to authenticated
using (public.is_techverse_manager() or employee_id = auth.uid());
drop policy if exists payroll_manager_manage on public.payroll_records;
create policy payroll_manager_manage on public.payroll_records for all to authenticated
using (public.is_techverse_manager()) with check (public.is_techverse_manager());

drop policy if exists notifications_read on public.company_notifications;
create policy notifications_read on public.company_notifications for select to authenticated
using (public.is_techverse_manager() or recipient_id = auth.uid());
drop policy if exists notifications_manager_insert on public.company_notifications;
create policy notifications_manager_insert on public.company_notifications for insert to authenticated
with check (public.is_techverse_manager());
drop policy if exists notifications_read_self on public.company_notifications;
create policy notifications_read_self on public.company_notifications for update to authenticated
using (recipient_id = auth.uid()) with check (recipient_id = auth.uid());

-- Keep the original admin gate compatible with the manager role.
create or replace function public.is_techverse_admin()
returns boolean language sql stable security definer set search_path = '' as $function$
  select public.is_techverse_manager();
$function$;
revoke all on function public.is_techverse_admin() from public, anon;
grant execute on function public.is_techverse_admin() to authenticated;

-- Enable Realtime broadcasts for task and notification changes.
do $block$
begin
  alter publication supabase_realtime add table public.company_tasks;
exception when duplicate_object then null;
end;
$block$;
do $block$
begin
  alter publication supabase_realtime add table public.company_notifications;
exception when duplicate_object then null;
end;
$block$;
do $block$
begin
  alter publication supabase_realtime add table public.company_members;
exception when duplicate_object then null;
end;
$block$;
do $block$
begin
  alter publication supabase_realtime add table public.work_logs;
exception when duplicate_object then null;
end;
$block$;
do $block$
begin
  alter publication supabase_realtime add table public.payroll_records;
exception when duplicate_object then null;
end;
$block$;
