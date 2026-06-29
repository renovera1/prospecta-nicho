create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  email text not null,
  whatsapp text,
  source text,
  status text not null default 'new',
  consent boolean not null default false,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  notes text
);

create table if not exists public.custom_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  email text not null,
  whatsapp text,
  niche text,
  city text,
  state text,
  cnae text,
  opening_date_start date,
  opening_date_end date,
  company_size text,
  registration_status text,
  requested_quantity integer,
  commercial_goal text,
  requested_fields text[],
  notes text,
  status text not null default 'new'
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  product_slug text not null,
  customer_name text,
  customer_email text,
  customer_whatsapp text,
  amount numeric(12,2) not null,
  currency text not null default 'BRL',
  payment_provider text not null,
  provider_payment_id text,
  status text not null default 'pending',
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  event_type text not null,
  entity_type text,
  entity_id uuid,
  payload jsonb not null default '{}'::jsonb
);

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  email text not null,
  whatsapp text,
  subject text not null,
  message text not null,
  status text not null default 'new',
  consent boolean not null default true
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  order_id uuid references public.orders(id),
  provider text not null,
  provider_payment_id text,
  idempotency_key text,
  status text not null default 'pending',
  raw_payload jsonb not null default '{}'::jsonb
);

create table if not exists public.exports (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  order_id uuid references public.orders(id),
  status text not null default 'pending',
  snapshot_date date,
  filters jsonb not null default '{}'::jsonb,
  fields text[] not null default '{}',
  file_url text,
  expires_at timestamptz
);

create table if not exists public.export_downloads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  export_id uuid references public.exports(id),
  ip_hash text,
  user_agent text
);

create table if not exists public.consents (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  subject_email text,
  subject_whatsapp text,
  source text not null,
  consent_text text not null,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.suppression_list (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  normalized_identifier text not null,
  reason text not null,
  status text not null default 'active'
);

create table if not exists public.admin_profiles (
  id uuid primary key references auth.users(id),
  created_at timestamptz not null default now(),
  role text not null check (role in ('admin', 'operador', 'leitura'))
);

alter table public.leads enable row level security;
alter table public.custom_requests enable row level security;
alter table public.orders enable row level security;
alter table public.audit_logs enable row level security;
alter table public.contact_requests enable row level security;
alter table public.payments enable row level security;
alter table public.exports enable row level security;
alter table public.export_downloads enable row level security;
alter table public.consents enable row level security;
alter table public.suppression_list enable row level security;
alter table public.admin_profiles enable row level security;

create policy "service role manages leads" on public.leads for all using (auth.role() = 'service_role');
create policy "service role manages custom requests" on public.custom_requests for all using (auth.role() = 'service_role');
create policy "service role manages orders" on public.orders for all using (auth.role() = 'service_role');
create policy "service role manages audit logs" on public.audit_logs for all using (auth.role() = 'service_role');
create policy "service role manages contact requests" on public.contact_requests for all using (auth.role() = 'service_role');
create policy "service role manages payments" on public.payments for all using (auth.role() = 'service_role');
create policy "service role manages exports" on public.exports for all using (auth.role() = 'service_role');
create policy "service role manages export downloads" on public.export_downloads for all using (auth.role() = 'service_role');
create policy "service role manages consents" on public.consents for all using (auth.role() = 'service_role');
create policy "service role manages suppression list" on public.suppression_list for all using (auth.role() = 'service_role');
create policy "admins read admin profiles" on public.admin_profiles for select using (auth.uid() = id or auth.role() = 'service_role');
