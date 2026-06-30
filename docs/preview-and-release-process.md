# Preview e Processo de Publicação

## Ambientes

### Preview / Homologação

Objetivo: compartilhar o site com equipe, parceiros e avaliadores antes de publicar no domínio oficial.

Requisitos:

- URL pública gerada por deploy de branch ou pull request.
- `NEXT_PUBLIC_DEPLOY_ENV=preview`.
- Robôs em `noindex, nofollow`.
- Faixa discreta: `Ambiente de validação - alterações ainda podem estar em revisão.`
- Sem pagamentos reais.
- Sem exportações reais.
- Sem e-mails reais, exceto quando `RESEND_API_KEY` e variável de envio em sandbox estiverem explicitamente configuradas.
- Apenas dados demonstrativos, mascarados ou sandbox.

### Produção

Objetivo: domínio oficial, SEO ativo, formulários reais, WhatsApp oficial, pagamentos reais e backend real.

Requisitos:

- `NEXT_PUBLIC_DEPLOY_ENV=production`.
- `NEXT_PUBLIC_SITE_URL=https://prospectanicho.com.br`.
- Canonical, sitemap, robots e Open Graph apontando para o domínio oficial.
- Sem localhost, `127.0.0.1`, portas locais ou URL de preview.
- Publicação somente depois da aprovação visual do preview.

## Fluxo Recomendado

1. Criar branch de homologação ou pull request.
2. Deploy automático no Vercel ou serviço equivalente.
3. Enviar URL de preview para avaliadores.
4. Validar checklist de homologação.
5. Corrigir problemas encontrados.
6. Aprovar visualmente.
7. Fazer merge em `main`.
8. Deploy de produção.
9. Monitorar formulários, logs e pagamentos.
10. Reverter para deploy anterior se houver erro crítico.

## Checklist de Homologação

- Logo correta e sem corte.
- Layout sem sobreposições.
- Textos revisados.
- Acentuação correta.
- CTAs funcionando.
- Rotas funcionando.
- Formulários funcionando.
- Menu mobile funcionando.
- WhatsApp funcionando.
- Visual validado em celular e desktop.
- Sem imagens quebradas.
- Sem links locais.
- Sem erros no console.
- Sem scroll horizontal.
- Sem pagamentos reais no preview.
- Aprovação visual confirmada antes de produção.

## Variáveis Por Ambiente

Preview:

- `NEXT_PUBLIC_DEPLOY_ENV=preview`
- `NEXT_PUBLIC_SITE_URL=<url-publica-de-preview>`
- `NEXT_PUBLIC_WHATSAPP_NUMBER=<numero-de-teste-ou-oficial-autorizado>`
- Provedores de pagamento em sandbox ou desativados.
- Resend desativado ou sandbox.

Produção:

- `NEXT_PUBLIC_DEPLOY_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://prospectanicho.com.br`
- `NEXT_PUBLIC_WHATSAPP_NUMBER=<numero-oficial>`
- Supabase real.
- Resend real.
- Mercado Pago ou Asaas real.
- ClickHouse, Redis/BullMQ e R2/S3 reais quando a pipeline estiver ativa.

## Reversão

Em Vercel, promover o deploy anterior estável ou reverter o commit problemático. Depois, validar `/`, `/montar-minha-base`, `/contato`, `/produtos`, sitemap, robots e formulários.
