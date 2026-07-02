# Threat Model

## Ativos

- Leads, contatos e pedidos.
- Arquivos de exportação.
- Credenciais de Supabase, pagamento, Resend, storage, Redis e ClickHouse.
- Painel administrativo.

## Ameaças principais

- Exposição de service role no client.
- Submissão abusiva de formulários.
- Webhook falso aprovando pagamento.
- Acesso cruzado a exportações.
- Upload ou publicação administrativa sem autorização.
- Secret em commit público.

## Mitigações

- RLS em todas as tabelas.
- APIs com Zod, rate limit, origem confiável, Turnstile e logs redigidos.
- Webhook com assinatura e idempotência.
- URLs assinadas para arquivos sensíveis.
- GitHub privado, Dependabot, CodeQL e secret scanning quando disponível.

## Riscos restantes

- Redis/Upstash ainda precisa ser ligado ao rate limit distribuído.
- Supabase Auth no admin ainda precisa substituir token estático.
- CSP deve migrar de `unsafe-inline` para nonce/hash em runtime.
