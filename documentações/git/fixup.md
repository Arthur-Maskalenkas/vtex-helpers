# utilizando o git fixup

git commit --fixup HEAD --no-verify

para mergear tudo
git rebase -i —autosquash  commitBase


## Exemplo 1

```git
cad23ec (HEAD -> refactor/pdp) fixup! fixup! any feature - Arthur Maskalenaks, 4 minutes ago
ffddfe3 fixup! any feature - Arthur Maskalenaks, 10 hours ago
778657e any feature - Arthur Maskalenaks, 11 hours ago
fa3023d other  feature - Arthur Maskalenkas, 11 hours ago
```

```bash
git rebase --autosquash --interactive fa3023d
```

após rodar o git rebase vai abrir uma tela com os 2 primeiros commits com fixup. feche e sucesso.
**o commit base é um antes do que foi aplicado o fixup, ou seja, other feature**

