# Compartilhamento de preview

O endpoint `/api/admin/preview-share` gera token assinado com validade de 1 a 168 horas. O link resultante usa `/admin/preview/share/[token]`, é noindex/nofollow, somente leitura e não deve executar checkout, e-mail ou exportação real.
