// testando em /infantil

const currentPayload1 = {
  "treePath": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#title-seo",
  "template": "olympikus.store-theme@4.x:store.search#department",
  "blockId": "olympikus.store-theme@4.x:rich-text#title-seo",
  "bindingId": "f2db77d5-ef13-42f7-abee-89e3bd6ffca7",
  "lang": "pt-BR",
  "configuration": {
    "contentId": "olympikus.store-theme@4.x:rich-text#title-seo",
    "contentJSON": "{\"text\":\"## linha infantil\"}",
    "status": "ACTIVE",
    "origin": null,
    "label": null,
    "condition": {
      "allMatches": true,
      "id": "olympikus.store-theme@4.x:rich-text#title-seo",
      "pageContext": {
        "id": "3",
        "type": "department"
      },
      "statements": []
    }
  }
}

const expectedPayload1 = {
  "treePath": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#title-seo",
  "template": "olympikus.store-theme@4.x:store.search#department",
  "blockId": "olympikus.store-theme@4.x:rich-text#title-seo",
  "bindingId": "f2db77d5-ef13-42f7-abee-89e3bd6ffca7",
  "lang": "pt-BR",
  "configuration": {
    "contentId": null, // primeira diferença
    "contentJSON": "{\"text\":\"## linha infantil\"}",
    "status": "ACTIVE",
    "origin": null,
    "label": null,
    "condition": {
      "allMatches": true,
      "id": "", // segunda diferença
      "pageContext": {
        "id": "3",
        "type": "department"
      },
      "statements": []
    }

  },
}


const currentPayload = "/infantil": {
  "page-info": {
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
    "breakpointStyles": [
      {
        "path": "/_v/private/vtex.styles-graphql/v1/style/olympikusio.store-theme@4.1.19+build1694719601$style.common.min.css",
        "mediaQuery": "",
        "type": "common"
        },
      {
        "path": "/_v/private/vtex.styles-graphql/v1/style/olympikusio.store-theme@4.1.19+build1694719601$style.small.min.css",
        "mediaQuery": "screen and (min-width: 20em)",
        "type": "small"
        },
      {
        "path": "/_v/private/vtex.styles-graphql/v1/style/olympikusio.store-theme@4.1.19+build1694719601$style.notsmall.min.css",
        "mediaQuery": "screen and (min-width: 40em)",
        "type": "notsmall"
        },
      {
        "path": "/_v/private/vtex.styles-graphql/v1/style/olympikusio.store-theme@4.1.19+build1694719601$style.large.min.css",
        "mediaQuery": "screen and (min-width: 64em)",
        "type": "large"
        },
      {
        "path": "/_v/private/vtex.styles-graphql/v1/style/olympikusio.store-theme@4.1.19+build1694719601$style.xlarge.min.css",
        "mediaQuery": "screen and (min-width: 80em)",
        "type": "xlarge"
        }
    ],
    "fonts": "/_v/public/vtex.styles-graphql/v1/fonts/989db2448f309bfdd99b513f37c84b8f5794d2b5",
    "overrides": [
        "/_v/public/vtex.styles-graphql/v1/overrides/vtex.checkout-container@0.8.0$overrides.css?workspace=arthurbackup",
    "/_v/public/vtex.styles-graphql/v1/overrides/vtex.product-list@0.37.1$overrides.css?workspace=arthurbackup",
    "/_v/public/vtex.styles-graphql/v1/overrides/vtex.minicart@2.67.1$overrides.css?workspace=arthurbackup",
    "/_v/public/vtex.styles-graphql/v1/overrides/olympikusio.store-theme@4.1.19+build1694719601$overrides.css?workspace=arthurbackup",
    "/_v/public/vtex.styles-graphql/v1/overrides/olympikusio.store-theme@4.1.19+build1694719601$fonts.css?workspace=arthurbackup"
      ],
"rootName": "store.search#department",
  "ssr": true,
    "styleMeta": {
  "fontsHash": "989db2448f309bfdd99b513f37c84b8f5794d2b5",
    "overridesIds": [
      {
        "id": "vtex.checkout-container@0.8.0$overrides.css"
      },
      {
        "id": "vtex.product-list@0.37.1$overrides.css"
      },
      {
        "id": "vtex.minicart@2.67.1$overrides.css"
      },
      {
        "id": "olympikusio.store-theme@4.1.19+build1694719601$overrides.css"
      },
      {
        "id": "olympikusio.store-theme@4.1.19+build1694719601$fonts.css"
      }
    ],
      "themeId": "olympikusio.store-theme@4.1.19+build1694719601$style.min.css"
},
"blockId": "olympikusio.store-theme@4.x:store.search#department",
  "canonicalPath": "/infantil",
    "metaTags": null,
      "routeId": "store.search#department",
        "title": null,
          "varyContentById": true,
            "pages": {
  "allowConditions": true,
    "context": "vtex.store@2.x/SearchContext",
      "declarer": "vtex.store@2.x",
        "path": "/_v/segment/routing/vtex.store@2.x/department/:id/:department(/*terms)",
          "routeId": "store.search#department",
            "blockId": "olympikusio.store-theme@4.x:store.search#department",
              "canonical": "/:department",
                "map": [
                  "c"
                ]
}
    },
"store.search#department/search-result-layout#departamento/search-result-layout.desktop/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#title-seo": {
  "blockId": "olympikusio.store-theme@4.x:rich-text#title-seo",
    "contentIds": [
      "iwiwBq4VVJRvEzi3Kx5vLJ~tPggJiLFAgxsy2n3EsNjf9"
    ],
      "props": {
    "text": "## linha infantil"
  },
  "three-path": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#title-seo",
    "props-on-code": {
    "blockClass": "container__seo--title",
      "text": "## Lorem Ipsum dolor sit amet"
  }
},
"store.search#department/search-result-layout#departamento/search-result-layout.desktop/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#text-seo": {
  "blockId": "olympikusio.store-theme@4.x:rich-text#text-seo",
    "contentIds": [
      "AGEb6YoxX8kje5KV7Kmsu~habb8bWP1MeneEQaCFZFHT"
    ],
      "props": {
    "text": "Todo sapato deve oferecer um toque macio para os pés, inclusive os infantis. Crianças e adolescentes estão sempre em movimento, portanto precisam de calçados flexíveis e anatômicos. As meninas podem correr, brincar, praticar esportes e se divertir muito com os tênis Olympikus, que se destacam pela sua delicadeza, diversidade de cores, tamanhos e modelos para todos os gostos.\n\nAs brincadeiras ficam mais animadas com qualquer modelo Olympikus. A proteção para os pés e a durabilidade são fundamentais para as aventuras diárias dos meninos. Os pais também podem fazer parte da diversão usando um Olympikus para combinar com a criançada.\n\nOs tênis masculinos oferecem segurança e conforto para todas as ocasiões, principalmente para atividades que exigem calçados mais resistentes. Já os tênis femininos aprimoram o desempenho no esporte e ajudam a manter um visual esportivo, garantindo mais conforto e liberdade para a rotina diária.\n\nOs tênis infantis garantem o caminhar perfeito, pois facilitam o calço, se adaptam bem aos pés e vão bem com qualquer look. A Olympikus tem tênis para toda a família. Aproveite a versatilidade dos nossos calçados e faça combinações muito divertidas para as crianças."
  },
  "three-path": "store.search#department/search-result-layout#departamento/search-result-layout.desktop/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#text-seo",
    "props-on-code": {
    "blockClass": "container__seo--text",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor leo a eleifend. Aenean eget lacus convallis, vehicula nulla non, feugiat elit. Vivamus aliquam, nulla et vestibulum tincidunt, diam tellus aliquam dui, quis consectetur purus risus vitae justo. Duis arcu risus, vulputate sed nisl nec, mollis ultrices risus. Curabitur eget iaculis ante, et lacinia est. Duis ac libero eget enim rhoncus feugiat. Donec auctor odio mauris, in sagittis tortor condimentum condimentum."
  }
},
"store.search#department/search-result-layout#departamento/search-result-layout.mobile/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#title-seo": {
  "blockId": "olympikusio.store-theme@4.x:rich-text#title-seo",
    "contentIds": [
      "2FvF9tqqfgBEvnQi8hWYQH~3wwDtLq5cT6FtrMYHAziUk"
    ],
      "props": {
    "text": "## linha infantil"
  },
  "three-path": "store.search#department/search-result-layout#departamento/search-result-layout.mobile/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#title-seo",
    "props-on-code": {
    "blockClass": "container__seo--title",
      "text": "## Lorem Ipsum dolor sit amet"
  }
},
"store.search#department/search-result-layout#departamento/search-result-layout.mobile/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#text-seo": {
  "blockId": "olympikusio.store-theme@4.x:rich-text#text-seo",
    "contentIds": [
      "jH2CZFzFH3BQCZpURfpb8a~9GyYwhk9jFzJ9fuH3HSjd6"
    ],
      "props": {
    "text": "# Infantil\n\nTodo sapato deve oferecer um toque macio para os pés, inclusive os infantis. Crianças e adolescentes estão sempre em movimento, portanto precisam de calçados flexíveis e anatômicos. As meninas podem correr, brincar, praticar esportes e se divertir muito com os tênis Olympikus, que se destacam pela sua delicadeza, diversidade de cores, tamanhos e modelos para todos os gostos.\n\nAs brincadeiras ficam mais animadas com qualquer modelo Olympikus. A proteção para os pés e a durabilidade são fundamentais para as aventuras diárias dos meninos. Os pais também podem fazer parte da diversão usando um Olympikus para combinar com a criançada.\n\nOs tênis masculinos oferecem segurança e conforto para todas as ocasiões, principalmente para atividades que exigem calçados mais resistentes. Já os tênis femininos aprimoram o desempenho no esporte e ajudam a manter um visual esportivo, garantindo mais conforto e liberdade para a rotina diária.\n\nOs tênis infantis garantem o caminhar perfeito, pois facilitam o calço, se adaptam bem aos pés e vão bem com qualquer look. A Olympikus tem tênis para toda a família. Aproveite a versatilidade dos nossos calçados e faça combinações muito divertidas para as crianças."
  },
  "three-path": "store.search#department/search-result-layout#departamento/search-result-layout.mobile/toggle-layout#home__seo/flex-layout.row#seo/flex-layout.col#seo-col/rich-text#text-seo",
    "props-on-code": {
    "blockClass": "container__seo--text",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor leo a eleifend. Aenean eget lacus convallis, vehicula nulla non, feugiat elit. Vivamus aliquam, nulla et vestibulum tincidunt, diam tellus aliquam dui, quis consectetur purus risus vitae justo. Duis arcu risus, vulputate sed nisl nec, mollis ultrices risus. Curabitur eget iaculis ante, et lacinia est. Duis ac libero eget enim rhoncus feugiat. Donec auctor odio mauris, in sagittis tortor condimentum condimentum."
  }
}
  }