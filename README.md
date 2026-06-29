# ProspectaNicho Website

Site comercial da ProspectaNicho, marca de inteligência comercial e bases B2B segmentadas.

## Instalação

```bash
npm install
npm run dev
```

## Variáveis

Copie `.env.example` para `.env.local` e configure:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_MP_LINK_EMPRESAS_RECEM_ABERTAS`
- `NEXT_PUBLIC_MP_LINK_AGENCIAS_MARKETING`
- `NEXT_PUBLIC_MP_LINK_CONTABILIDADES`
- `NEXT_PUBLIC_MP_LINK_BASE_PERSONALIZADA`
- `MERCADO_PAGO_ACCESS_TOKEN`
- `MERCADO_PAGO_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Desenvolvimento

```bash
npm run lint
npm run build
```

## Pagamentos

O site funciona primeiro com links hospedados do Mercado Pago via variáveis públicas. Se o link estiver vazio, o botão cai para WhatsApp.

Os endpoints `/api/payments/create-preference` e `/api/payments/webhook` estão preparados para Checkout Pro server-side, validação de webhook, idempotência e registro de pedido, mas exigem implementação final com credenciais reais.

## Supabase

O schema inicial está em `supabase/schema.sql`. A `SUPABASE_SERVICE_ROLE_KEY` nunca deve ir para o frontend.

## Resend

Os formulários já postam para endpoints server-side. Para produção, conectar `RESEND_API_KEY` e enviar confirmação para cliente e aviso interno para `CONTACT_EMAIL`.

## WhatsApp

Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` no formato `5519999999999`. Os links usam `wa.me` com mensagem preenchida.

## Deploy

Recomendado: Vercel, por causa dos endpoints server-side e webhooks.

GitHub Pages só serve para uma versão estática e não cobre webhooks ou integrações server-side.

## Checklist de produção

- Configurar WhatsApp real.
- Inserir links reais de pagamento.
- Configurar Mercado Pago se usar Checkout Pro.
- Configurar Supabase e aplicar RLS.
- Configurar Resend e e-mail remetente.
- Revisar textos legais com advogado.
- Inserir logo final em `public/assets/brand/`.
- Testar formulários, consentimento, mobile e CTAs.
- Validar domínio, analytics e cookies antes de publicar.
