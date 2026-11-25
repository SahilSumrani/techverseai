-- Keep Sahil as the sole bootstrap owner; remove the former generic admin allowlist.
insert into public.techverse_admins (email, role)
values ('officialsahilarora05@gmail.com', 'owner')
on conflict (email) do update set role = 'owner';

delete from public.techverse_admins
where lower(btrim(email)) = 'admin@techverseai.in';

update public.company_members
set role = 'owner', updated_at = now()
where lower(btrim(email)) = 'officialsahilarora05@gmail.com';

update public.company_members
set role = 'employee', updated_at = now()
where lower(btrim(email)) = 'admin@techverseai.in'
  and role = 'owner';

-- Role changes must go through the owner-only RPC, not a direct table write.
revoke insert on public.company_members from authenticated;
revoke update (role) on public.company_members from authenticated;

create or replace function public.techverse_set_member_role(p_user_id uuid, p_role text)
returns void
language plpgsql
security definer
set search_path = ''
as $function$
begin
  if auth.uid() is null then
    raise exception 'Sign in required.' using errcode = '42501';
  end if;

  if p_role is null or p_role not in ('employee', 'admin') then
    raise exception 'Only employee or admin access can be assigned.' using errcode = '22023';
  end if;

  if not exists (
    select 1 from public.techverse_admins a
    where lower(btrim(a.email)) = lower(coalesce(auth.jwt() ->> 'email', ''))
      and a.role = 'owner'
  ) and not exists (
    select 1 from public.company_members m
    where m.user_id = auth.uid() and m.active and m.role = 'owner'
  ) then
    raise exception 'Only the owner can change team roles.' using errcode = '42501';
  end if;

  if p_user_id = auth.uid() then
    raise exception 'You cannot change your own owner access.' using errcode = '42501';
  end if;

  update public.company_members
  set role = p_role, updated_at = now()
  where user_id = p_user_id and role <> 'owner';

  if not found then
    raise exception 'Member not found or owner access cannot be changed.' using errcode = 'P0002';
  end if;
end;
$function$;

revoke all on function public.techverse_set_member_role(uuid, text) from public, anon;
grant execute on function public.techverse_set_member_role(uuid, text) to authenticated;

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
