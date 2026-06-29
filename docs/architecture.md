# Arquitetura ProspectaNicho

## Visão geral

- Next.js: site, editor, APIs comerciais, checkout e administração.
- Supabase/PostgreSQL: pedidos, leads, contatos, consentimentos, perfis administrativos, logs e RLS.
- ClickHouse: base nacional de empresas e consultas de alto volume.
- R2/S3: ZIPs brutos da Receita, Parquet e exportações XLSX/CSV.
- Worker Python: download, validação, transformação, carga e geração de exportações.
- Redis/BullMQ: filas de importação e exportação.
- Resend: e-mails transacionais.
- Mercado Pago ou Asaas: pagamentos.

O dataset nacional da Receita não deve rodar em Vercel Functions nem GitHub Pages.
