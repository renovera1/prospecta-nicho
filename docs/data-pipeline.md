# Pipeline de Dados CNPJ

Fonte: diretório oficial de Dados Abertos do CNPJ da Receita Federal, configurado por `RFB_CNPJ_BASE_URL`.

Etapas:

1. `discover`: identifica snapshot, arquivos, URLs e manifesto.
2. `download`: baixa ZIPs com retry, valida tamanho e evita baixar arquivo já validado.
3. `validate`: valida encoding, separador, colunas, tipos e volume mínimo.
4. `transform`: gera Parquet particionado por UF, ano de abertura e snapshot.
5. `load`: carrega ClickHouse.
6. `verify`: confere contagens, partições e amostras.
7. `export`: gera XLSX/CSV para pedidos aprovados.

Dados proibidos em exportações padrão: quadro societário, CPF, sócios, representante legal, faixa etária, contatos particulares, dados pessoais e sensíveis.
