// ? strict equality operator ou === - utilizado para não fazer coerção implicita
// ? loose equality operator ou == - vai tentar fazer uma coersão implicita
// ? https://github.com/aemkei/jsfuck
// ? ![](2023-06-13-22-18-46.png)



console.assert(123 == '123', 'implicit convertion to number')
console.assert('123' == 123, 'implicit convertion to string')

console.assert(String(123) === '123', 'explicit convertion to string')
console.assert(Number('123') === 123, 'explicit convertion to number')

// ! ==============

console.assert((false || 'element true 1' || 'element true 2' || false) === 'element true 1', " || retorna o primeiro elemento que for verdadeiro")

console.assert(('element true 1' && 'element true 2') === 'element true 2', " || retorna o ultimo elemento que for verdadeiro")


// ! ==============

// ? no javascript, todos os objetos possuem alguns metodos por padrão. Como toString,valueOf,isprototypeof e etc.
// ? no javascript só possuem 3 tipos, sendo eles: number, string e boolean

// ? Ao converter um objeto para string, ele vai seguir a seguinte ordem de chamada:
// Vai chamar o toString, e caso esse não retorne um primitivo, vai chamar o valueOf
// Caso o toString ou o valueOf não retornem um valor primitivo um typeError sera estourado

// ? Ao converter um objeto para Number, ele vai seguir a seguinte ordem de chamada:
// Vai chamar o valueOf, e caso esse não retorne um primitivo, vai chamar o toString
// Caso o toString ou o valueOf não retornem um valor primitivo um typeError sera estourado

const item = {
  name: 'Arthur',
  age: 23,
  // string: se não for primtivo, chame o valueof
  toString() {
    return `Name: ${this.name}, age: ${this.age}`
  },
  // number: se não for primitivo, chame o toString
  valueOf() {
    return 7
    // se eu não quisesse  retornar um primitivo, bastasse passar um:
    // return {teste: 'ola'}
    // automaticamente iria bater em toString depois caso a conversão fosse para objeto
  }

  // vai ter a maior prioridade. Vai responder pela conversão dos dois tipos (number,string)
  // [Symbol.toPrimitive](coercionType) {
  //   console.log('trying to convert to', coercionType)

  //   const types = {
  //     string: JSON.stringify(this),
  //     number: 7
  //   }

  //   return types[coercionType] || types.string
  // }
}

// ? convertendo um objeto para string
// console.log('toString!', String(item))
// console.log('valueOf!', Number(item))

// console.log('String', String(item))
// console.log('Number', Number(item))

// // Chama a conversão default
// console.log('Date', new Date(item))

const item2 = { ...item, name: 'arthur2', age: 20 }
console.assert(item2.name === 'arthur2' && item2.age === 20)