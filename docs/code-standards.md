# Padrões de Código

- Preferir TypeScript estrito e schemas Zod centralizados em `src/schemas`.
- APIs devem chamar services para regras de negócio.
- Services devem chamar repositories para persistência.
- Componentes UI não acessam banco, service role ou segredos.
- Evitar arquivos com mais de 300 linhas; dividir por responsabilidade.
- Evitar `any`; quando inevitável, comentar a razão.
- Usar tokens de CSS existentes em `styles/` e `app/globals.css`.
- Não hardcodar URLs públicas: usar `lib/site-url.ts` e helpers de rota.
- Não hardcodar WhatsApp em componentes: usar `lib/whatsapp.ts`.
- Não logar payload bruto de formulário, pagamento ou webhook.
