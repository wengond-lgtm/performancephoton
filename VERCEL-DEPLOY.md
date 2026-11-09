# Vercel deployment

This project uses the standard Next.js build commands:

- Install command: `npm install`
- Build command: `npm run build`
- Output setting: leave it blank; Vercel detects Next.js automatically.

After importing the GitHub repository in Vercel, add both `performancephoton.com` and `www.performancephoton.com` under **Project → Settings → Domains**. Vercel shows the exact DNS records for the account and project.

If GoDaddy continues to host DNS, add the Vercel-required records in GoDaddy rather than changing nameservers. For a root domain this is usually an `A` record for `@`; `www` is usually a `CNAME`. Use the exact values Vercel displays because they can be project-specific.
