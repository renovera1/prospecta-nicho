# Content Studio

O Content Studio permite editar conteúdo, produtos, segmentos, FAQ, menus, CTAs, SEO, mídias e configurações sem alterar arquivos manualmente.

## Rotas

- `/admin`: visão geral e status das integrações.
- `/admin/conteudo`: editor de páginas com preview desktop, tablet e mobile.
- `/admin/produtos`: catálogo, preço, badge, status e checkout.
- `/admin/faq`: perguntas, respostas, categorias e visibilidade.
- `/admin/preview`: rascunho autenticado.
- `/admin/preview/share/[token]`: link temporário somente leitura.

## Publicação

O endpoint `POST /api/admin/publish` exige `Authorization: Bearer ADMIN_API_TOKEN`, valida payload, bloqueia rotas inválidas e revalida as páginas afetadas com `revalidatePath`.

## Persistência

O schema em `supabase/schema.sql` cria as tabelas editoriais, revisões, publicações, mídias, SEO e permissões. A produção deve aplicar esse SQL no Supabase antes de operar dados reais.
