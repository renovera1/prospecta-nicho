# GitHub Security

## Repositório fonte

- Repositório: `renovera1/prospectanicho-site`
- Remote local: `https://github.com/renovera1/prospectanicho-site.git`
- Visibilidade confirmada: `PRIVATE`
- Confirmação feita via `gh repo view renovera1/prospectanicho-site --json nameWithOwner,visibility,isPrivate,url` em 2026-07-02.

## Observação sobre GitHub Pages

O repositório de publicação estática `renovera1/renovera-projetos-eletricos` é separado e precisa continuar público para servir o link GitHub Pages solicitado.

## Secret scanning

A varredura local não encontrou valores reais de segredo. Foram encontrados apenas nomes de variáveis em `.env.example`, documentação e código.

Tentativa de habilitar secret scanning/push protection via GitHub CLI retornou que o recurso não está disponível para este repositório/plano. A proteção deve ser habilitada pela interface da conta caso o plano seja atualizado ou a opção fique disponível.

## Próximas ações recomendadas

- Conferir colaboradores no GitHub.
- Habilitar secret scanning e push protection se o plano da conta permitir.
- Proteger `main` exigindo CI verde antes de merge.
- Rotacionar qualquer chave que tenha sido usada em ambiente público anterior.
