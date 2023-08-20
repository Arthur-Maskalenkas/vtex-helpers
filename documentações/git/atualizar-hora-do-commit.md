# modificar hora commit | modificar data commit | timestamp commit


apenas rode o git rebase -i e marque os commits com um e de edit

após isso, o git vai permitir que o terminal seja usado, dai só rodar:

```git
   git commit --amend --no-edit --date=now
   git rebase --continue
```

   git commit --amend --no-edit --date=now --no-verify | git rebase --continue  


   # forma 2:

# Conte a quantidade de commits que esta distante do origin:
git rev-list --count origin/refactor/pdp..HEAD (vai exibir 14)

# agora só dar rebase:
git rebase -i HEAD~14 --exec 'git commit --amend --no-edit --no-verify --date=now' | git rebase --continue

no pior dos casos, use git rebase --continue