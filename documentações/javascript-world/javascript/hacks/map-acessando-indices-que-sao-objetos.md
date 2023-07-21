# map acessando indice
# indice map
# acessando indice por objeto

## Em Map, para acessar um indice através de um objeto, é necessario que o valor passado em "get" seja um endereço de memoria (valor por referencia), se não, da erro

```javascript
const onlyRefenceWorks = { id: 1 }
myMap.set(onlyRefenceWorks, { name: 'ErickWendel' })

assert.deepStrictEqual(myMap.get({ id: 1 }), undefined)
assert.deepStrictEqual(myMap.get(onlyRefenceWorks), { name: "ErickWendel" })
```

### Exemplo

````javascript
const objToAccessByMap = new Map();

for (let i = 1; i <= 100; i++) {
  const mapId = { productReference: i, productId: i }
  objToAccessByMap.set(mapId,{indexItem: i});
}

let chaveEncontrada = null;

for (const [key, valor] of objToAccessByMap) {
  const { productReference, productId } = key;

  if (productReference === 99 && productId === 99) {
    chaveEncontrada = key;
    break;
  }
}
```