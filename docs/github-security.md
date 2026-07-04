# GitHub Security

## Repositório fonte

- Repositório: `renovera1/prospecta-nicho`
- Remote local: `https://github.com/renovera1/prospecta-nicho.git`
- Publicação GitHub Pages: `https://renovera1.github.io/prospecta-nicho/`
- O repositório não deve conter credenciais reais, exports de leads, dumps, planilhas comerciais ou tokens.

## Observação sobre GitHub Pages

Kairós Engenharia deve permanecer isolada em `renovera1/kairos-engenharia`, com Pages próprio em `https://renovera1.github.io/kairos-engenharia/`. Nenhum asset, workflow ou branch de deploy da Kairós deve ser usado pela ProspectaNicho.

## Secret scanning

A varredura local não encontrou valores reais de segredo. Foram encontrados apenas nomes de variáveis em `.env.example`, documentação e código.

Tentativa de habilitar secret scanning/push protection via GitHub CLI retornou que o recurso não está disponível para este repositório/plano. A proteção deve ser habilitada pela interface da conta caso o plano seja atualizado ou a opção fique disponível.

## Próximas ações recomendadas

- Conferir colaboradores no GitHub.
- Habilitar secret scanning e push protection se o plano da conta permitir.
- Proteger `main` exigindo CI verde antes de merge.
- Rotacionar qualquer chave que tenha sido usada em ambiente público anterior.
