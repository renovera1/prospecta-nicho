# Auditoria atual - ProspectaNicho

## Estrutura atual

- `app/`: rotas Next.js, APIs públicas, APIs internas protegidas, páginas legais, admin e status de compra.
- `components/`: UI, formulários, layout, radar, cards e editor.
- `components/editor/`: fluxo "Monte sua base".
- `lib/`: configuração de site, catálogo de produtos, WhatsApp, analytics, pagamentos, segurança server-side e integrações.
- `public/assets/brand/`: identidade visual oficial.
- `public/assets/renovera-legado/`: páginas legadas Renovera isoladas em iframe para rotas específicas antigas.
- `supabase/`: schema transacional com RLS.
- `infra/clickhouse/`: schema analítico.
- `workers/rfb_cnpj/`: scaffolding do worker Python da Receita Federal.
- `docs/`: arquitetura, runbooks, segurança e checklist de produção.
- `tests/`: testes JS e Python para regras críticas.

## Rotas existentes

- Públicas principais: `/`, `/produtos`, `/produtos/[slug]`, `/montar-minha-base`, `/para-quem-e`, `/como-funciona`, `/campos-da-base`, `/faq`, `/contato`, `/sobre`.
- Produto/amostra: `/produtos/amostra-gratuita`, `/produtos/base-personalizada`, `/amostra`.
- Soluções: `/solucoes` e `/solucoes/[slug]`.
- Compra/pedido: `/compra/sucesso`, `/compra/pendente`, `/compra/erro`, `/pedido/[id]`.
- Legal: `/politica-de-privacidade`, `/politica-de-supressao`, `/termos-de-uso`, `/termos-de-entrega`, `/aviso-de-dados-empresariais`, `/politica-de-cookies`.
- Admin: `/admin`.
- Desativada: `/blog` redireciona permanentemente para `/`.

## Componentes existentes

- Preservados: `Brand`, `BrandWatermark`, `ButtonLink`, `CookieBanner`, `FAQAccordion`, `Footer`, `Header`, `WhatsAppButton`.
- Refatorados: `ProductSignalCard`, `HomeSampleForm`, `SampleConversionSection`, `LeadPreviewSheet`, `OpportunityRadar`.
- Criados: `ContactForm`, `HomeBaseBuilderTeaser` e componentes de `components/editor`.

## Formulários

- Amostra gratuita: `POST /api/free-sample-request` e alias `POST /api/sample-request`.
- Editor de recorte: `POST /api/custom-base-request`.
- Contato: `POST /api/contact`.

Todos usam Zod, honeypot, rate limit, sanitização, Turnstile preparado, persistência/e-mail isolados por adaptadores e retorno explícito de status de integração.

## Endpoints internos

- `POST /api/internal/leads/search`
- `POST /api/internal/leads/count`
- `POST /api/internal/leads/export`
- `GET /api/internal/exports/[id]`
- `POST /api/internal/imports/run`
- `GET /api/internal/imports/status`

Todos exigem `ADMIN_API_TOKEN` e não expõem dados reais sem infraestrutura configurada.

## Variáveis usadas

`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `CONTACT_EMAIL`, links públicos de Mercado Pago, tokens Mercado Pago/Asaas, R2/S3, ClickHouse, Redis, `RFB_CNPJ_BASE_URL`, `TURNSTILE_SECRET_KEY`, `ADMIN_API_TOKEN`.

## Estado das integrações

- WhatsApp: helper central pronto; depende de `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Supabase: schema e RLS criados; persistência real depende de credenciais.
- Resend: adaptador preparado; envio real depende de `RESEND_API_KEY`.
- Pagamentos: interface Mercado Pago/Asaas preparada; checkout real depende de provider configurado.
- ClickHouse: schema criado; consultas reais dependem de infraestrutura.
- Receita Federal: worker scaffold com modo `--sample`; importação nacional depende de RFB/R2/ClickHouse.
- Exportações: contratos e runbook criados; geração real depende de fila, storage e confirmação de pagamento.

## Links e CTAs

- Header final: Bases, Monte sua base, Para quem é, Como funciona, Receber amostra.
- Blog/Conteúdos removidos do header, footer e sitemap.
- `/contato` removido do menu principal e mantido no footer.
- CTAs padronizados conforme briefing.

## Riscos e pendências para produção

- Configurar credenciais reais em ambiente seguro.
- Implementar chamadas reais Supabase/Resend/provider de pagamento no adaptador.
- Rodar importação real da Receita em infraestrutura separada de Vercel.
- Conectar ClickHouse e R2/S3.
- Evoluir `/admin` para Supabase Auth com perfis `admin`, `operador` e `leitura`.
- Validar domínio final em `NEXT_PUBLIC_SITE_URL`.
