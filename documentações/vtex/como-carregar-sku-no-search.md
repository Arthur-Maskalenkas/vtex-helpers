# como carregar sku no search
# search aparecer sku
# sku search
# search sku

```js
{
  "store.search#brand": {
    "blocks": [
      "search-result-layout#departamento"
    ],
    "props": {
      "context": {
        // vai fazer todos os skus carregarem
        "skusFilter": "ALL_AVAILABLE",
        "simulationBehavior": "default",
        "maxItemsPerPage": 20,
        
        "__unstableProductOriginVtex": true

      }
    }
  }
}
```