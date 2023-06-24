# Testes unitarios

1. São testes feitos para testar funções independentes a nivel granular.
2. Os nossos testes não devem depender de serviços externos ou internet. Eles precisam mapear as saidas apenas, pois
   mapeando as saidas ele vai focar no processamento lógico do codigo.
3. Nossos testes tem que ser burors. Eles não podem testar a disponibilidade DA API, não podem estar atrelados a isso.
   Para esses casos existem outras estruturas que testam a disponibilidade da api, porém o nosso codigo precisa testar
   apenas as ações após o retorno.

stubs - utilizado quando for acessar algo externo como uma api
mock - utilizado para evitar repetir caminhos de teste
spies - utilizado para saber com qual parametro a função foi chamada e o que foi retornado em cada tempo

# Testes E2E

São testes a nivel de funcionalidade.
Se for uma api, a ideia é testar cada uma das rotas dessa mesma api.
Os testes E2E são feitos para testar a aplicação do ponto de vista do usuario.

Para testar login você cria uma função que bate na API com o login e senha, e retorna o token para o cliente.
Para testar um pedido, você criau ma função que bate na api com o token do cliente, e o id do pedido, e o sistema
retorna o id do pedido.

Essa é a melhor forma de garantir que o que esta funcionando continua funcionando, principalemnte quando não tem testes
no software

# libs utilizadas

## nwc

gera o coverage do projeto

## mocha

estilo jest, mas permite ser estruturado e é mais leve

## sinon

Utilizado para fazer stubs/spies.

## chai

É utilizado para assersão. é muito usado em BDD

# Estrutura do projeto

Base da dados vai ser criada a partir de arquivos, usando um repositorio generico

# camadas

## services

vai trabalhar com a regra de negocio da aplicação

## repository