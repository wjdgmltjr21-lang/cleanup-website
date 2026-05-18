create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  avatar_url text,
  plan text default 'free' check (plan in ('free','pro')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.story_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  genre text,
  summary text,
  status text default 'draft',
  cover_image_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.characters (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  project_id uuid references public.story_projects(id) on delete cascade,
  name text not null,
  role text, age text, personality text, background text, goal text, conflict text, appearance text,
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table if not exists public.worldbuilding (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  project_id uuid references public.story_projects(id) on delete cascade,
  category text not null,
  title text not null,
  description text, rules text, notes text,
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  plan text default 'free', status text default 'active',
  toss_customer_key text, toss_billing_key text,
  current_period_start timestamptz, current_period_end timestamptz,
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  payment_key text, order_id text unique, amount integer not null, status text, plan text, raw_response jsonb,
  created_at timestamptz default now()
);

create table if not exists public.generation_jobs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  project_id uuid references public.story_projects(id) on delete cascade,
  type text not null, prompt text not null, status text default 'pending', result text, error_message text,
  email_notified boolean default false, created_at timestamptz default now(), completed_at timestamptz, updated_at timestamptz default now()
);

create table if not exists public.email_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  generation_job_id uuid references public.generation_jobs(id) on delete cascade,
  email_type text not null, recipient_email text not null, subject text not null, status text default 'pending', resend_message_id text, error_message text,
  created_at timestamptz default now(), sent_at timestamptz
);

alter table public.profiles enable row level security;
alter table public.story_projects enable row level security;
alter table public.characters enable row level security;
alter table public.worldbuilding enable row level security;
alter table public.subscriptions enable row level security;
alter table public.payments enable row level security;
alter table public.generation_jobs enable row level security;
alter table public.email_logs enable row level security;

create policy "own profiles" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "own projects" on public.story_projects for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own characters" on public.characters for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own worldbuilding" on public.worldbuilding for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "read own subscriptions" on public.subscriptions for select using (auth.uid() = user_id);
create policy "read own payments" on public.payments for select using (auth.uid() = user_id);
create policy "own generation jobs" on public.generation_jobs for select using (auth.uid() = user_id);
create policy "insert own generation jobs" on public.generation_jobs for insert with check (auth.uid() = user_id);
create policy "read own email logs" on public.email_logs for select using (auth.uid() = user_id);
