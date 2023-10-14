
# runtime.route
```json
{
  "domain": "store",
  "id": "vtex.store@2.x:store.custom#charged-feminino",
  "pageContext": {
    "id": "vtex.store@2.x:store.custom#charged-feminino",
    "type": "route"
  },
  "params": { },
  "path": "/charged-feminino",
  "pathId": "/charged-feminino",
  "queryString": { },
  "fonts": "/_v/public/vtex.styles-graphql/v1/fonts/989db2448f309bfdd99b513f37c84b8f5794d2b5",
  "rootName": "vtex.store@2.x:store.custom#charged-feminino",
  "ssr": true,
  "blockId": "underarmourbr.store-theme@5.x:store.custom#collections",
  "canonicalPath": "/charged-feminino",
  "metaTags": {
    "description": "",
    "keywords": [ ]
  },
  "routeId": "vtex.store@2.x:store.custom#charged-feminino",
  "title": "Charged Feminino",
  "varyContentById": false
}
```

# pages

```json
    "vtex.store@2.x:store.custom#charged-masculino": {
        "allowConditions": true,
        "context": null,
        "declarer": null,
        "auth": false,
        "path": "/charged-masculino",
        "routeId": "vtex.store@2.x:store.custom#charged-masculino",
        "blockId": "underarmourbrio.store-theme@5.x:store.custom#collections",
        "map": []
    },
```

# consulta graphql
```json
{
  "data": {
    "route": {
      "auth": false,
      "blockId": "underarmourbr.store-theme@5.x:store.custom#collections",
      "binding": "1c5539df-ad21-4021-ae5b-60bc84243106",
      "context": null,
      "declarer": null,
      "domain": "store",
      "interfaceId": "vtex.store@2.x:store.custom",
      "conflicts": [],
      "pages": [],
      "path": "/charged-feminino",
      "routeId": "vtex.store@2.x:store.custom#charged-feminino",
      "title": "Charged Feminino",
      "uuid": "nqHyZ9rBhmFpzWyh6cdc4D",
      "metaTags": {
        "description": ""
      }
    }
  }
}
```

```graphql
mutation {
  saveRoute(route: {
  	auth:false,
    blockId: "underarmourbr.store-theme@5.x:store.custom#collections",
    context: null,
    declarer: null,
    domain: "store",
    interfaceId: "vtex.store@2.x:store.custom",
    path: "/charged-feminino",
    routeId: "vtex.store@2.x:store.custom#charged-feminino",
    pages: [],
    title: "Charged Feminino",
    metaTags: {
        description: ""
    },
    bindingId:"1c5539df-ad21-4021-ae5b-60bc84243106"
  }) {
    auth
    blockId
    binding
    context
    declarer
    domain
    interfaceId
    conflicts {
      auth
      blockId
      binding
      context
      declarer
      domain
      interfaceId
      path
      routeId
      title
      uuid
    }
    pages {
      pageId
      template
    }
    path
    routeId
    title
    uuid
    metaTags {
      description
    }
  }
}
```


