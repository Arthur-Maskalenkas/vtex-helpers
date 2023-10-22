![Alt text](image.png)

# Por padrão o id é o blockId.
# Caso salve sem contentId, a versão não é exibida. Por padrão o contentId é o blockId.

# Mutation
```graphql
mutation saveContentInStore($template: String, $treePath: String, $blockId: String, $from: PageContextInput, $configuration: ContentConfigurationInput, $lang: String, $bindingId: String) {
  saveContent(template: $template, treePath: $treePath, blockId: $blockId, from: $from, configuration: $configuration, lang: $lang, bindingId: $bindingId) {
    contentId
    label
    contentJSON
    origin
  }
}
```

# Parametros IDE-graphql
```json
{
  "template": "olympikusio.store-theme@4.x:store.search#department", "treePath": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/flex-layout.row#search-breadcrumb/flex-layout.col#orderby/flex-layout.row#orderByAndSwitcher/order-by.v2", "blockId": "vtex.search-result@3.x:order-by.v2", "lang": "pt-BR", "bindingId": "43ff0222-dce4-4a83-9f6f-a0f123ab38e7", "configuration": {"status": "ACTIVE", "condition": {"allMatches": true, "id": "be4fa4c4ff2661651aa33e656d1aa9d61e096392", "pageContext": {"id": "3", "type": "department"}, "statements": []}, "contentId": "4DWkdeLi63A5gqDQgKguz7~m4SfzMKKMV4Pzm5ojFYWyw", "contentJSON": "{\"message\":\"tessdsadsadsatee\"}", "label": null, "origin": null}
}
```

# Parametros identados
```json
{
    "template": "olympikusio.store-theme@4.x:store.search#department",
    "treePath": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/flex-layout.row#search-breadcrumb/flex-layout.col#orderby/flex-layout.row#orderByAndSwitcher/order-by.v2",
    "blockId": "vtex.search-result@3.x:order-by.v2",
    "lang": "pt-BR",
    "bindingId": "43ff0222-dce4-4a83-9f6f-a0f123ab38e7",
    "configuration": {
        "status": "ACTIVE",
        "condition": {
            "allMatches": true,
            "id": "be4fa4c4ff2661651aa33e656d1aa9d61e096392",
            "pageContext": {
                "id": "3",
                "type": "department"
            },
            "statements": []
        },
        "contentId": "4DWkdeLi63A5gqDQgKguz7~m4SfzMKKMV4Pzm5ojFYWyw",
        "contentJSON": "{\"message\":\"tessdsadsadsatee\"}",
        "label": null,
        "origin": null
    }
}
```


# Payload real
```javascript
const payload = {
  bindingId: "43ff0222-dce4-4a83-9f6f-a0f123ab38e7",
  blockId: "vtex.search-result@3.x:order-by.v2",
  configuration: {
    status: "ACTIVE",
    condition: {
      allMatches: true,
      id: "be4fa4c4ff2661651aa33e656d1aa9d61e096392",
      pageContext: {
        id: "3",
        type: "department"
      },
      statements: []
    },
    contentId: "4DWkdeLi63A5gqDQgKguz7~m4SfzMKKMV4Pzm5ojFYWyw",
    contentJSON: "{\'message\:\'testee\'}",
    label: null,
    origin: null
  },
  lang: "pt-BR",
  template: "olympikusio.store-theme@4.x:store.search#department",
  treePath: "store.search#department/search-result-layout#departamento/search-result-layout.desktop/flex-layout.row#search-breadcrumb/flex-layout.col#orderby/flex-layout.row#orderByAndSwitcher/order-by.v2"
}
```

```javascript
{"template":"olympikusio.store-theme@4.x:rich-text#title-seo","lang":"pt-BR","blockId":"olympikusio.store-theme@4.x:rich-text#title-seo","treePath":"store.search#department/search-result-layout#departamento/search-result-layout.desktop/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#title-seo","bindingId":"43ff0222-dce4-4a83-9f6f-a0f123ab38e7","configuration":{"status":"ACTIVE","contentId":"olympikusio.store-theme@4.x:rich-text#title-seo","origin":null,"label":null,"contentJSON":"{\"text\":\"## linha infantill\"}","condition":{"allMatches":true,"id":"olympikusio.store-theme@4.x:rich-text#title-seo","pageContext":{"id":"3","type":"department"},"statements":[]}}}
```

# exemplo de bloco retornado pelo backup
```javascript
[
  {
    "domain": "store",
    "id": "store.search#department",
    "pageContext": {
        "id": "3",
        "type": "department"
    },
    "params": {
        "id": "3",
        "department": "infantil"
    },
    "path": "/_v/segment/routing/vtex.store@2.x/department/3/infantil?map=c",
    "pathId": "/_v/segment/routing/vtex.store@2.x/department/:p6/:p7",
    "queryString": {
        "map": "c"
    },
    "rootName": "store.search#department",
    "ssr": true,
    "blockId": "olympikusio.store-theme@4.x:store.search#department",
    "canonicalPath": "/infantil",
    "metaTags": null,
    "routeId": "store.search#department",
    "title": null,
    "varyContentById": true
},
{
    "key": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/flex-layout.row#search-breadcrumb/flex-layout.col#orderby/flex-layout.row#orderByAndSwitcher/order-by.v2",
    "value": {
        "blockId": "order-by.v2",
        "contentIds": [
            "4DWkdeLi63A5gqDQgKguz7~m4SfzMKKMV4Pzm5ojFYWyw"
        ],
        "props": {
            "message": "tessdsadsadsatee"
        },
        "three-path": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/flex-layout.row#search-breadcrumb/flex-layout.col#orderby/flex-layout.row#orderByAndSwitcher/order-by.v2",
        "props-on-code": {}
    }
}
]
```