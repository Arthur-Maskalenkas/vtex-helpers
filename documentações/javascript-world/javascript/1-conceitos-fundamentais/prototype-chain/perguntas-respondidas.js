const assert = require('assert')

// ! Por quê funções possuem .prototype porém não possuem proto?
// toddo objeto no javascript têm prototype, que é o objeto do qual ele vai herdar as propriedades e métodos. A questão é que, na instância dos objetos, o prototype do qual ele herda fica na propriedade proto.
// Então se tu tem uma array "arr", o prototype dela, que é Array.prototype, vai ficar dentro da prorpriedade arr.proto. E isso vale também pros próprios prototypes, o prototype do Array.prototype, que é Object.prototype, fica dentro da propriedade Array.prototype.proto

// se tu quiser acessar a função map ou filter da array "arr" o JS primeiro vai procurar essa função dentro da tua instância, ou seja, dentro da array "arr", se não encontrar vai buscar no prototype dessa array, que é Array.prototype, e se não achar, vai buscar no prototype do Array.prototype, e assim sucessivamente. isso é prototype chain

// 2023-06-22-21-28-51.png
function Desempregado() { }
function Employee() { }
function Manager() { }

Desempregado.prototype.curriculo = () => 'curriculo!'

Employee.prototype = Object.create(Desempregado.prototype)
Manager.prototype = Object.create(Employee.prototype)

// ? se nao chamar o 'new', o primeiro __proto__ vai ser sempre a instancia de Function, sem herdar nossas classes
assert.deepStrictEqual(Manager.prototype.__proto__, Employee.prototype)

// quando chamamos com o 'new' o __proto__ recebe o prototype de quem ele herdou
const manager = new Manager()

assert.deepStrictEqual(manager.__proto__, Manager.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__, Employee.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__, Desempregado.prototype)

console.log('sem utilizar new => %s', Manager.prototype.__proto__.__proto__.curriculo())
console.log('utilizando new => %s', manager.curriculo())


