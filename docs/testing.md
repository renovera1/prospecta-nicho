# Testes

## Scripts

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run test:e2e`
- `npm run check:links`
- `npm run check:metadata`
- `npm run check:content`
- `pytest`

## Cobertura atual

- Unitários Node em `tests/*.test.mjs`.
- Privacidade RFB em `tests/test_rfb_privacy.py`.
- Playwright em `e2e/` para rotas, formulários, admin, links, layout e screenshots.

## Lacunas

- Testes reais de RLS dependem de Supabase configurado.
- Checkout sandbox depende de credenciais do provider.
- Webhook completo depende de assinatura real do provider.
