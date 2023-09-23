// testando em /alg

const currentPayload1 = {
  "treePath": "vtex.store@2.x:store.custom#alg/search-result-layout.customQuery#collections",
  "blockId": "olympikus.store-theme@4.x:search-result-layout.customQuery#collections",
  "template": "olympikus.store-theme@4.x:store.custom#collections",
  "bindingId": "f2db77d5-ef13-42f7-abee-89e3bd6ffca7",
  "lang": "pt-BR",
  "configuration": {
    "contentId": "olympikus.store-theme@4.x:search-result-layout.customQuery#collections",
    "contentJSON": "{\"querySchema\":{\"maxItemsPerPage\":10,\"orderByField\":\"\",\"hideUnavailableItems\":false,\"skusFilter\":\"ALL_AVAILABLE\",\"simulationBehavior\":\"default\",\"installmentCriteria\":\"MAX_WITHOUT_INTEREST\",\"queryField\":\"198\",\"mapField\":\"productclusterids\"},\"context\":{\"skusFilter\":\"FIRST_AVAILABLE\",\"simulationBehavior\":\"default\",\"maxItemsPerPage\":12,\"mapField\":\"productClusterIds\",\"queryField\":\"800\"}}",
    "status": "ACTIVE",
    "origin": null,
    "label": null,
    "condition": {
      "allMatches": true,
      "id": "olympikus.store-theme@4.x:search-result-layout.customQuery#collections", // Segunda divergencia
      "pageContext": {
        "id": "vtex.store@2.x:store.custom#alg",
        "type": "route"
      },
      "statements": []
    }
  }
}

const expectedPayload1 = {
  "treePath": "vtex.store@2.x:store.custom#alg/search-result-layout.customQuery#collections"
  "blockId": "olympikus.store-theme@4.x:search-result-layout.customQuery#collections",
  "template": "olympikus.store-theme@4.x:store.custom#collections",
  "bindingId": "f2db77d5-ef13-42f7-abee-89e3bd6ffca7",
  "lang": "pt-BR",
  "configuration": {
    "contentId": null, // primeira divergencia
    "contentJSON": "{\"querySchema\":{\"maxItemsPerPage\":10,\"orderByField\":\"\",\"hideUnavailableItems\":false,\"skusFilter\":\"ALL_AVAILABLE\",\"simulationBehavior\":\"default\",\"installmentCriteria\":\"MAX_WITHOUT_INTEREST\",\"queryField\":\"198\",\"mapField\":\"productclusterids\"}}",
    "status": "ACTIVE",
    "label": null,
    "origin": null,
    "condition": {
      "allMatches": true,
      "id": "", // outra divergencia
      "pageContext": {
        "id": "vtex.store@2.x:store.custom#alg",
        "type": "route"
      },
      "statements": []
    },

  }
}
