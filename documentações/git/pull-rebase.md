# pull com merge automatico | mergear master automaticamente | pull rebase -X

**git pull -s recursive -X theirs master**

-s recursive é uma opção para o comando git pull que indica que deve ser usado o merge recursivo, que é a estratégia de merge padrão do Git.
-X theirs é uma opção que especifica que, em caso de conflito, as alterações na branch master devem ser mantidas e as da branch atual (develop) devem ser descartadas.

Portanto, o comando "git pull -s recursive -X theirs master" é um atalho para "git pull --rebase -X theirs master"