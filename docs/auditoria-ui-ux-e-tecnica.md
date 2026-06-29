# Auditoria UI/UX e Técnica

Data: 2026-06-29

## Escopo Auditado

- Rotas em `app/`, incluindo home, produtos, editor, contato, políticas, pedido, admin e APIs.
- Componentes comerciais em `components/`.
- Integrações em `lib/server/`, `lib/payments/`, `lib/whatsapp.ts` e `supabase/schema.sql`.
- Worker da Receita Federal em `workers/rfb_cnpj/`.
- SEO em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts`.

## Arquivos Preservados

- Marca e assets em `public/assets/brand/`.
- Editor principal em `components/editor/`.
- Rotas de produto em `app/produtos/`.
- APIs comerciais existentes.
- Schema Supabase e schema ClickHouse.
- Worker Python RFB/CNPJ já iniciado.

## Arquivos Refatorados

- `app/globals.css`: tokens, containers amplos, grid 12 colunas, responsividade e motion reduction.
- `app/page.tsx`: copy oficial, containers amplos, segmentos com presets e preview de entrega novo.
- `components/Header.tsx`: largura ampla, menu principal final e scroll lock no mobile.
- `components/Footer.tsx`: largura ampla.
- `components/HomeBaseBuilderTeaser.tsx`: chips e cards no lugar de selects visíveis.
- `components/OpportunityRadar.tsx`: radar ilustrativo com status, varredura e microcards.
- `components/ProductSignalCard.tsx`: catálogo assimétrico com produto principal destacado.
- `components/SampleConversionSection.tsx` e `components/HomeSampleForm.tsx`: seção de conversão ampliada, loading e CTA final.
- `components/editor/BaseBuilder.tsx`: layout amplo 7/5 com resumo lateral.

## Componentes Novos

- `components/LeadDeliveryPreview.tsx`: demonstração profissional da entrega com dados fictícios mascarados.

## Componentes Redundantes

- `components/LeadPreviewSheet.tsx`: mantido por compatibilidade, mas substituído na home pelo `LeadDeliveryPreview`.
- `components/SignalStrip.tsx`: não usado na home final.

## Rotas Removidas ou Redirecionadas

- `/blog` redireciona permanentemente para `/`.
- Links de Blog/Conteúdos não aparecem no header, footer ou sitemap.

## Endpoints Reais

- `POST /api/contact`
- `POST /api/free-sample-request`
- `POST /api/sample-request`
- `POST /api/custom-base-request`
- `POST /api/payments/create-preference`
- `POST /api/payments/webhook`

## Endpoints Pendentes de Credenciais

- Supabase: persistência real depende de `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`.
- Resend: e-mails dependem de `RESEND_API_KEY` e domínio remetente.
- Pagamentos: checkout e webhook dependem de Mercado Pago ou Asaas configurado.
- APIs internas: exigem `ADMIN_API_TOKEN`.

## CTAs Inconsistentes Encontrados

- O teaser da home usava select e cidade padrão. Corrigido para chips e cidade vazia.
- CTAs principais padronizados para `Montar minha base`, `Receber amostra`, `Escolher esta base` e `Falar sobre meu público`.

## Problemas de Responsividade

- Home e editor estavam limitados por container estreito. Corrigido com `container-wide`, `grid-12` e tokens globais.
- Tabelas/previews podem exigir rolagem horizontal interna em telas pequenas, sem gerar scroll horizontal na página.

## WhatsApp

- Centralizado em `lib/whatsapp.ts`.
- Usa `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Links externos usam `target="_blank"` com `rel="noopener noreferrer"`.

## Checkout

- Produtos prontos podem usar checkout hospedado ou fallback para WhatsApp.
- Base personalizada continua sem cobrança automática antes de validação de escopo.

## Supabase

- Schema preparado para leads, contatos, pedidos, pagamentos, exportações, consentimentos, supressão e auditoria.
- RLS e aplicação real dependem de projeto Supabase configurado.

## Resend

- Integração preparada no backend, mas sem envio real sem credenciais.

## Receita Federal

- Worker em `workers/rfb_cnpj/` executa comandos de amostra e aplica regras de minimização.
- Pipeline nacional completo depende de storage, ClickHouse, download oficial e rotina de carga.

## Metadata e Produção

- URL centralizada em `NEXT_PUBLIC_SITE_URL` com fallback não local.
- Favicon e Open Graph apontam para assets de marca.
- Existe teste para impedir metadata local.

## Riscos de Segurança

- Sem `ADMIN_API_TOKEN`, APIs internas ficam bloqueadas.
- Webhook de pagamento não deve aprovar pedido sem segredo válido.
- Exportações reais precisam congelar filtros, snapshot, logs e URL assinada temporária.
- MEI e empresário individual exigem revisão de privacidade.

## Pendências de Deploy

- Configurar variáveis reais no provedor de deploy.
- Configurar domínio final e DNS.
- Aplicar schema Supabase.
- Provisionar ClickHouse, Redis/BullMQ e R2/S3.
- Configurar secrets de pagamento e Resend.
- Revisar textos legais com jurídico.
