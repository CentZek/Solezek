-- ============================================================================
-- Bahdini English — Supabase schema
-- Paste this entire file into the Supabase SQL editor and run it once.
-- Safe to re-run: everything uses IF NOT EXISTS / OR REPLACE / ON CONFLICT.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. PROFILES (extends auth.users)
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  daily_goal_min int not null default 10 check (daily_goal_min in (5, 10, 15, 20)),
  sound_on boolean not null default true,
  reduced_motion boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-create a profile when a user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 2. USER STATS (XP, coins, streak, daily goal, accuracy counters)
-- ---------------------------------------------------------------------------
create table if not exists public.user_stats (
  user_id uuid primary key references auth.users (id) on delete cascade,
  xp int not null default 0 check (xp >= 0),
  coins int not null default 0 check (coins >= 0),
  streak int not null default 0 check (streak >= 0),
  last_active_date date,
  today_date date,
  minutes_today int not null default 0,
  total_correct int not null default 0,
  total_answers int not null default 0,
  has_spoken boolean not null default false,
  last_daily_challenge date,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 3. LEVEL PROGRESS
-- ---------------------------------------------------------------------------
create table if not exists public.user_level_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  level_id int not null check (level_id > 0),
  completed boolean not null default false,
  stars smallint not null default 0 check (stars between 0 and 3),
  best_score smallint not null default 0 check (best_score between 0 and 100),
  attempts int not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, level_id)
);

-- ---------------------------------------------------------------------------
-- 4. VOCABULARY MASTERY (spaced repetition state per word)
-- ---------------------------------------------------------------------------
create table if not exists public.user_vocabulary (
  user_id uuid not null references auth.users (id) on delete cascade,
  vocab_id text not null,
  level_id int not null,
  score smallint not null default 0 check (score between 0 and 5),
  correct int not null default 0,
  wrong int not null default 0,
  last_seen date not null default current_date,
  updated_at timestamptz not null default now(),
  primary key (user_id, vocab_id)
);

-- ---------------------------------------------------------------------------
-- 5. ACHIEVEMENTS
-- ---------------------------------------------------------------------------
create table if not exists public.user_achievements (
  user_id uuid not null references auth.users (id) on delete cascade,
  achievement_id text not null,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

-- ---------------------------------------------------------------------------
-- 6. ANALYTICS EVENTS (append-only learning telemetry)
-- ---------------------------------------------------------------------------
create table if not exists public.analytics_events (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users (id) on delete set null,
  event text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists analytics_events_user_idx on public.analytics_events (user_id, created_at);
create index if not exists analytics_events_event_idx on public.analytics_events (event, created_at);

-- ---------------------------------------------------------------------------
-- 7. COURSE CONTENT (admin-managed; the app bundles content for offline use,
--    these tables are the future CMS source of truth)
-- ---------------------------------------------------------------------------
create table if not exists public.levels (
  id int primary key,
  title_en text not null,
  title_ckb text not null,
  icon text not null default '📚',
  objective_en text not null default '',
  objective_ckb text not null default '',
  cefr text not null default 'A1' check (cefr in ('A1', 'A2', 'B1', 'B2', 'C1')),
  published boolean not null default false
);

create table if not exists public.vocabulary (
  id text primary key,
  level_id int not null references public.levels (id) on delete cascade,
  en text not null,
  ckb text not null,
  pos text not null default 'other',
  emoji text not null default '',
  phonetic text,
  example_en text not null default '',
  example_ckb text not null default '',
  category text not null default '',
  difficulty smallint not null default 1 check (difficulty between 1 and 3),
  audio_url text,
  image_url text,
  bahdini_reviewed boolean not null default false
);

create index if not exists vocabulary_level_idx on public.vocabulary (level_id);

-- ---------------------------------------------------------------------------
-- 8. ROW LEVEL SECURITY
--     Users can only read/write their own rows. Course content is read-only
--     for everyone (writes happen via the dashboard / service role, which
--     bypasses RLS — so there is intentionally NO client write policy).
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.user_stats enable row level security;
alter table public.user_level_progress enable row level security;
alter table public.user_vocabulary enable row level security;
alter table public.user_achievements enable row level security;
alter table public.analytics_events enable row level security;
alter table public.levels enable row level security;
alter table public.vocabulary enable row level security;

-- profiles
drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles for select using (auth.uid() = id);
drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

-- user_stats
drop policy if exists stats_select_own on public.user_stats;
create policy stats_select_own on public.user_stats for select using (auth.uid() = user_id);
drop policy if exists stats_insert_own on public.user_stats;
create policy stats_insert_own on public.user_stats for insert with check (auth.uid() = user_id);
drop policy if exists stats_update_own on public.user_stats;
create policy stats_update_own on public.user_stats for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- user_level_progress
drop policy if exists progress_select_own on public.user_level_progress;
create policy progress_select_own on public.user_level_progress for select using (auth.uid() = user_id);
drop policy if exists progress_insert_own on public.user_level_progress;
create policy progress_insert_own on public.user_level_progress for insert with check (auth.uid() = user_id);
drop policy if exists progress_update_own on public.user_level_progress;
create policy progress_update_own on public.user_level_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- user_vocabulary
drop policy if exists vocab_select_own on public.user_vocabulary;
create policy vocab_select_own on public.user_vocabulary for select using (auth.uid() = user_id);
drop policy if exists vocab_insert_own on public.user_vocabulary;
create policy vocab_insert_own on public.user_vocabulary for insert with check (auth.uid() = user_id);
drop policy if exists vocab_update_own on public.user_vocabulary;
create policy vocab_update_own on public.user_vocabulary for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- user_achievements
drop policy if exists achievements_select_own on public.user_achievements;
create policy achievements_select_own on public.user_achievements for select using (auth.uid() = user_id);
drop policy if exists achievements_insert_own on public.user_achievements;
create policy achievements_insert_own on public.user_achievements for insert with check (auth.uid() = user_id);

-- analytics: users can append their own events, nobody can read them back
drop policy if exists analytics_insert_own on public.analytics_events;
create policy analytics_insert_own on public.analytics_events for insert with check (auth.uid() = user_id or user_id is null);

-- course content: readable by anyone (including signed-out users), no client writes
drop policy if exists levels_read_all on public.levels;
create policy levels_read_all on public.levels for select using (published = true);
drop policy if exists vocabulary_read_all on public.vocabulary;
create policy vocabulary_read_all on public.vocabulary for select using (true);

-- ---------------------------------------------------------------------------
-- 9. STORAGE BUCKETS (audio + images for future recorded assets)
--    Public read; uploads happen via the dashboard or a service role.
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('audio', 'audio', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

-- Public read access to both buckets.
drop policy if exists audio_public_read on storage.objects;
create policy audio_public_read on storage.objects for select using (bucket_id = 'audio');
drop policy if exists images_public_read on storage.objects;
create policy images_public_read on storage.objects for select using (bucket_id = 'images');

-- ---------------------------------------------------------------------------
-- 10. ACCOUNT DELETION SUPPORT (App Store requirement 5.1.1(v))
--     Users can delete their own data; deleting the auth user itself happens
--     through the delete-account edge function (see supabase/functions/).
--     The cascades above wipe all user rows automatically.
-- ---------------------------------------------------------------------------

-- Done. Next steps (see SUPABASE.md for details):
--   1. Authentication → Providers → Phone → enable
--   2. Deploy send-whatsapp-otp edge function, then Authentication → Hooks →
--      Send SMS → HTTPS hook pointing at it (WhatsApp OTP via Bird.com)
--   3. Deploy the delete-account edge function: supabase functions deploy delete-account
