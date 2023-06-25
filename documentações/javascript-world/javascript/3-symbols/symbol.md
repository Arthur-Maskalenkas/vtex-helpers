# Introdução

É basicamente valores unicos, que são dificeis de se pegar, mas não são secretos. Qualquer debugador consegue ver o que tem dentro.

## Casos de uso
* Adicionar funcionalidade de iteração em um objeto, para trabalhar com ele como se fosse uma lista
* Adicionar funcionalidade para iterar sob uma classe aonde o retorno utilizando o for
* criar valores unicos, que antes poderiam ser strings ou numbers
* mudar o comportamento padrão de objetos em javascript

#### Adicionar funcionalidade de iteração em um objeto literal, para trabalhar com ele como se fosse uma lista
Podemos usar as proprieades async iterador ou iterator para que quando o objeto for chamado por algum operador de iteração, como for of, ...rests spread e array.from, ele agir igual a uma lista

```javascript
const obj = {
  //iterators
  [Symbol.iterator]: () => ({
    items: ['c','b','a'],
    next() {
      return {
        done: this.items.length === 0,
        value: this.items.pop()
      }
    }
  })
}


for (const item of obj) {
  console.log('item', item)
}
```


```bash
item a
item b
item c
```

#### Adicionar funcionalidade para iterar sob uma classe aonde o retorno seja assincrono

```javascript
const kItems = Symbol('kItems')
class MyObject {
  constructor(...args) {
    this[kItems] = args.map(arg => arg)
  }

  async *[Symbol.asyncIterator]() {
    const timeout = ms => new Promise(r => setTimeout(r, ms))
    for( const item of this[kItems]) {
      await timeout(100)
      yield item
    }
  }
}

const myObject = new MyObject(['argumento 1', 'argumento 2', 'argumento 3'])

;(async() => {
  const listItens = []
  for await (const item of myObject) { listItens.push(...item) }
  console.log(listItens)
})()
```

```bash
    [ 'argumento 1', 'argumento 2', 'argumento 3' ]
```

#### Adicionar funcionalidade para iterar sob uma classe aonde o retorno não seja assincrono

```javascript
const kItems = Symbol('kItems')
class MyObject {
  constructor(...args) {
    this[kItems] = args.map(arg => arg)
  }

  *[Symbol.iterator]() {
    for (const item of this[kItems]) {
      yield item
    }
  }
}

const myObject = new MyObject(['argumento 1', 'argumento 2', 'argumento 3'])

const listItens = []
for(const item of myObject){listItens.push(...item)}
console.log(listItens)
```



```bash
    [ 'argumento 1', 'argumento 2', 'argumento 3' ]
```


### mudar o comportamento padrão de objetos em javascript

Mudar o comportamento de toString(), toNumber, e etc.

### criar valores unicos, que antes poderiam ser strings ou valores
Por padrão, o symbol gera endereços diferentes em memoria. Toda vez que você passa uma string para um symbol, ele vai criar um endereço de memoria diferente e ele não vai ser igual a ele mesmo.
Dois symbols iguais são diferentes por exemplo.

```javascript
const uniqueKey = Symbol('userName')
const user = {}

user["userName"] = 'value for normal objects'
user[uniqueKey] = 'value for symbol'

console.log('getting normal objects', user.userName)
console.log('getting normal objects', user[Symbol('userName')])
console.log('getting normal objects', user[uniqueKey])
```

```bash
getting normal objects value for normal objects
getting normal objects undefined
getting normal objects value for symbol
```

#### No nodejs por exemplo é usado para setar as chaves privadas de um objeto ou até mesmo para criar funções privadas
https://github.com/nodejs/node/blob/8d6c2f2ada79e52ec0b376769a7d94814945bd4f/lib/internal/fs/promises.js#L78
```javascript
const kClosePromise = Symbol('kClosePromise');
const kHandle = Symbol('kHandle');
const kFd = Symbol('kFd');
const kRefs = Symbol('kRefs');
const kTest = Symbol('kTest')

class FileHandle extends JSTransferable {
  constructor(filehandle) {
    super();
    this[kHandle] = filehandle;
    this[kFd] = filehandle ? filehandle.fd : -1;

    this[kRefs] = 1;
    this[kClosePromise] = null;
  }

  [kTest]() {
    if (this[kClosePromise] || this[kRefs] > 1) {
      const DOMException = internalBinding('messaging').DOMException;
      throw new DOMException('Cannot transfer FileHandle while in use',
        'DataCloneError');
    }
  }
}
```