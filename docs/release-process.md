# Processo de Release

1. Criar branch curta e descritiva.
2. Validar que não há `.env`, exports ou dados sensíveis no diff.
3. Rodar lint, typecheck, testes e build.
4. Abrir PR com resumo, riscos e evidência de QA.
5. Exigir CI verde.
6. Publicar em preview.
7. Validar rotas críticas, formulários e CTAs.
8. Fazer deploy de produção.
9. Monitorar logs e Sentry.
10. Registrar rollback possível.
