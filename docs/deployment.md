# Deployment

## Runtime recomendado

Produção completa deve rodar em Vercel ou ambiente compatível com Next.js server routes. GitHub Pages serve apenas HTML/CSS/JS estático e não executa APIs.

## GitHub Pages

O link `https://luscaarmstrong1.github.io/prospecta-nicho/` é a publicação estática exclusiva da ProspectaNicho. Formulários que dependem de API precisam de fallback estático ou endpoint externo.

## Variáveis mínimas em produção

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `ADMIN_API_TOKEN`
- Segredos de pagamento, storage, Redis e Turnstile conforme módulos ativados.

## Rollback

Reverter deploy estático pelo branch `gh-pages` ou usar rollback da plataforma runtime. Nunca commitar `.env` para "corrigir rápido".
