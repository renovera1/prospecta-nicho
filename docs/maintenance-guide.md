# Guia de Manutenção

## Rodar localmente

1. Instalar dependências com `npm ci`.
2. Copiar `.env.example` para `.env.local`.
3. Configurar apenas variáveis necessárias ao fluxo testado.
4. Rodar `npm run dev`.

## Antes de publicar

1. `npm run lint`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`
5. `npm run check:links`
6. `npm run check:metadata`
7. `npm run check:content`

## Produtos e preços

Editar catálogo em `lib/products.ts` e validar páginas `/produtos`, `/admin/produtos` e `/admin/precos`.

## Rotas e CTAs

Adicionar rotas públicas em `lib/routes.ts` quando necessário. CTAs administrativos devem passar por `lib/cta-resolver.ts`.

## Incidentes

1. Revogar chave exposta.
2. Criar nova chave no provedor.
3. Atualizar ambiente.
4. Verificar histórico e logs.
5. Registrar ação em `docs/github-security.md` ou runbook específico.
