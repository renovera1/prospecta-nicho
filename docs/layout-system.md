# Layout System

## Tokens

Os tokens globais estão em `app/globals.css`:

```css
--content-max: 1440px;
--content-wide: 1680px;
--content-reading: 760px;
--gutter: clamp(24px, 5vw, 104px);
--section-y: clamp(72px, 9vw, 152px);
--grid-gap: clamp(18px, 2vw, 34px);
```

## Containers

- `.container`: conteúdo padrão até 1440px.
- `.container-wide`: áreas visuais amplas até 1680px.
- `.container-reading`: textos legais e leitura longa até 760px.
- `.grid-12`: grid de 12 colunas.

## Regras Por Área

- Hero: `.container-wide`.
- Editor teaser: `.container-wide`.
- Demonstração de entrega: `.container-wide`.
- Produtos: `.container-wide`.
- Segmentos: seção escura em largura total com conteúdo amplo.
- Amostra: `.container-wide` em 7/5 colunas.
- FAQ e CTA final: conteúdo mais contido quando a leitura importa.
- Footer: `.container-wide`.

## Breakpoints

- Acima de 1440px: hero 7/5.
- Entre 1024px e 1439px: hero 6/6.
- Abaixo de 1024px: layouts principais empilham.
- Abaixo de 620px: grids viram uma coluna e previews usam rolagem interna.
