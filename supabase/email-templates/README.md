# Supabase invite email

In Supabase Dashboard → Authentication → Emails → Templates → **Invite user**:

- Subject: `You're invited to join the TechVerse AI team`
- Body: paste `invite.html`

Keep `{{ .ConfirmationURL }}` in both the button and fallback link. Supabase generates the signed, single-use confirmation URL.

In the **Reset Password** template, use the same subject/body approach and paste `recovery.html` as the body.

Then open Authentication → URL Configuration:

- Site URL: `https://www.techverseai.in`
- Add these exact Redirect URLs:
  - `https://www.techverseai.in/employee?setup=1` (invitation)
  - `https://www.techverseai.in/employee?recovery=1` (password reset)
- For local development only, separately allow `http://localhost:5173/employee?setup=1` if needed. The production invitation should use the production URL.

The current error URL names `localhost:3000`, which is not this Vite app's local port and is not reachable from the recipient's computer. For manually sent dashboard emails, the Site URL is the default redirect. The employee workspace now requests password resets to `/employee?recovery=1`; add that exact URL to the allowlist. For app-generated invites, the Edge Function passes `APP_ORIGIN/employee?setup=1`; configure `APP_ORIGIN=https://www.techverseai.in` in Supabase Edge Function secrets and redeploy `team-admin`.

After saving the template and URLs, send a **new** invite. The old one-time link that has expired cannot be repaired or reused.

## Delivery reliability

The supplied screenshot shows Supabase delivered an invite, but with its default sender/template. For reliable branded delivery, configure a custom SMTP provider for Supabase Auth with a verified sending domain and proper SPF/DKIM records. A prettier template does not fix provider rate limits or spam placement.
