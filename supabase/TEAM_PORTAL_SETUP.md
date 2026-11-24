# TechVerse AI team portal setup

Run these steps in Supabase project `miqgajkwnyfhmkztnkud`.

1. Confirm the existing `techverse_admin_leads.sql` migration has been applied.
2. Run `techverse_team_portal.sql` in Supabase SQL Editor. It adds `admin@techverseai.in` as the owner allowlist entry. If that email already exists in Supabase Auth, the owner profile is created automatically. Otherwise, create/invite that Auth user in Supabase and let the owner set a password privately; the database trigger will create the profile.
3. Deploy the invitation/email Edge Function:

   ```sh
   supabase functions deploy team-admin
   ```

4. Configure its email sender secrets if email delivery is wanted. Use a verified sending domain in Resend:

   ```sh
   supabase secrets set APP_ORIGIN=https://www.techverseai.in EMAIL_FROM="TechVerse AI <team@your-verified-domain>" RESEND_API_KEY=re_...
   ```

   Supabase provides the project URL and server-only Auth key to Edge Functions. Never add the service role/secret key to Vercel `VITE_*` variables or browser code. Invitations use setup links; employee passwords are never sent by email.

5. In Supabase Auth URL configuration, allow `https://www.techverseai.in/employee?setup=1` as a redirect URL (and the matching local development URL if testing locally).
6. Redeploy the site after applying the migration and deploying the function. The existing Vercel public Supabase URL and publishable key are sufficient for the browser app.

## Included capabilities

- Admin/owner: employee directory, secure invites, in-app announcements, task assignments and progress, time totals, private salary records, plus existing contact leads.
- Employee: sign-in, task progress, time logging, in-app notifications, and access to their own salary records.
- RLS keeps employee-visible data scoped to the signed-in employee; only managers can see the company team and manage salaries.
- Realtime updates are enabled for tasks and notifications.
- Email for task/announcement updates is optional and requires the verified Resend sender above. In-app notifications work without it.

Salary records are bookkeeping only; this portal does not transfer funds, calculate tax, or run statutory payroll.
