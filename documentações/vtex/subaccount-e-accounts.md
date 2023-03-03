# apps instalados
apps instalados não são compartilhados entre os workspaces, ou seja, se instalar um app em arthurdev, precisa instalar na master caso queira subir ele para produção

# schemas
schemas mv2 sempre sobem para master, ou seja, se eu subir um schema em arthurdev, vai subir para master automaticamente

schemas mv1 não são compartilhados em subaccounts.

>Tanto que foi por isso que estamos fazendo KOP e Brasil Cacau no mesmo account que o CMS em vez de subaccount, pois eles iriam perder os dados do masterdata v1