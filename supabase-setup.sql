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
  for insert with check (true);

-- Only allow reads via service role (your backend / Make.com / Zapier)
-- This means the form can write, but nobody can read data via the browser
create policy "Allow service role reads" on contacts
  for select using (auth.role() = 'service_role');
