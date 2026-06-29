# Worker RFB CNPJ

Worker Python para baixar, validar, transformar, carregar e exportar snapshots dos Dados Abertos do CNPJ.

Comandos previstos:

```bash
python -m workers.rfb_cnpj discover
python -m workers.rfb_cnpj download
python -m workers.rfb_cnpj validate
python -m workers.rfb_cnpj transform
python -m workers.rfb_cnpj load
python -m workers.rfb_cnpj verify
python -m workers.rfb_cnpj run
python -m workers.rfb_cnpj run --sample
python -m workers.rfb_cnpj export --sample
```

O modo `--sample` não processa o dataset nacional e serve apenas para desenvolvimento e testes.
