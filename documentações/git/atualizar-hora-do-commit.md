# modificar hora commit | modificar data commit | timestamp commit

apenas rode o git rebase -i e marque os commits com um e de edit

após isso, o git vai permitir que o terminal seja usado, dai só rodar:

```git
   git commit --amend --no-edit --date=now
   git rebase --continue
```