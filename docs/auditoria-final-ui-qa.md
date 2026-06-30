# Auditoria Final UI QA

Data: 2026-06-30

## Rotas Existentes Revisadas

- `/`
- `/produtos`
- `/produtos/empresas-recem-abertas`
- `/produtos/agencias-marketing`
- `/produtos/contabilidades`
- `/produtos/base-personalizada`
- `/produtos/amostra-gratuita`
- `/montar-minha-base`
- `/para-quem-e`
- `/como-funciona`
- `/campos-da-base`
- `/faq`
- `/contato`
- `/sobre`
- `/politica-de-privacidade`
- `/politica-de-supressao`
- `/politica-de-cookies`
- `/termos-de-uso`
- `/compra/sucesso`
- `/compra/pendente`
- `/compra/erro`
- `/admin`

## Rotas Antigas e Redirects

- `/blog` redireciona para `/`.
- `/conteudos` redireciona para `/`.
- Páginas antigas `blog-*.html` redirecionam para `/`.
- `/solucoes` e `/solucoes/*` redirecionam para `/para-quem-e`.

## Links e CTAs

- Header: Bases, Monte sua base, Para quem é, Como funciona, Receber amostra.
- Hero: Montar minha base, Receber 10 empresas de amostra.
- Editor teaser: Continuar montando minha base.
- Produtos: Escolher esta base, Ver campos e detalhes.
- Amostra: Quero receber minha amostra grátis agora.
- Contato: Falar sobre meu público no WhatsApp.

Não foram mantidos CTAs proibidos como `Solicitar atendimento`, `Saiba mais`, `Clique aqui`, `Comprar agora` ou `Fale conosco`.

## Assets de Marca Usados

- `public/assets/brand/logo-selected.png`
- `public/assets/brand/logo-selected-dark.png`
- `public/assets/brand/logo-symbol.png`
- `public/assets/brand/favicon.png`
- `public/assets/brand/apple-touch-icon.png`
- `public/assets/brand/og-image.png`

Observação: a imagem-matriz escolhida anteriormente não estava disponível em `Downloads` nem no repositório. Os PNGs foram gerados a partir das características oficiais descritas no PDF, sem substituir a marca por ícone Lucide ou sigla.

## Componentes Duplicados ou Legados

- `components/LeadPreviewSheet.tsx` permanece por compatibilidade, mas a home usa `components/LeadDeliveryPreview.tsx`.
- Rotas antigas de blog agora são redirects.
- `/solucoes/*` deixou de ser rota pública indexável.

## Formulários e Endpoints

- `POST /api/contact`: Zod, honeypot, rate limit, Turnstile preparado, persistência/e-mail quando credenciais existem.
- `POST /api/free-sample-request` e `/api/sample-request`: amostra com honeypot, rate limit, Turnstile preparado.
- `POST /api/custom-base-request`: editor com validação e fluxo de base personalizada.

## WhatsApp

- Centralizado em `lib/whatsapp.ts`.
- Usa `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Botão flutuante abre `wa.me`, nova aba e tooltip `Falar sobre meu público`.
- Safe area aplicada no CSS para reduzir conflito em mobile.

## Metadata e URLs

- `NEXT_PUBLIC_SITE_URL` centraliza URL pública.
- Produção não deve conter localhost, `127.0.0.1`, `:3000` ou `:3001`.
- Preview usa `NEXT_PUBLIC_DEPLOY_ENV=preview` para noindex/nofollow e faixa de homologação.

## Responsividade e Layout

- Containers amplos aplicados em hero, editor, catálogo, segmentos, amostra e footer.
- Catálogo assimétrico aplicado.
- Segmentos ajustados para 3/2/1 colunas.
- Preview de entrega vira cards no mobile.
- QA visual automatizado via navegador local validou ausência de scroll horizontal nos breakpoints críticos.

## Pendências de Credenciais

- Supabase real.
- Resend real.
- Mercado Pago ou Asaas real.
- ClickHouse.
- Redis/BullMQ.
- Cloudflare R2/S3.
- Variáveis específicas de preview e produção.

## Pendências Reais de Backend

- Pipeline nacional completo da Receita Federal.
- Exportação real XLSX/CSV após pagamento aprovado.
- URLs assinadas e expiração de download.
- Auditoria real de downloads e webhooks.

## Segurança

- APIs internas exigem `ADMIN_API_TOKEN`.
- Preview deve operar sem pagamento real e sem exportação real.
- MEI e empresário individual exigem revisão de privacidade antes da exportação.
