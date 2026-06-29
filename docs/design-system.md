# Design System

## Identidade

A ProspectaNicho usa a marca oficial em `public/assets/brand/`. A logo nunca deve ser substituída por ícone, sigla ou texto manual.

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

## Acessibilidade

- Todo formulário precisa de label real.
- Foco deve ser visível.
- Animações respeitam `prefers-reduced-motion`.
- Links externos usam `noopener noreferrer`.
