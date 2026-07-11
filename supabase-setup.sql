-- Run this in your Supabase SQL Editor to set up the contacts table

create table contacts (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  service text,
  message text,
  source text default 'swdata.com',  -- useful when you add more sites later
  created_at timestamp with time zone default now()
);

-- Index on email for fast lookups
create index contacts_email_idx on contacts (email);

-- Index on source so you can filter by site
create index contacts_source_idx on contacts (source);

-- Index on created_at for date range queries
create index contacts_created_at_idx on contacts (created_at desc);

-- Enable Row Level Security (important!)
alter table contacts enable row level security;

-- Allow inserts from anonymous users (your contact form)
create policy "Allow public inserts" on contacts
  for insert to anon, authenticated
  with check (true);

-- Only allow reads via service role (your backend / Make.com / Zapier)
-- This means the form can write, but nobody can read data via the browser
create policy "Allow service role reads" on contacts
  for select using (auth.role() = 'service_role');

-- Mailing list signups (EmailCapture.tsx) — double opt-in, synced to HubSpot on confirm
create table email_signups (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  email text not null unique,
  confirmed boolean default false,
  confirmed_at timestamp with time zone,
  confirmation_token text,
  source text,
  created_at timestamp with time zone default now()
);

create index email_signups_email_idx on email_signups (email);
create index email_signups_token_idx on email_signups (confirmation_token);

alter table email_signups enable row level security;

-- Allow the public form to insert and to upsert (re-submit) their own pending signup
create policy "Allow public insert" on email_signups
  for insert to anon, authenticated
  with check (true);

create policy "Allow public update of unconfirmed signups" on email_signups
  for update to anon, authenticated
  using (confirmed = false)
  with check (confirmed = false);

-- Only the backend (service role) can read signups or flip confirmed = true
create policy "Allow service role reads" on email_signups
  for select using (auth.role() = 'service_role');
