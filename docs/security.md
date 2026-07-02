# Segurança

## Estado atual

- Repositório fonte `renovera1/prospectanicho-site` confirmado como privado em 2026-07-02.
- Nenhum valor real de segredo foi encontrado na varredura local; existem apenas nomes de variáveis em `.env.example`, docs e código.
- Formulários públicos usam Zod, honeypot, rate limit e Turnstile preparado.
- `/api/custom-requests` valida tamanho de payload, origem, Turnstile, idempotência e usa logger redigido.
- Headers de segurança foram configurados para runtime Next não estático.

## Segredos

Nunca versionar:

- `.env`, `.env.local` ou dumps de ambiente.
- `SUPABASE_SERVICE_ROLE_KEY`, tokens de pagamento, Resend, R2/S3, Redis, ClickHouse, Turnstile e Sentry.
- XLSX/CSV de clientes, exports, ZIPs brutos da Receita Federal ou uploads.

## CSP

A CSP atual evita `default-src *`, `object-src`, framing e origens amplas. Há exceção documentada para `style-src 'unsafe-inline'` e `script-src 'unsafe-inline'` porque o App Router/Next injeta estilos e bootstrap de hidratação sem nonce neste estágio. No servidor de desenvolvimento, `script-src` também permite `unsafe-eval`, exigido pelo Next dev para hidratação e Fast Refresh; essa exceção não é aplicada no build de produção. Próxima etapa: migrar para nonce/hash por request em runtime Vercel e remover as exceções inline.

## APIs

Toda API mutável deve ter:

- Método explícito pelo route handler.
- Limite de payload.
- Zod.
- Sanitização.
- Rate limit.
- Honeypot quando pública.
- Turnstile quando pública.
- Checagem de origem quando chamada por navegador.
- Resposta segura sem stack trace.
- Logs redigidos.
- Idempotência para pagamento, webhook e pedidos.

## Pagamentos

Pedidos não devem ser aprovados pelo retorno do navegador. O estado só pode mudar para pago após webhook validado, idempotente e persistido.

## Dados empresariais

Não exportar CPF, sócios, representantes legais, contatos particulares ou campos pessoais. MEI e empresário individual exigem revisão de privacidade antes de entrega.
