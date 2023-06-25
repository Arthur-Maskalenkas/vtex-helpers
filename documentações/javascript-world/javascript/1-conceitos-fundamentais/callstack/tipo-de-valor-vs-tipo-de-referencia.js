// ! https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

const { deepStrictEqual } = require('assert')

// ? Em resumo, valores primitivos são copiados diretamente ao serem atribuídos a outras variáveis, enquanto objetos e estruturas complexas envolvem a cópia de referência, compartilhando o mesmo objeto no heap.

// Como é primitivo, copiou o valor direto, e não uma referencia do valor igual ocorre em objetos complexos. 
// O que eu fizer no counter2 não intefere no contador 1.
let counter = 0
let counter2 = counter

// counter: 0
// counter2: 1
counter2++

// ^ As variáveis ​​que recebem um valor não primitivo recebem umreferênciaa esse valor. Essa referência aponta para a localização do objeto na memória. Na verdade, as variáveis ​​não contêm o valor.

// ? a referencia ao objeto presente no heap esta armazenado atualmente nas variaveis item e item2 na call stack, e o objeto em si é armazenado no heap. Qualquer variavel que tenta acessar objetos mais complexos guardam apenas a referencia do endereço de memoria presente no heap

// ? Em JavaScript, variáveis que referenciam objetos mais complexos, como objetos literais (como { counter: 0 }), arrays, funções etc., armazenam apenas a referência (endereço de memória) para o objeto no heap. A referência é o que permite acessar e manipular o objeto por meio da variável.

// ^ Portanto, quando você trabalha com objetos mais complexos em JavaScript, as variáveis contêm a referência ao objeto, e o objeto em si é armazenado no heap.
const item = { counter: 0 }

// Ao fazer const item2 = item, você está copiando a referência ao objeto no heap, não o objeto em si.
const item2 = item

// item.counter: 1
// item2.counter: 1


// ? funções como Object.create força o javascript a copiar o valor independente da referencia em memoria.



// tipo primitivo gera uma copia em memoria
deepStrictEqual(counter, 0)
deepStrictEqual(counter2, 1)

// tipo de referencia, copia o endereço de memoria apenas
// As variáveis contêm a referência ao objeto, e o objeto em si é armazenado no heap.
item2.counter++
deepStrictEqual(item, { counter: 1 })
item2.counter++
deepStrictEqual(item, { counter: 2 })
