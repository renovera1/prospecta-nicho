# Auditoria Content Studio e QA

Data: 2026-06-30

## Escopo auditado

- Rotas públicas: home, produtos, produtos por slug, montar base, para quem é, como funciona, campos, FAQ, contato, sobre e páginas legais.
- Rotas administrativas criadas: `/admin`, `/admin/login`, `/admin/conteudo`, `/admin/conteudo/[pagina]`, `/admin/produtos`, `/admin/segmentos`, `/admin/faq`, `/admin/menus`, `/admin/ctas`, `/admin/seo`, `/admin/midias`, `/admin/configuracoes`, `/admin/revisoes`, `/admin/leads`, `/admin/pedidos`, `/admin/preview`, `/admin/preview/share/[token]`.
- Endpoints administrativos: `/api/admin/publish` e `/api/admin/preview-share`.
- Formulários públicos: contato, amostra e base personalizada.
- Variáveis críticas: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_DEPLOY_ENV`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `ADMIN_API_TOKEN`, Supabase, pagamentos, e-mail, R2/S3, Redis e ClickHouse.

## Correções aplicadas

- URLs absolutas agora passam por `lib/site-url.ts`, com bloqueio de `localhost`, `127.0.0.1`, `:3000` e `:3001` em URL pública.
- CTAs têm resolvedor central em `lib/cta-resolver.ts`, com bloqueio de link vazio, `javascript:` e URL local.
- Logo passou a ter componente único em `components/BrandLogo.tsx`, usando somente `logo-selected.png` e `logo-selected-dark.png`.
- Cards de produto passam por `components/ProductVisual.tsx`, com um ícone principal e marca d'água CSS abaixo de 0.06 de opacidade.
- Prévia de entrega removeu itens excessivos da toolbar e manteve somente status ativo, porte, janela temporal e aviso ilustrativo.
- Content Studio foi criado com edição, preview responsivo, limites editoriais, autosave visual e publicação com revalidação segura.

## Status dos itens sensíveis

- Supabase: schema e RLS preparados; operação real depende de variáveis e aplicação do SQL no projeto Supabase.
- Pagamentos: preservados; alteração de preço no admin documenta efeito apenas para novas compras.
- WhatsApp: fallback para contato quando número público não estiver configurado.
- Preview: rotas admin são noindex/nofollow e o compartilhamento é temporário e somente leitura.
- Domínio de produção: sem URL local renderizada em metadata pública.

## Gates de validação

- `npm run lint`
- `npm run build`
- `npm run spellcheck`
- `npm run test`
- `npm run test:e2e`
- `npm run check:links`
- `npm run check:metadata`
- `npm run check:content`
