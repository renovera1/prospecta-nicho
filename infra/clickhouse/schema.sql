CREATE TABLE IF NOT EXISTS companies (
  cnpj_basico String,
  razao_social String,
  natureza_juridica String,
  porte String,
  capital_social Decimal(18, 2),
  snapshot_date Date
) ENGINE = MergeTree
ORDER BY (snapshot_date, cnpj_basico);

CREATE TABLE IF NOT EXISTS establishments (
  cnpj_completo String,
  cnpj_basico String,
  matriz_filial String,
  nome_fantasia String,
  situacao_cadastral String,
  data_inicio_atividade Date,
  cnae_principal String,
  uf LowCardinality(String),
  municipio String,
  bairro String,
  cep String,
  telefone_empresarial String,
  email_empresarial String,
  is_active UInt8,
  is_headquarters UInt8,
  requires_privacy_review UInt8,
  has_business_phone UInt8,
  has_business_email UInt8,
  snapshot_date Date
) ENGINE = MergeTree
ORDER BY (snapshot_date, uf, municipio, cnae_principal, data_inicio_atividade, cnpj_completo);

CREATE TABLE IF NOT EXISTS establishment_cnaes (
  cnpj_completo String,
  cnae String,
  is_primary UInt8,
  snapshot_date Date
) ENGINE = MergeTree
ORDER BY (snapshot_date, cnae, cnpj_completo);

CREATE TABLE IF NOT EXISTS simple_options (
  cnpj_basico String,
  is_simples UInt8,
  is_mei UInt8,
  data_opcao_simples Nullable(Date),
  data_exclusao_simples Nullable(Date),
  snapshot_date Date
) ENGINE = MergeTree
ORDER BY (snapshot_date, cnpj_basico);

CREATE TABLE IF NOT EXISTS cities (codigo String, nome String, uf String) ENGINE = MergeTree ORDER BY (uf, nome);
CREATE TABLE IF NOT EXISTS cnaes (codigo String, descricao String) ENGINE = MergeTree ORDER BY codigo;
CREATE TABLE IF NOT EXISTS legal_natures (codigo String, descricao String) ENGINE = MergeTree ORDER BY codigo;

CREATE TABLE IF NOT EXISTS rfb_snapshots (
  snapshot_date Date,
  manifest String,
  created_at DateTime
) ENGINE = MergeTree
ORDER BY snapshot_date;

CREATE TABLE IF NOT EXISTS rfb_import_runs (
  id String,
  snapshot_date Date,
  status String,
  started_at DateTime,
  finished_at Nullable(DateTime),
  error String
) ENGINE = MergeTree
ORDER BY (snapshot_date, id);

CREATE TABLE IF NOT EXISTS exports (
  id String,
  order_id String,
  snapshot_date Date,
  filters String,
  status String,
  created_at DateTime
) ENGINE = MergeTree
ORDER BY (created_at, id);

CREATE TABLE IF NOT EXISTS export_rows (
  export_id String,
  cnpj_completo String,
  row_number UInt32
) ENGINE = MergeTree
ORDER BY (export_id, row_number);

CREATE TABLE IF NOT EXISTS suppression_list (
  normalized_identifier String,
  reason String,
  created_at DateTime
) ENGINE = MergeTree
ORDER BY normalized_identifier;
