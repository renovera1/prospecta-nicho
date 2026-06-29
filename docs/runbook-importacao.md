# Runbook de Importação

1. Confirmar `RFB_CNPJ_BASE_URL`, R2/S3 e ClickHouse.
2. Rodar `python -m workers.rfb_cnpj discover`.
3. Revisar manifesto.
4. Rodar `download`, `validate`, `transform`, `load` e `verify`.
5. Registrar snapshot em `rfb_snapshots`.
6. Não substituir snapshot anterior sem retenção e auditoria.

Para desenvolvimento:

```bash
python -m workers.rfb_cnpj run --sample
```
