sempre que uma interface coincidir com outra (product-name) é becessario fazer isso


  "vendor": "vtex",
  "name": "product-list",
  
  "flex-layout.row#product-name": {
    // Using app prefix here because it might conflict with
    // vtex.store-components:product-name
    "children": ["vtex.product-list:product-name"]
  },
  "flex-layout.row#product-variations": {
    "children": ["product-variations"],
    "props": {
      "marginTop": "2"
    }
  }


  e tambem

    "flex-layout.row#product-name": {
    "title": "Container Nome Produto",

    "props": {
      "blockClass": "container__product-name"
    },
    "children": [
      "vtex.store-components:product-name"
    ]