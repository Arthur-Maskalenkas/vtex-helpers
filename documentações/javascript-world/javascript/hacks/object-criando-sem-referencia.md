# criando objetos sem referencia
# hack criando objetos sem referencia

## A diferença entre carCategory1 e carCategory2 ocorre porque o método Object.create() cria um novo objeto com o objeto fornecido como protótipo.

## Quando você atribui car diretamente a carCategory1, carCategory1 faz referência ao mesmo objeto { name: 'fusca', id: '1' }.Portanto, qualquer alteração feita em carCategory1 também afetará o objeto car original.

## Por outro lado, ao usar Object.create(car), você está criando um novo objeto com car como protótipo.Isso significa que carCategory2 herda as propriedades e métodos do objeto car, mas é um objeto separado e independente..

```javascript
const car = { name: 'fusca', id: '1' }

const carCategory1 = car
const carCategory2 = Object.create(car)

carCategory1
carCategory2

// colocando as proprieades
Object.assign(carCategory2, car);
car.id = '321'

carCategory1
{ name: 'fusca', id: '321' }
carCategory2
{ name: 'fusca', id: '1' }
```