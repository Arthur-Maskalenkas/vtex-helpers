# 1 - Confirme se o merge da branch release foi feito para a main

# 2 - Verifique se a main esta atualizada:
> git fetch | git pull origin main | git pull origin main

# 3 - Altere os arquivos manifest.json
> manifest.json
```bash
# antes
"version": "0.1.0-beta.1"

# depois
"version": "0.1.0"
```

# 4 - Altere a vendor QA para a vendor master
> manifest.json
```bash
# antes
"vendor": "lojasmarabrazqa"

# depois
"vendor": "lojasmarabraz"
```

# 5 - Entre no workspace master e instale todos os apps
```bash
  vtex publish
  vtex deploy -f
  vtex install (ou deixe para dar um vtex update no final)
```

# 6 - Após instalar todos os apps, no repositorio de cada app crie a tag
```bash
  git tag -a v1.1.0 -m "version 1.1.0"
  git push -u origin v1.1.0
```

# 7 - Ative o workflow e atualize o jira