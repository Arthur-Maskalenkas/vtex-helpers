Release só é realizado quando os MR's já foram mergeados para a develop

# 1 - Verifique se a develop esta atualizada:
> git fetch | git pull origin develop | git pull origin main

# 2 - Crie a Branch de release
> git checkout -b release/X.X.X

# 3 - Altere os arquivos manifest.json e changelog.md
> manifest.json
```bash
# antes
"version": "0.1.0"

# depois
"version": "0.1.0-beta.1"
```

# 4 - Crie os workspace de produção
As Workspaces de Releases, DEVEM ser workspaces de produção, para serem feitos os testes de regressão e testes A/B**

```bash
  vtex use release{versao} --production
```

# 5 - Publique e instale os apps no seu workspace
```bash
  vtex publish
  vtex install
```

# 6 - Use o workflow e atualize o jira

# 7 - Abra MR de cada app que vai subir apontando para a branch main