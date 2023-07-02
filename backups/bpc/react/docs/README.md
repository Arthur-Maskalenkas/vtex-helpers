
# primeira etapa
Cenário: Botão 'proxima etapa' bloqueado na pagina inicial
    Dado que o usuário carregou a página inicial
    Quando a página for exibida
    Então o botão de proxima etapa deve estar bloqueado

Cenário: Botão 'proxima etapa' desbloqueado na pagina inicial
    Dado que o usuario carregou a pagina inicial
    E o usuario preencheu o campo distancia percorrida,tamanho e cor
    Então o botão de proxima etapa deve estar desbloqueado

# segunda etapa
Cenário: Adicionar um kit ao carrinho após o usuario preencher corretamente os campos
    Dado que o usuario preencha todos os campos corretamente
    Então a compra é registrada no master data (tabela BP)
    E o kit é adicionado ao carrinho
    E o modal é fechado

Cenário: Abertura do modal de aviso para usuários com deficiência ou acima de 60 anos
    Dado que o usuário preencha o campo "data de nascimento"
    E a idade do usuário calculada seja maior que 60 anos
    Ou o usuário preencha o campo "PCD"
    Então um modal de aviso deve ser aberto



# modal aviso
Cenário: Kit é adicionado ao carrinho após o usuario inserir um cupom valido
    Dado que o usuario clicou em adicionar cupom
    E o cupom inserido é valido
    Então a compra é registrada no banco de dados  (tabela BP)
    E o kit é adicionado ao carrinho
    E o modal é fechado

Cenário: Kit NÃO é adicionado ao carrinho após o usuario inserir um cupom invalido
    Dado que o usuario clicou em adicionar cupom
    E o cupom inserido é invalido
    Então o kit não é adicionado ao carrinho
    E uma mensagem logo em baixo informando o erro é exibida
    
# Checkout
Cenário: Usuario é impossibilitado de adicionar mais produtos de kit no checkout
    Dado que o usuario carregou a pagina do checkout
    Quando a pagina for exibida
    Os botões de adicionar quantidade no kit  devem estar bloqueados

# Minicart
Cenário: Usuario é impossibilitado de adicionar mais produtos de kit no minicart
    Dado que o usuario abriu o minicart
    Os botões de adicionar quantidade no kit devem estar bloqueados
