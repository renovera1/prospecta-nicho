# Auditoria final ProspectaNicho

Data: 2026-07-01

## Rotas públicas

- `/`
- `/produtos`
- `/produtos/empresas-recem-abertas`
- `/produtos/agencias-marketing`
- `/produtos/contabilidades`
- `/produtos/base-personalizada`
- `/produtos/amostra-gratuita`
- `/montar-minha-base`
- `/para-quem-e`
- `/como-funciona`
- `/campos-da-base`
- `/faq`
- `/contato`
- `/sobre`
- Páginas legais e rotas de compra.

## Rotas administrativas

- `/admin/login`
- `/admin`
- `/admin/conteudo`
- `/admin/produtos`
- `/admin/produtos/[id]`
- `/admin/precos`
- `/admin/segmentos`
- `/admin/faq`
- `/admin/ctas`
- `/admin/menus`
- `/admin/seo`
- `/admin/midias`
- `/admin/configuracoes`
- `/admin/leads`
- `/admin/pedidos`
- `/admin/exportacoes`
- `/admin/revisoes`
- `/admin/preview`

## Links e CTAs

Os CTAs internos usam rotas relativas. O resolvedor em `lib/cta-resolver.ts` bloqueia link vazio, `javascript:` e URLs locais. O auditor `npm run check:links` cobre links renderizados em código.

## Formulários

- Contato: endpoint `/api/contact`.
- Amostra: endpoint `/api/free-sample-request`.
- Base personalizada: endpoint `/api/custom-base-request`.
- Todos preservam honeypot, rate limit e Turnstile quando configurado.

## Assets de marca

- `logo-master-reference.png`
- `logo-horizontal.png`
- `logo-horizontal-dark-bg.png`
- `logo-symbol.png`
- `favicon.png`
- `apple-touch-icon.png`
- `og-image.png`
- `brand-cover.png`

## Produtos e preços

O catálogo público consome uma camada de produto preparada para migração para Supabase. O schema inclui `products` e `product_price_history`; a operação real de preço dinâmico depende de aplicar o SQL e conectar Supabase Auth/Database em produção.

## Backend e armazenamento

- Supabase PostgreSQL: schema completo em `supabase/schema.sql`.
- Supabase Storage: buckets declarados para marca, mídia, produto e preview.
- R2/S3: reservado para RFB bruto, Parquet, exports CSV/XLSX e links temporários.
- ClickHouse: reservado para consulta empresarial de alto volume.
- Redis/Upstash: reservado para filas, rate limit, jobs e cache temporário.

## Riscos removidos

- Logo anterior gerada foi substituída pela imagem oficial enviada.
- Cards de produto não combinam mais escudo, ícone e pulse.
- Preview de entrega não renderiza tabela comprimida no mobile.
- Metadata usa URL pública sanitizada.
- Checks bloqueiam encoding quebrado e URLs locais.

## Pendências de ambiente

- Aplicar `supabase/schema.sql` no Supabase real.
- Configurar Supabase Auth e perfis administrativos.
- Configurar credenciais de pagamento e webhooks.
- Configurar R2/S3, ClickHouse e Redis para dados reais.
- Conectar domínio de produção permanente.
