# 📝 primeira etapa

### 🟢📌 Cenário: Botão 'proxima etapa' bloqueado na pagina inicial

1. Dado que o usuário carregou a página inicial**
2. Quando a página for exibida**
3. Então o botão de proxima etapa deve estar bloqueado

### 🟢📌 Cenário: Botão 'proxima etapa' desbloqueado na pagina inicial

1. Dado que o usuario carregou a pagina inicial**
2. E o usuario preencheu o campo distancia percorrida,tamanho e cor**
3. Então o botão de proxima etapa deve estar desbloqueado**

# 📝 segunda etapa

### 📌 Cenário: Após o usuario preencher todos os campos corretamente, o kit é adicionado ao carrinho

1. Dado que o usuario preencha todos os campos corretamente
2. Então a compra é registrada no master data (tabela BP)
3. E o kit é adicionado ao carrinho
4. E o modal é fechado

### 📌 Cenário: Após o usuario se declarar idoso/PCD, um modal de aviso é aberto

1. Dado que o usuário preencha o campo "data de nascimento"**
2. E a idade do usuário calculada seja maior que 60 anos**
3. Ou o usuário preencha o campo "PCD"**
4. Então um modal de aviso deve ser aberto**

# 📝 modal de cupom

### 📌 Cenário: Após o usuario utilizar um cupom valido, o modal de cupom é fechado e o modal de segunda etapa é retomado.

1. Dado que o usuario clicou em adicionar cupom**
2. E o cupom inserido é valido**
3. Então o modal de cupom se fecha
4. E o modal de aviso se fecha
5. E o modal da segunda tela é retomado


# 📝 Checkout

### 🟢📌 Cenário: Kits não possuem botão de alterar quantidade dentro do checkout

1. Dado que o usuario carregou a pagina do checkout**
2. Quando a pagina for exibida**
3. Os botões de adicionar quantidade no kit devem estar bloqueados**

# 📝 Minicart

### 🟢📌 Cenário: Kits não possuem botão de alterar quantidade dentro do minicart

1. Dado que o usuario abriu o minicart**
1. Os botões de adicionar quantidade no kit devem estar bloqueados**
