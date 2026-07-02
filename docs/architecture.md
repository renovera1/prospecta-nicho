# Arquitetura ProspectaNicho

## Objetivo

A aplicação combina site público, editor de recorte, painel administrativo, APIs comerciais, pagamentos e pipeline de dados empresariais. A refatoração atual preserva o `app/` do Next.js na raiz para reduzir risco, mas introduz uma camada modular em `src/` para regras novas e código de manutenção.

## Camadas

- `app/`: rotas Next.js, páginas, route handlers e entrypoints.
- `components/`: componentes visuais existentes, separados por domínio quando já há subpastas (`admin`, `editor`).
- `src/config/`: validação de ambiente e configuração runtime.
- `src/schemas/`: schemas Zod compartilhados por APIs, testes e services.
- `src/server/repositories/`: acesso indireto a persistência, e-mail e auditoria.
- `src/server/services/`: regras de negócio chamadas por APIs.
- `src/lib/security/`: helpers transversais como logger redigido.
- `lib/server/`: integrações server-side já existentes; service role permanece isolada do client.
- `supabase/`: schema SQL, RLS, storage buckets e políticas.
- `workers/` e `infra/`: pipeline Receita Federal, filas e infraestrutura auxiliar.

## Regras

- Componentes client não acessam `SUPABASE_SERVICE_ROLE_KEY`.
- APIs validam payload com Zod e chamam services quando houver regra de negócio.
- Services sanitizam dados e chamam repositories.
- Dados sensíveis não são logados sem mascaramento.
- Preços e produtos ficam no catálogo central, não hardcoded em componentes.
- GitHub Pages é apenas publicação estática; backend real exige Vercel/API runtime.

## Fluxos

- Solicitação rápida: página pública -> `/api/custom-requests` em runtime server -> service -> `custom_requests`, `leads`, e-mail e auditoria.
- Exportação: pedido aprovado por webhook -> geração em worker -> storage privado -> URL assinada com expiração.
- Admin: deve evoluir de token administrativo para Supabase Auth + roles + RLS em todas as ações.
