# Auditoria atual - ProspectaNicho

## Componentes preservados

- `Brand`, `BrandWatermark`, `ButtonLink`, `CookieBanner`, `FAQAccordion`, `Footer`, `LeadPreviewSheet`, `OpportunityRadar`, `ProductSignalCard`, `SampleConversionSection` e `WhatsAppButton`.
- Layout global com `AppShell`, preservando o isolamento das rotas legadas Renovera.
- Assets oficiais em `public/assets/brand`: `logo-horizontal.svg`, `logo-horizontal-light.svg`, `shield-icon.svg`, `shield-icon-light.svg`, `favicon.svg` e `og-image.png`.

## Componentes refatorados

- `Header`: nova navegacao com Bases, Monte sua base, Para quem e, Como funciona, Conteudos e Contato.
- `HomeSampleForm`: amostra com menos atrito, sem e-mail obrigatorio e empresa opcional.
- `ProductSignalCard`: cards com promessa comercial, indicado para, entrega, preco, CTA e link secundario.
- `OpportunityRadar` e `LeadPreviewSheet`: textos limpos e exemplos ficticios alinhados ao posicionamento.
- `app/page.tsx`: home reorganizada em hero, criterios, entrada do editor, demonstracao, produtos, segmentos, transparencia, amostra, FAQ e CTA final.

## Rotas preservadas

- `/`
- `/produtos`
- `/produtos/[slug]`
- `/produtos/amostra-gratuita`
- `/produtos/base-personalizada`
- `/solucoes`
- `/solucoes/[slug]`
- `/como-funciona`
- `/campos-da-base`
- `/faq`
- `/sobre`
- `/contato`
- `/blog`
- Politicas e termos
- Paginas de status de compra
- Rotas legadas Renovera e artigos `.html`

## Rotas criadas

- `/montar-minha-base`
- `/amostra` como atalho para a amostra gratuita

## Integracoes existentes

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: usado pelo helper central `lib/whatsapp.ts`.
- Links de pagamento por variaveis `NEXT_PUBLIC_MP_LINK_*`.
- Endpoints atuais:
  - `/api/free-sample-request`
  - `/api/custom-base-request`
  - `/api/contact`
  - `/api/payments/create-preference`
  - `/api/payments/webhook`

## Formularios com backend real

- Formulario de amostra: envia para `/api/free-sample-request`.
- Editor de base: envia para `/api/custom-base-request`.
- Formulario de contato/base personalizada antigo: preservado e aceito pelo endpoint.

Os endpoints validam payload e retornam sucesso, mas persistencia e envio de e-mails ainda dependem das credenciais abaixo.

## Pendencias tecnicas

- Persistencia real em Supabase depende de `SUPABASE_URL`, `SUPABASE_ANON_KEY` e `SUPABASE_SERVICE_ROLE_KEY`.
- E-mails internos e confirmacao ao cliente dependem de `RESEND_API_KEY`.
- Checkout Mercado Pago depende dos links publicos de produto ou das credenciais privadas de Mercado Pago.
- Analytics so dispara eventos quando `NEXT_PUBLIC_GA_ID` estiver configurado.
- Algumas paginas antigas do catalogo ainda usam textos originais do repositório e podem receber uma segunda passada de copy premium.

## Riscos encontrados

- Varios arquivos tinham textos com encoding corrompido. As areas tocadas foram corrigidas, mas pode haver ocorrencias remanescentes em paginas nao refatoradas.
- `NEXT_PUBLIC_SITE_URL` deve ser ajustado fora de localhost antes de producao para canonical, sitemap e Open Graph.
- A base personalizada nao deve ir direto para checkout automatico; a regra foi ajustada para passar por `/montar-minha-base`.

## Verificacoes feitas nesta auditoria

- Componentes e rotas mapeados.
- Endpoints de formulario revisados.
- WhatsApp centralizado em `lib/whatsapp.ts`.
- Sitemap atualizado com `/montar-minha-base` e `/amostra`.
- Estrutura de testes basicos criada para editor, recomendacao, URL segura e WhatsApp.
