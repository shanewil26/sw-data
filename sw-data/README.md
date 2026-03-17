# SW Data — Next.js Website

Built with Next.js 14, Tailwind CSS, Supabase, and Google Analytics.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (contact form submissions)
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel (recommended)

---

## Local Development

```bash
npm install
cp .env.local.example .env.local
# Fill in your env vars (see below)
npm run dev
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=        # From Supabase: Settings → API → Project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # From Supabase: Settings → API → anon public key
NEXT_PUBLIC_GA_MEASUREMENT_ID=   # From GA4: Admin → Data Streams → Measurement ID (G-XXXXXXX)
```

---

## Supabase Setup

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project (e.g. "sw-data")
3. Go to **SQL Editor** and run the contents of `supabase-setup.sql`
4. Go to **Settings → API** and copy your Project URL and anon key into `.env.local`

---

## Google Analytics Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for swdata.com
3. Add a Web data stream with your domain
4. Copy the **Measurement ID** (starts with `G-`) into `.env.local`

GA is already wired up in the codebase:
- Page views tracked automatically via `GoogleAnalytics` component in `layout.tsx`
- Contact form submissions tracked as a custom event (`form_submit`) in `Contact.tsx`

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo in the Vercel dashboard for automatic deployments.

**Add env vars in Vercel:**
Vercel Dashboard → Your Project → Settings → Environment Variables
Add all three variables from `.env.local`.

---

## Adding Future Sites

The `source` column in the `contacts` table is already set up for multi-site tracking.
Each new site just needs to pass a different `source` value when submitting (e.g. `'site2.com'`).

Query all contacts across sites:
```sql
select * from contacts order by created_at desc;
```

Query by site:
```sql
select * from contacts where source = 'swdata.com';
```

---

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout — fonts, GA, metadata
    page.tsx          # Home page
    globals.css       # Global styles + animations
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Contact.tsx       # Form with Supabase + GA integration
    Footer.tsx
    GoogleAnalytics.tsx
  lib/
    supabase.ts       # Supabase client + submitContactForm helper
```
