## Tudo o que for buscavel é possivel utilizar no campo 'query', por exemplo
É possivel fazer https://olympikusio.myvtex.com/BPC435782034_* e encontrar todos os produtos que correspondem a esse filtro.

Ou seja,
```graphql
{
  # é permitido 
  products(from: 0, to: 49, query: "BPC435782034_*") {
    productId
  }
}

```