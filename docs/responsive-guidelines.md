# Responsividade

## Viewports obrigatórios

360x800, 390x844, 430x932, 768x1024, 820x1180, 1024x768, 1280x800, 1440x900 e 1920x1080.

## Critérios

- Sem scroll horizontal.
- Sem texto cortado.
- Sem CTA oculto pelo WhatsApp flutuante.
- Header colapsa antes de quebrar.
- Formulários usam uma coluna no mobile.
- Preview de entrega vira cards no mobile.
- Grids de segmentos: 5x2 desktop, 2 colunas tablet, 1 coluna mobile.
- Área de toque mínima de 44px.

## QA

Usar Playwright e salvar screenshots em `artifacts/visual-qc/`, que não deve ser versionado.
