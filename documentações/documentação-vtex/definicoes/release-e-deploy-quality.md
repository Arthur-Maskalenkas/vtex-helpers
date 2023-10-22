# Release
É um workspace com as tarefas agrupadas - seja em ambiente QA ou em ambiente PROD

# Deploy
são as tarefas agrupadas ja em produção

# Filosofia
Os **QAS** usam o workspace que esta em **prod** para fazer a **regressão pré deploy**
O deploy é pegar a workspace de release que esta em **prod** e subir para a **master**.

# Ambiente de QA
Local aonde todas as tarefas são desenvolvidas

# Fluxo
1. Cria workspace de release com as tarefas agrupadas em QA
2. Cria workspace de release com as tarefas agrupadas em Prod
3. Após a regressão, subir primeiro o workspace de release no ambiente de PROD

# pré deploy
Regressão que os QAS fazem

# pós deploy



# Quando for atuar em uma tarefa, mande uma mensagem avisando
> vou atuar nisso, preciso de uma tarefa


# tag de bug no titulo da tarefa
só é assinalado como bug para demonstrar que é um erro. Não é um hotfix

# tag de hotfix no titulo da tarefa
é pontual, especifico, acabar com prioridade
então tem code review e testes de qa