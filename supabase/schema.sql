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

alter table public.leads enable row level security;
alter table public.custom_requests enable row level security;
alter table public.orders enable row level security;
alter table public.audit_logs enable row level security;

create policy "service role manages leads" on public.leads for all using (auth.role() = 'service_role');
create policy "service role manages custom requests" on public.custom_requests for all using (auth.role() = 'service_role');
create policy "service role manages orders" on public.orders for all using (auth.role() = 'service_role');
create policy "service role manages audit logs" on public.audit_logs for all using (auth.role() = 'service_role');
