# Segurança e Privacidade

- Nunca expor `SUPABASE_SERVICE_ROLE_KEY`, tokens de pagamento, R2/S3, ClickHouse ou Redis no frontend.
- Endpoints internos exigem `ADMIN_API_TOKEN` e devem evoluir para Supabase Auth com RLS.
- Formulários públicos usam Zod, honeypot, rate limit e Turnstile preparado.
- Exportações padrão bloqueiam CPF, sócios, representantes legais, contatos particulares e dados sensíveis.
- MEI e empresário individual exigem `requires_privacy_review`.
- Pagamentos só aprovam pedido após webhook validado e idempotente.
