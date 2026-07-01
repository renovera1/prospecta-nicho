# Design System

## Identidade

A ProspectaNicho usa a marca oficial em `public/assets/brand/`, gerada a partir da imagem enviada pelo usuário em 2026-07-01. A logo nunca deve ser substituída por ícone, sigla, SVG improvisado ou texto manual.

Assets oficiais:

- `logo-master-reference.png`
- `logo-horizontal.png`
- `logo-horizontal-dark-bg.png`
- `logo-symbol.png`
- `favicon.png`
- `apple-touch-icon.png`
- `og-image.png`
- `brand-cover.png`

## Paleta

- `--navy-deep`: `#061E3A`
- `--navy`: `#0B2E59`
- `--navy-soft`: `#123B5D`
- `--teal`: `#0FA3A6`
- `--teal-bright`: `#38DDD5`
- `--teal-soft`: `#BFF5EE`
- `--canvas`: `#F5F8FB`
- `--white`: `#FFFFFF`
- `--ink`: `#102334`
- `--muted`: `#66768A`
- `--line`: `#DCE6ED`
- `--whatsapp`: `#25D366`

`--teal-bright` deve ficar restrito a foco, pulsos, pequenos estados interativos e detalhes de radar.

## Tipografia

- Títulos: Sora via `next/font/google`.
- Texto e interface: Manrope via `next/font/google`.
- Letter spacing padrão: `0`.

## Componentes

- Botões usam classes `.button`, `.button--primary`, `.button--secondary` e `.button--teal`.
- Chips de escolha usam `.choice-chip`.
- Cards repetidos mantêm raio visual moderado e hierarquia clara.
- Previews de dados devem usar exemplos fictícios e mascarados.
- Cards de produto podem ter um ícone principal, uma borda simples e sombra apenas no hover.
- A marca deve ser renderizada por `components/BrandLogo.tsx`.

## Arquivos CSS

- `styles/tokens.css`: tokens de cor, espaço, raio e largura.
- `styles/layout.css`: containers e gutters responsivos.
- `styles/components.css`: utilitários de composição e superfícies.

## Acessibilidade

- Todo formulário precisa de label real.
- Foco deve ser visível.
- Animações respeitam `prefers-reduced-motion`.
- Links externos usam `noopener noreferrer`.
