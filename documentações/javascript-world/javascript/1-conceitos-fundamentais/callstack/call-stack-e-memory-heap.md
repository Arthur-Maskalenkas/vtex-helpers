Como as chamadas do javascript ocorrem de forma assincrona ela usa o call-stack para saber como executar as intruções que chegam de forma ordenada.

> a callstack funciona como uma tabela, contendo chaves e valores, aonde a chave é um endereço de memoria e o valor pode ser um tipo primitivo de dado ou um apontamento para  para outro endereço em memoria

[](./callstack.gif)

O "motor" do JavaScript, também conhecido como JavaScript engine, é um interpretador que executa código JavaScript. Ele é responsável por converter o código que você escreve em instruções de baixo nível que a máquina pode entender e executar. Existem vários motores de JavaScript, incluindo o V8 do Google (usado em Chrome e Node.js), SpiderMonkey da Mozilla (usado no Firefox), e muitos outros.

Quanto ao armazenamento na memória, tanto o heap de memória quanto a pilha de chamadas (call stack) são usados, mas para coisas diferentes.


A memória heap, por outro lado, é usada para armazenar objetos complexos e tipos de dados de tamanho variável, como objetos e arrays. O motor do JavaScript gerencia o espaço na memória heap e recupera os objetos quando eles não são mais necessários (um processo conhecido como garbage collection).

Tipos primitivos em JavaScript, como números, booleanos, null, undefined, e strings pequenas, geralmente são armazenados na pilha de chamadas porque eles têm um tamanho fixo e são mais rápidos para acessar. No entanto, se um tipo primitivo for parte de um objeto ou array, esse objeto ou array como um todo seria armazenado no heap de memória.

Por exemplo:

``` javascript
let number = 42; // Este é armazenado na pilha de chamadas.

let obj = { number: 42 }; // O objeto como um todo é armazenado no heap de memória.
```

Então, para resumir: as declarações de variáveis são manipuladas na call stack, mas onde os valores dessas variáveis são realmente armazenados na memória depende do tipo de dados que eles contêm.


# call stack
call stack é uma pilha de ações que um programa vai executar, linha por linha.

A pilha de chamadas (call stack) é usada para manter o controle do lugar do código onde a execução está acontecendo. Quando uma função é chamada, ela é adicionada ao topo da pilha. Quando essa função termina de executar, ela é removida da pilha.

É como se fosse uma tabela aonde a chave é o endereço de memoria e o valor pode ser um tipo primitivo(string,undefined,symbol, boolean) de dado ou um apontamento para outro endereço de memoria. 


# memory heap
A pilha de memoria é aonde são armazenados os endereços de memorias que podem ser apontados pelo call-stack para trabalhar os valores de variaveis, objetos, arrays, funções e etc.

A memória heap, por outro lado, é usada para armazenar objetos complexos e tipos de dados de tamanho variável, como objetos e arrays. O motor do JavaScript gerencia o espaço na memória heap e recupera os objetos quando eles não são mais necessários (um processo conhecido como garbage collection).

a grande diferença entre memory heap e call stack é que a call stack guarda dados do tipo primitivo enquanto memory heap guarda tipos de referencia que podem crescer dinamicamente (funções,arrays, objetos e etc.)



