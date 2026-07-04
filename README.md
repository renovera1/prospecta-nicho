# ProspectaNicho

Plataforma comercial da ProspectaNicho para venda de bases B2B segmentadas, pedidos de amostra, montagem de base personalizada e preparação do motor de dados empresariais.

Repositório e publicação GitHub Pages esperados:

- Repositório: `renovera1/prospecta-nicho`
- Site público: `https://renovera1.github.io/prospecta-nicho/`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zod para validacao server-side
- Supabase como persistencia planejada
- ClickHouse como camada analitica planejada
- Worker Python para ingestao e exportacao RFB/CNPJ

## Rodar localmente

```bash
npm install
npm run dev
```

Para build de producao:

```bash
npm run build
npm run start
```

## Testes e validacao

```bash
npm test
npm run lint
npm run build
python -m pytest tests/test_rfb_privacy.py
python -m workers.rfb_cnpj run --sample
python -m workers.rfb_cnpj export --sample
```

## Variaveis de ambiente

Copie `.env.example` para `.env.local` e configure os provedores reais antes de publicar:

- Site, WhatsApp, analytics e Turnstile
- Supabase
- Resend
- Mercado Pago ou Asaas
- Cloudflare R2
- ClickHouse
- Redis
- pipeline RFB/CNPJ
- token administrativo interno

Sem credenciais reais, os endpoints continuam seguros: retornam sucesso controlado para captura comercial quando possivel e bloqueiam recursos internos que dependem de segredo.

## Areas principais

- `/` pagina comercial principal
- `/montar-minha-base` editor de base personalizada
- `/para-quem-e` segmentos atendidos
- `/contato` contato real da ProspectaNicho
- `/produtos` catalogo comercial
- `/pedido/[id]` acompanhamento de pedido
- `/admin` painel tecnico protegido por configuracao
- `/politica-de-supressao`
- `/termos-de-entrega`
- `/aviso-de-dados-empresariais`

`/blog` redireciona permanentemente para `/`, conforme reposicionamento comercial.

## Dados e privacidade

O projeto evita campos pessoais no catalogo padrao de bases e prepara o fluxo para dados empresariais publicos, supressao, auditoria, consentimento, rastreabilidade de exportacoes e revisao de privacidade antes de entregas.

Documentacao complementar:

- `docs/architecture.md`
- `docs/data-pipeline.md`
- `docs/security.md`
- `docs/runbook-importacao.md`
- `docs/runbook-exportacao.md`
- `docs/production-checklist.md`
- `infra/clickhouse/schema.sql`
- `supabase/schema.sql`
