const mock = {
 
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/flex-layout.col#product-summary-rating/product-rating-inline": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-review-interfaces@1.x:product-rating-inline",
    "blocks": [],
    "component": "vtex.product-review-interfaces@1.0.2/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-review-interfaces@1.x:product-rating-inline"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-summary-container-prices",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
        "extensionPointId": "flex-layout.row#product-summary-list-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
        "extensionPointId": "flex-layout.row#product-summary-selling-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
        "extensionPointId": "product-installments#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/product-summary-image#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-summary-image#product-summary",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryImage",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-image"
    ],
    "preview": null,
    "props": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "render": "server",
    "track": [],
    "content": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/add-to-list-btn#wishlist": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:add-to-list-btn#wishlist",
    "blocks": [],
    "component": "vtex.wish-list@1.15.4/AddProductBtn",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.wish-list@1.x:add-to-list-btn"
    ],
    "preview": null,
    "props": {
      "blockClass": "shelf-wishlist-btn"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "shelf-wishlist-btn"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-trigger#quickview",
    "blocks": [
      {
        "blockId": "vtex.store-icons@0.x:icon-expand",
        "extensionPointId": "icon-expand",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
        "extensionPointId": "modal-layout#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/ModalTrigger",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-trigger"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.row#product-summary-name/product-summary-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-name",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-name"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.col#product-summary-rating/product-rating-inline": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-review-interfaces@1.x:product-rating-inline",
    "blocks": [],
    "component": "vtex.product-review-interfaces@1.0.2/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-review-interfaces@1.x:product-rating-inline"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-summary-container-prices",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
        "extensionPointId": "flex-layout.row#product-summary-list-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
        "extensionPointId": "flex-layout.row#product-summary-selling-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
        "extensionPointId": "product-installments#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/product-summary-image#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-summary-image#product-summary",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryImage",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-image"
    ],
    "preview": null,
    "props": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "render": "server",
    "track": [],
    "content": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/add-to-list-btn#wishlist": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:add-to-list-btn#wishlist",
    "blocks": [],
    "component": "vtex.wish-list@1.15.4/AddProductBtn",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.wish-list@1.x:add-to-list-btn"
    ],
    "preview": null,
    "props": {
      "blockClass": "shelf-wishlist-btn"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "shelf-wishlist-btn"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-trigger#quickview",
    "blocks": [
      {
        "blockId": "vtex.store-icons@0.x:icon-expand",
        "extensionPointId": "icon-expand",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
        "extensionPointId": "modal-layout#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/ModalTrigger",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-trigger"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.row#product-summary-name/product-summary-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-name",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-name"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.col#product-summary-rating/product-rating-inline": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-review-interfaces@1.x:product-rating-inline",
    "blocks": [],
    "component": "vtex.product-review-interfaces@1.0.2/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-review-interfaces@1.x:product-rating-inline"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-summary-container-prices",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
        "extensionPointId": "flex-layout.row#product-summary-list-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
        "extensionPointId": "flex-layout.row#product-summary-selling-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
        "extensionPointId": "product-installments#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/product-summary-image#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-summary-image#product-summary",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryImage",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-image"
    ],
    "preview": null,
    "props": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "render": "server",
    "track": [],
    "content": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/add-to-list-btn#wishlist": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:add-to-list-btn#wishlist",
    "blocks": [],
    "component": "vtex.wish-list@1.15.4/AddProductBtn",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.wish-list@1.x:add-to-list-btn"
    ],
    "preview": null,
    "props": {
      "blockClass": "shelf-wishlist-btn"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "shelf-wishlist-btn"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-trigger#quickview",
    "blocks": [
      {
        "blockId": "vtex.store-icons@0.x:icon-expand",
        "extensionPointId": "icon-expand",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
        "extensionPointId": "modal-layout#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/ModalTrigger",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-trigger"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.row#product-summary-name/product-summary-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-name",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-name"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.col#product-summary-rating/product-rating-inline": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-review-interfaces@1.x:product-rating-inline",
    "blocks": [],
    "component": "vtex.product-review-interfaces@1.0.2/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-review-interfaces@1.x:product-rating-inline"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-summary-container-prices",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
        "extensionPointId": "flex-layout.row#product-summary-list-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
        "extensionPointId": "flex-layout.row#product-summary-selling-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
        "extensionPointId": "product-installments#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/product-summary-image#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-summary-image#product-summary",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryImage",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-image"
    ],
    "preview": null,
    "props": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "render": "server",
    "track": [],
    "content": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/add-to-list-btn#wishlist": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:add-to-list-btn#wishlist",
    "blocks": [],
    "component": "vtex.wish-list@1.15.4/AddProductBtn",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.wish-list@1.x:add-to-list-btn"
    ],
    "preview": null,
    "props": {
      "blockClass": "shelf-wishlist-btn"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "shelf-wishlist-btn"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-trigger#quickview",
    "blocks": [
      {
        "blockId": "vtex.store-icons@0.x:icon-expand",
        "extensionPointId": "icon-expand",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
        "extensionPointId": "modal-layout#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/ModalTrigger",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-trigger"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.row#product-summary-name/product-summary-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-name",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-name"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.col#product-summary-rating/product-rating-inline": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-review-interfaces@1.x:product-rating-inline",
    "blocks": [],
    "component": "vtex.product-review-interfaces@1.0.2/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-review-interfaces@1.x:product-rating-inline"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-summary-container-prices",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
        "extensionPointId": "flex-layout.row#product-summary-list-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
        "extensionPointId": "flex-layout.row#product-summary-selling-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
        "extensionPointId": "product-installments#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/product-summary-image#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-summary-image#product-summary",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryImage",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-image"
    ],
    "preview": null,
    "props": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "render": "server",
    "track": [],
    "content": {
      "showBadge": false,
      "aspectRatio": "1:1",
      "maxHeight": 222
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/add-to-list-btn#wishlist": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:add-to-list-btn#wishlist",
    "blocks": [],
    "component": "vtex.wish-list@1.15.4/AddProductBtn",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.wish-list@1.x:add-to-list-btn"
    ],
    "preview": null,
    "props": {
      "blockClass": "shelf-wishlist-btn"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "shelf-wishlist-btn"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-trigger#quickview",
    "blocks": [
      {
        "blockId": "vtex.store-icons@0.x:icon-expand",
        "extensionPointId": "icon-expand",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
        "extensionPointId": "modal-layout#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/ModalTrigger",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-trigger"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.row#product-summary-name/product-summary-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-name",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummaryName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-name"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.col#product-summary-rating/product-rating-inline": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-review-interfaces@1.x:product-rating-inline",
    "blocks": [],
    "component": "vtex.product-review-interfaces@1.0.2/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-review-interfaces@1.x:product-rating-inline"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-summary-container-prices",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
        "extensionPointId": "flex-layout.row#product-summary-list-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
        "extensionPointId": "flex-layout.row#product-summary-selling-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
        "extensionPointId": "product-installments#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__prices-col",
      "preventVerticalStretch": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:submenu#central-attendance",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:menu#central-attendance",
        "extensionPointId": "vtex.menu@2.x:menu#central-attendance",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.menu@2.34.25/Submenu",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.menu@2.x:submenu"
    ],
    "preview": null,
    "props": {
      "width": "auto",
      "blockClass": "submenu-central-attendance",
      "submenuWidth": "auto"
    },
    "render": "server",
    "title": "submenu",
    "track": [],
    "content": {
      "width": "auto",
      "blockClass": "submenu-central-attendance",
      "submenuWidth": "auto"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-empty-state/flex-layout.row#empty-state": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#empty-state",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#empty-state",
        "extensionPointId": "flex-layout.col#empty-state",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list#minicart",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-content-mobile",
        "extensionPointId": "product-list-content-mobile",
        "children": false,
        "blockRole": "block"
      }
    ],
    "component": "vtex.product-list@0.36.0/ProductListWrapper",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-list@0.x:product-list"
    ],
    "preview": null,
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/flex-layout.row#minicart-footer/flex-layout.col#minicart-footer": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#minicart-footer",
    "blocks": [
      {
        "blockId": "lojasmarabraz.shipping-minicart@0.x:shipping-minicart",
        "extensionPointId": "shipping-minicart",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:minicart-summary",
        "extensionPointId": "minicart-summary",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.minicart@2.x:minicart-checkout-button",
        "extensionPointId": "minicart-checkout-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:drawer-close-button#close-minicart",
        "extensionPointId": "drawer-close-button#close-minicart",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#newsletter/flex-layout.col#newsletter/flex-layout.row#newsletter-texts/flex-layout.col#newsletter-text/flex-layout.row#container-title-and-subtitle/flex-layout.col#container-title-and-subtitle/rich-text#newsletter-title": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#newsletter-title",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "text": "Receba ofertas incriveis!",
      "blockClass": "title__newsletter"
    },
    "render": "server",
    "title": "Texto título Newsletter",
    "track": [],
    "content": {
      "text": "Receba ofertas incriveis!",
      "blockClass": "title__newsletter"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#newsletter/flex-layout.col#newsletter/flex-layout.row#newsletter-texts/flex-layout.col#newsletter-text/flex-layout.row#container-title-and-subtitle/flex-layout.col#container-title-and-subtitle/rich-text#newsletter-subtitle": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#newsletter-subtitle",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "text": "Ofertas e novidades exclusivas diretamente \n no seu e-mail.",
      "blockClass": "text__newsletter-subtitle"
    },
    "render": "server",
    "title": "Texto Newsletter",
    "track": [],
    "content": {
      "text": "Ofertas e novidades exclusivas diretamente \n no seu e-mail.",
      "blockClass": "text__newsletter-subtitle"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#container-footer-text-welcome/flex-layout.col#container-footer-text-welcome/flex-layout.row#footer-container-texts/flex-layout.col#footer-container-texts": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#footer-container-texts",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-title-welcome-1",
        "extensionPointId": "rich-text#footer-title-welcome-1",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-text-welcome-1",
        "extensionPointId": "rich-text#footer-text-welcome-1",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-title-welcome-2",
        "extensionPointId": "rich-text#footer-title-welcome-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-text-welcome-2",
        "extensionPointId": "rich-text#footer-text-welcome-2",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "on-view",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__footer-texts-col",
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__footer-texts-col",
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-institucional/flex-layout.col#footer-desktop-institucional/vtex.menu@2.x:menu#container-sections-institucional-items/menu-item#a-marabraz": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#a-marabraz",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-a-marabraz",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/a-marabraz",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "a-marabraz",
        "text": "A Marabraz"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-a-marabraz",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/a-marabraz",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "a-marabraz",
        "text": "A Marabraz"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-institucional/flex-layout.col#footer-desktop-institucional/vtex.menu@2.x:menu#container-sections-institucional-items/menu-item#nossas-lojas": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#nossas-lojas",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-nossas-lojas",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/nossas-lojas",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "nossas-lojas",
        "text": "Nossas Lojas"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-nossas-lojas",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/nossas-lojas",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "nossas-lojas",
        "text": "Nossas Lojas"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-institucional/flex-layout.col#footer-desktop-institucional/vtex.menu@2.x:menu#container-sections-institucional-items/menu-item#politica-de-trocas-e-devolucoes": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#politica-de-trocas-e-devolucoes",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-politica-de-trocas-e-devolucoes",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/politica-de-trocas-e-devolucoes",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "politica-de-trocas-e-devolucoes",
        "text": "Política de Trocas e Devoluções"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-politica-de-trocas-e-devolucoes",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/politica-de-trocas-e-devolucoes",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "politica-de-trocas-e-devolucoes",
        "text": "Política de Trocas e Devoluções"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-institucional/flex-layout.col#footer-desktop-institucional/vtex.menu@2.x:menu#container-sections-institucional-items/menu-item#politica-de-privacidade": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#politica-de-privacidade",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-politica-de-privacidade",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/politica-de-privacidade",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "politica-de-privacidade",
        "text": "Política de Privacidade"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-politica-de-privacidade",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/politica-de-privacidade",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "politica-de-privacidade",
        "text": "Política de Privacidade"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-institucional/flex-layout.col#footer-desktop-institucional/vtex.menu@2.x:menu#container-sections-institucional-items/menu-item#termos-de-uso": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#termos-de-uso",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-termos-de-uso",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/termos-de-uso",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "termos-de-uso",
        "text": "Termos de Uso"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-termos-de-uso",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/termos-de-uso",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "termos-de-uso",
        "text": "Termos de Uso"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-institucional/flex-layout.col#footer-desktop-institucional/vtex.menu@2.x:menu#container-sections-institucional-items/menu-item#regras-do-site": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#regras-do-site",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-regras-do-site",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/regras-do-site",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "regras-do-site",
        "text": "Regras do Site"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-regras-do-site",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/regras-do-site",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "regras-do-site",
        "text": "Regras do Site"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-institucional/flex-layout.col#footer-desktop-institucional/vtex.menu@2.x:menu#container-sections-institucional-items/menu-item#blog-da-marabraz": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#blog-da-marabraz",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "xAxuiMm2kTk1tAKEdyoRda",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-blog-da-marabraz",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/blog-da-marabraz",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "blog-da-marabraz",
        "text": "Blog da Marabraz"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": " ",
      "highlight": false,
      "text": "",
      "blockClass": "link__footer"
    },
    "contentIds": [
      "xAxuiMm2kTk1tAKEdyoRda~ejyxDwCmNvp1KQM2kFyyyq"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-area-do-cliente/flex-layout.col#footer-desktop-area-do-cliente/vtex.menu@2.x:menu#container-sections-area-do-cliente-items/menu-item#minha-conta": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#minha-conta",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "mWJcrr6GeFrPjV74WW8Fun",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-minha-conta",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/minha-conta",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "minha-conta",
        "text": "Minha Conta"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "/account",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "minha-conta",
        "text": "Minha Conta"
      },
      "iconProps": {
        "id": null
      },
      "id": "footer-minha-conta",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "mWJcrr6GeFrPjV74WW8Fun~iEgQNpxoDdn32eJ8dNa491"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-area-do-cliente/flex-layout.col#footer-desktop-area-do-cliente/vtex.menu@2.x:menu#container-sections-area-do-cliente-items/menu-item#cadastro": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#cadastro",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "vu8HcugVLCKPBzMKvKuciL",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-cadastro",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/cadastro",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "cadastro",
        "text": "Cadastro"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "/login?returnUrl=%2Faccount",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "cadastro",
        "text": "Cadastro"
      },
      "iconProps": {
        "id": null
      },
      "id": "footer-cadastro",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "vu8HcugVLCKPBzMKvKuciL~bkR191ueicV9w9g6W5V3w5"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-area-do-cliente/flex-layout.col#footer-desktop-area-do-cliente/vtex.menu@2.x:menu#container-sections-area-do-cliente-items/menu-item#meus-pedidos": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#meus-pedidos",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "rBNsPcxCC8pcaLky5yMqqT",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-meus-pedidos",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/meus-pedidos",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "meus-pedidos",
        "text": "Meus Pedidos"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "/account#/orders",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "meus-pedidos",
        "text": "Meus Pedidos"
      },
      "iconProps": {
        "id": null
      },
      "id": "footer-meus-pedidos",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "rBNsPcxCC8pcaLky5yMqqT~s24aGyXgefKnUfKfRBS2zQ"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-area-do-cliente/flex-layout.col#footer-desktop-area-do-cliente/vtex.menu@2.x:menu#container-sections-area-do-cliente-items/menu-item#atendimento": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#atendimento",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "3mFUqH1tATZExfH6DyGoSk",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-atendimento",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/atendimento",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "atendimento",
        "text": "Atendimento"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "/duvidas-frequentes",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "atendimento",
        "text": "Atendimento"
      },
      "iconProps": {
        "id": null
      },
      "id": "footer-atendimento",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "3mFUqH1tATZExfH6DyGoSk~toZgvLVDfbNg6ntui8xwzN"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-area-do-cliente/flex-layout.col#footer-desktop-area-do-cliente/vtex.menu@2.x:menu#container-sections-area-do-cliente-items/menu-item#favoritos": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#favoritos",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "tVDELf95Q6dhVMsLXTDKkz",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-favoritos",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/favoritos",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "favoritos",
        "text": "Favoritos"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "/account#/wishlist",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "favoritos",
        "text": "Favoritos"
      },
      "iconProps": {
        "id": null
      },
      "id": "footer-favoritos",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "tVDELf95Q6dhVMsLXTDKkz~vJMVMWYdXsGpby5r27s957"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-especiais/flex-layout.col#footer-desktop-especiais/vtex.menu@2.x:menu#container-sections-especiais-items/menu-item#black-mara": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#black-mara",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "3d8DNJ59Ky5tku7pceztUQ",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-black-mara",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/black-mara",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "black-mara",
        "text": "Black Mara"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "/black-mara",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "black-mara",
        "text": "Black Mara"
      },
      "iconProps": {
        "id": null
      },
      "id": "footer-black-mara",
      "highlight": false,
      "text": "",
      "blockClass": "link__footer"
    },
    "contentIds": [
      "3d8DNJ59Ky5tku7pceztUQ~6ynoZv6w5XkArDT1dod1vy"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-especiais/flex-layout.col#footer-desktop-especiais/vtex.menu@2.x:menu#container-sections-especiais-items/menu-item#black-friday": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#black-friday",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-black-friday",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/black-friday",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "black-friday",
        "text": "Black Friday"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-black-friday",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/black-friday",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "black-friday",
        "text": "Black Friday"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-especiais/flex-layout.col#footer-desktop-especiais/vtex.menu@2.x:menu#container-sections-especiais-items/menu-item#cyber-monday": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#cyber-monday",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-cyber-monday",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/cyber-monday",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "cyber-monday",
        "text": "Cyber Monday"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-cyber-monday",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/cyber-monday",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "cyber-monday",
        "text": "Cyber Monday"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-especiais/flex-layout.col#footer-desktop-especiais/vtex.menu@2.x:menu#container-sections-especiais-items/menu-item#limpa-estoque": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#limpa-estoque",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-limpa-estoque",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/limpa-estoque",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "limpa-estoque",
        "text": "Limpa Estoque"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "link__footer",
      "id": "footer-limpa-estoque",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/limpa-estoque",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "limpa-estoque",
        "text": "Limpa Estoque"
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-especiais/flex-layout.col#footer-desktop-especiais/vtex.menu@2.x:menu#container-sections-especiais-items/menu-item#compra-por-estilo": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#compra-por-estilo",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "7WcFnvhcgfwTe6ASZ4kYod",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-compra-por-estilo",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/compra-por-estilo",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "compra-por-estilo",
        "text": "Compra por Estilo"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "7WcFnvhcgfwTe6ASZ4kYod~nTxE9R6AC77hzZAa3yxQj2"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-especiais/flex-layout.col#footer-desktop-especiais/vtex.menu@2.x:menu#container-sections-especiais-items/menu-item#mias-buscados": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#mias-buscados",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "tHqwDuyiTffYP3UNUBZcyH",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-mias-buscados",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/mias-buscados",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "mias-buscados",
        "text": "Mias Buscados"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "tHqwDuyiTffYP3UNUBZcyH~eHpdoQmt6q9NHC4torpgkv"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-especiais/flex-layout.col#footer-desktop-especiais/vtex.menu@2.x:menu#container-sections-especiais-items/menu-item#mapa-do-site": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#mapa-do-site",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "7NWMS5E3t4vrRiiT4ALhvw",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-mapa-do-site",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/mapa-do-site",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "mapa-do-site",
        "text": "Mapa do Site"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "7NWMS5E3t4vrRiiT4ALhvw~RFphdnFPpDE5yHoemSXHp"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-servicos/flex-layout.col#footer-desktop-servicos/vtex.menu@2.x:menu#container-sections-servicos-items/menu-item#cupons-de-desconto": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#cupons-de-desconto",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "cJ3XjmHyT5o1mYydcqFSab",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-cupons-de-desconto",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/cupons-de-desconto",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "cupons-de-desconto",
        "text": "Cupons de Desconto"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "additionalDef": "none",
      "textType": "t-body",
      "orientation": "horizontal",
      "blockClass": "link__footer"
    },
    "contentIds": [
      "cJ3XjmHyT5o1mYydcqFSab~w7z2cwk3pc24NiMX8hL3RT"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-servicos/flex-layout.col#footer-desktop-servicos/vtex.menu@2.x:menu#container-sections-servicos-items/menu-item#serviço-de-montagem": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#serviço-de-montagem",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "kUVz45eLYywmbHv5AjhDPH",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-serviço-de-montagem",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/serviço-de-montagem",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "serviço-de-montagem",
        "text": "Serviço de Montagem"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "kUVz45eLYywmbHv5AjhDPH~iH8wwSVnzCjrdTRGqR4WkM"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-servicos/flex-layout.col#footer-desktop-servicos/vtex.menu@2.x:menu#container-sections-servicos-items/menu-item#garantia-estendida": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#garantia-estendida",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "tviUG6dvmuXPBxc3GcfP3B",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-garantia-estendida",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/garantia-estendida",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "garantia-estendida",
        "text": "Garantia Estendida"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "tviUG6dvmuXPBxc3GcfP3B~tVoDPtoPvsAM9ioGszz9St"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-servicos/flex-layout.col#footer-desktop-servicos/vtex.menu@2.x:menu#container-sections-servicos-items/menu-item#soluções-corporativas": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#soluções-corporativas",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "m5hmGMeTNGXKXntMZaigfY",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-soluções-corporativas",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/soluções-corporativas",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "soluções-corporativas",
        "text": "Soluções Corporativas"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "m5hmGMeTNGXKXntMZaigfY~ovSDr1EYPVRGsJiR8sgNTu"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-servicos/flex-layout.col#footer-desktop-servicos/vtex.menu@2.x:menu#container-sections-servicos-items/menu-item#programa-de-afiliados": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#programa-de-afiliados",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "rT6mB3H1caSmPaVmZAX7YC",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-programa-de-afiliados",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/programa-de-afiliados",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "programa-de-afiliados",
        "text": "Programa de Afiliados"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "rT6mB3H1caSmPaVmZAX7YC~i8fMMttnpWN8JNqjJyMMVW"
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#footer-desktop-servicos/flex-layout.col#footer-desktop-servicos/vtex.menu@2.x:menu#container-sections-servicos-items/menu-item#auxilio-emergencial": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu-item#auxilio-emergencial",
    "blocks": [],
    "component": "vtex.menu@2.34.25/MenuItem",
    "composition": "children",
    "contentMapId": "wy2JckTsWwXEd77c2KsMrv",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.menu@2.x:menu-item"
    ],
    "preview": null,
    "props": {
      "blockClass": "link__footer",
      "id": "footer-auxilio-emergencial",
      "type": "custom",
      "highlight": false,
      "itemProps": {
        "href": "/marketplace",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "auxilio-emergencial",
        "text": "Marketplace"
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "type": "custom",
      "itemProps": {
        "href": "",
        "type": "internal",
        "noFollow": false,
        "tagTitle": "",
        "text": ""
      },
      "iconProps": {
        "id": null
      },
      "id": "",
      "__editorItemTitle": "",
      "highlight": false,
      "blockClass": "link__footer"
    },
    "contentIds": [
      "wy2JckTsWwXEd77c2KsMrv~e8U5oNLfF33XGyxVzZPs2Y"
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/icon-expand": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-icons@0.x:icon-expand",
    "blocks": [],
    "component": "vtex.store-icons@0.18.0/IconExpand",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-icons@0.x:icon-expand"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
        "extensionPointId": "modal-header#only-close-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
        "extensionPointId": "flex-layout.row#quickview-content",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/Modal",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
        "extensionPointId": "product-list-price#shelf",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "render": "server",
    "title": "Container List Price",
    "track": [],
    "content": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
        "extensionPointId": "product-selling-price#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "render": "server",
    "title": "Container Preço De Venda E Economia",
    "track": [],
    "content": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/product-installments#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/icon-expand": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-icons@0.x:icon-expand",
    "blocks": [],
    "component": "vtex.store-icons@0.18.0/IconExpand",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-icons@0.x:icon-expand"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
        "extensionPointId": "modal-header#only-close-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
        "extensionPointId": "flex-layout.row#quickview-content",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/Modal",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
        "extensionPointId": "product-list-price#shelf",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "render": "server",
    "title": "Container List Price",
    "track": [],
    "content": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
        "extensionPointId": "product-selling-price#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "render": "server",
    "title": "Container Preço De Venda E Economia",
    "track": [],
    "content": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/product-installments#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/icon-expand": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-icons@0.x:icon-expand",
    "blocks": [],
    "component": "vtex.store-icons@0.18.0/IconExpand",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-icons@0.x:icon-expand"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
        "extensionPointId": "modal-header#only-close-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
        "extensionPointId": "flex-layout.row#quickview-content",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/Modal",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
        "extensionPointId": "product-list-price#shelf",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "render": "server",
    "title": "Container List Price",
    "track": [],
    "content": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
        "extensionPointId": "product-selling-price#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "render": "server",
    "title": "Container Preço De Venda E Economia",
    "track": [],
    "content": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/product-installments#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/icon-expand": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-icons@0.x:icon-expand",
    "blocks": [],
    "component": "vtex.store-icons@0.18.0/IconExpand",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-icons@0.x:icon-expand"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
        "extensionPointId": "modal-header#only-close-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
        "extensionPointId": "flex-layout.row#quickview-content",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/Modal",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
        "extensionPointId": "product-list-price#shelf",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "render": "server",
    "title": "Container List Price",
    "track": [],
    "content": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
        "extensionPointId": "product-selling-price#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "render": "server",
    "title": "Container Preço De Venda E Economia",
    "track": [],
    "content": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/product-installments#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/icon-expand": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-icons@0.x:icon-expand",
    "blocks": [],
    "component": "vtex.store-icons@0.18.0/IconExpand",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-icons@0.x:icon-expand"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
        "extensionPointId": "modal-header#only-close-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
        "extensionPointId": "flex-layout.row#quickview-content",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/Modal",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
        "extensionPointId": "product-list-price#shelf",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "render": "server",
    "title": "Container List Price",
    "track": [],
    "content": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
        "extensionPointId": "product-selling-price#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "render": "server",
    "title": "Container Preço De Venda E Economia",
    "track": [],
    "content": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/product-installments#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/icon-expand": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-icons@0.x:icon-expand",
    "blocks": [],
    "component": "vtex.store-icons@0.18.0/IconExpand",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-icons@0.x:icon-expand"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
        "extensionPointId": "modal-header#only-close-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
        "extensionPointId": "flex-layout.row#quickview-content",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/Modal",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
        "extensionPointId": "product-list-price#shelf",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "render": "server",
    "title": "Container List Price",
    "track": [],
    "content": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
        "extensionPointId": "product-selling-price#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "render": "server",
    "title": "Container Preço De Venda E Economia",
    "track": [],
    "content": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/product-installments#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/icon-expand": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-icons@0.x:icon-expand",
    "blocks": [],
    "component": "vtex.store-icons@0.18.0/IconExpand",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-icons@0.x:icon-expand"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-layout#quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
        "extensionPointId": "modal-header#only-close-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
        "extensionPointId": "flex-layout.row#quickview-content",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.modal-layout@0.14.0/Modal",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-list-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
        "extensionPointId": "product-list-price#shelf",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "render": "server",
    "title": "Container List Price",
    "track": [],
    "content": {
      "blockClass": "container__list-price",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-summary-selling-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
        "extensionPointId": "product-selling-price#product-summary",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "render": "server",
    "title": "Container Preço De Venda E Economia",
    "track": [],
    "content": {
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "blockClass": "container__selling-price-savings"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/product-installments#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "message": "vtex.product-price@1.x::store/installments.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:menu#central-attendance",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#central-attendance",
        "extensionPointId": "flex-layout.row#central-attendance",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.menu@2.34.25/Menu",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.menu@2.x:menu"
    ],
    "preview": null,
    "props": {
      "orientation": "vertical",
      "blockClass": "menu-central-attendance",
      "additionalDef": "none",
      "textType": "t-body"
    },
    "render": "server",
    "track": [],
    "content": {
      "orientation": "vertical",
      "blockClass": "menu-central-attendance",
      "additionalDef": "none",
      "textType": "t-body"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-empty-state/flex-layout.row#empty-state/flex-layout.col#empty-state": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#empty-state",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#minicart-empty-title",
        "extensionPointId": "rich-text#minicart-empty-title",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#minicart-empty-text",
        "extensionPointId": "rich-text#minicart-empty-text",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "empty-state",
      "horizontalAlign": "center",
      "verticalAlign": "middle",
      "rowGap": 5
    },
    "render": "lazy",
    "title": "Carrinho de compras vazio",
    "track": [],
    "content": {
      "blockClass": "empty-state",
      "horizontalAlign": "center",
      "verticalAlign": "middle",
      "rowGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-content-mobile",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#minicartItem",
        "extensionPointId": "flex-layout.row#minicartItem",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-list@0.36.0/ProductList",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-list@0.x:product-list-content-mobile"
    ],
    "preview": null,
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/flex-layout.row#minicart-footer/flex-layout.col#minicart-footer/shipping-minicart": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.shipping-minicart@0.x:shipping-minicart",
    "blocks": [],
    "component": "lojasmarabraz.shipping-minicart@0.0.15/ShippingWrapper",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.shipping-minicart@0.x:shipping-minicart"
    ],
    "preview": null,
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/flex-layout.row#minicart-footer/flex-layout.col#minicart-footer/minicart-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:minicart-summary",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:checkout-summary.compact#minicart",
        "extensionPointId": "checkout-summary",
        "children": false,
        "blockRole": "block"
      }
    ],
    "component": "vtex.minicart@2.65.0/Summary",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.minicart@2.x:minicart-summary"
    ],
    "preview": null,
    "props": {
      "blockClass": "minicart-summary"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "blockClass": "minicart-summary"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/flex-layout.row#minicart-footer/flex-layout.col#minicart-footer/minicart-checkout-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.minicart@2.x:minicart-checkout-button",
    "blocks": [],
    "component": "vtex.minicart@2.65.0/CheckoutButton",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.minicart@2.x:minicart-checkout-button"
    ],
    "preview": null,
    "props": {
      "finishShoppingButtonLink": "/checkout/#/cart"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "finishShoppingButtonLink": "/checkout/#/cart"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/flex-layout.row#minicart-footer/flex-layout.col#minicart-footer/drawer-close-button#close-minicart": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:drawer-close-button#close-minicart",
    "blocks": [],
    "component": "vtex.store-drawer@0.16.2/DrawerCloseButton",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-drawer@0.x:drawer-close-button"
    ],
    "preview": null,
    "props": {
      "text": "Continuar comprando",
      "blockClass": "continue-buy"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "text": "Continuar comprando",
      "blockClass": "continue-buy"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#container-footer-text-welcome/flex-layout.col#container-footer-text-welcome/flex-layout.row#footer-container-texts/flex-layout.col#footer-container-texts/rich-text#footer-title-welcome-1": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-title-welcome-1",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "title__footer-welcome",
        "title__seja-bem-vindo-welcome"
      ],
      "text": "Seja bem-vindo(a)"
    },
    "render": "server",
    "title": "Titulo 1",
    "track": [],
    "content": {
      "blockClass": [
        "title__footer-welcome",
        "title__seja-bem-vindo-welcome"
      ],
      "text": "Seja bem-vindo(a)"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#container-footer-text-welcome/flex-layout.col#container-footer-text-welcome/flex-layout.row#footer-container-texts/flex-layout.col#footer-container-texts/rich-text#footer-text-welcome-1": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-text-welcome-1",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "text__footer-welcome",
        "text__a-sua-loja-especializada-em-imoveis-welcome"
      ],
      "text": "A sua loja especialista em móveis!"
    },
    "render": "server",
    "title": "Texto 1",
    "track": [],
    "content": {
      "blockClass": [
        "text__footer-welcome",
        "text__a-sua-loja-especializada-em-imoveis-welcome"
      ],
      "text": "A sua loja especialista em móveis!"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#container-footer-text-welcome/flex-layout.col#container-footer-text-welcome/flex-layout.row#footer-container-texts/flex-layout.col#footer-container-texts/rich-text#footer-title-welcome-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-title-welcome-2",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "title__footer-welcome",
        "title__atendimento-welcome"
      ],
      "text": "Atendimento"
    },
    "render": "server",
    "title": "Titulo 2",
    "track": [],
    "content": {
      "blockClass": [
        "title__footer-welcome",
        "title__atendimento-welcome"
      ],
      "text": "Atendimento"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$after_footer/footer-layout.desktop/flex-layout.row#footer-desktop-container-institutional-links/flex-layout.col#container-footer-institucional-links-desktop/flex-layout.row#container-footer-institucional-links-content/flex-layout.row#container-footer-text-welcome/flex-layout.col#container-footer-text-welcome/flex-layout.row#footer-container-texts/flex-layout.col#footer-container-texts/rich-text#footer-text-welcome-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#footer-text-welcome-2",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "contentMapId": "eQ5zkQJpQsR1odyPW4LztY",
    "hasContentSchema": true,
    "hydration": "on-view",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "text__footer-welcome",
        "text__horarios-atendimento-welcome"
      ],
      "text": "Horário de Atendimento \nSegunda a Sexta das 08:00h às 17:30h \nTelevendas: 0800-7744-447 \nSAC: São Paulo Capital (11) 4447-9000\nInterior e Litoral 0300-777-7001"
    },
    "render": "server",
    "title": "Texto 2",
    "track": [],
    "content": {
      "text": "Horário de Atendimento \nSegunda a Sexta das 08:00h às 17:30h \nSAC: São Paulo Capital (11) 4447-9000\nInterior e Litoral 0300-777-7001",
      "blockClass": [
        "text__footer-welcome",
        "text__horarios-atendimento-welcome"
      ]
    },
    "contentIds": [
      "eQ5zkQJpQsR1odyPW4LztY~xiLNGHkSFYsDmgRteEGRzD"
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/modal-header#only-close-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
    "blocks": [],
    "component": "vtex.modal-layout@0.14.0/ModalHeader",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-header"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
        "extensionPointId": "flex-layout.col#stack-desktop-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
        "extensionPointId": "flex-layout.col#right-side-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price/product-list-price#shelf": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings/product-selling-price#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/modal-header#only-close-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
    "blocks": [],
    "component": "vtex.modal-layout@0.14.0/ModalHeader",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-header"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
        "extensionPointId": "flex-layout.col#stack-desktop-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
        "extensionPointId": "flex-layout.col#right-side-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price/product-list-price#shelf": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings/product-selling-price#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/modal-header#only-close-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
    "blocks": [],
    "component": "vtex.modal-layout@0.14.0/ModalHeader",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-header"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
        "extensionPointId": "flex-layout.col#stack-desktop-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
        "extensionPointId": "flex-layout.col#right-side-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price/product-list-price#shelf": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings/product-selling-price#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/modal-header#only-close-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
    "blocks": [],
    "component": "vtex.modal-layout@0.14.0/ModalHeader",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-header"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
        "extensionPointId": "flex-layout.col#stack-desktop-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
        "extensionPointId": "flex-layout.col#right-side-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price/product-list-price#shelf": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings/product-selling-price#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/modal-header#only-close-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
    "blocks": [],
    "component": "vtex.modal-layout@0.14.0/ModalHeader",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-header"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
        "extensionPointId": "flex-layout.col#stack-desktop-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
        "extensionPointId": "flex-layout.col#right-side-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price/product-list-price#shelf": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings/product-selling-price#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/modal-header#only-close-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
    "blocks": [],
    "component": "vtex.modal-layout@0.14.0/ModalHeader",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-header"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
        "extensionPointId": "flex-layout.col#stack-desktop-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
        "extensionPointId": "flex-layout.col#right-side-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price/product-list-price#shelf": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings/product-selling-price#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/modal-header#only-close-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:modal-header#only-close-button",
    "blocks": [],
    "component": "vtex.modal-layout@0.14.0/ModalHeader",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.modal-layout@0.x:modal-header"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickview"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickview"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#quickview-content",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
        "extensionPointId": "flex-layout.col#stack-desktop-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
        "extensionPointId": "flex-layout.col#right-side-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "quickviewMainRow",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-list-price/product-list-price#shelf": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#shelf",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-shelf",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/flex-layout.row#product-summary-container-prices/flex-layout.col#product-summary-container-prices/flex-layout.row#product-summary-selling-price-savings/product-selling-price#product-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#product-summary",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#central-attendance",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#col-central-attendance-1",
        "extensionPointId": "flex-layout.col#col-central-attendance-1",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#col-central-attendance-2",
        "extensionPointId": "flex-layout.col#col-central-attendance-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#col-central-attendance-3",
        "extensionPointId": "flex-layout.col#col-central-attendance-3",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-central-attendance",
      "preventHorizontalStretch": true,
      "colGap": 3
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-central-attendance",
      "preventHorizontalStretch": true,
      "colGap": 3
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-empty-state/flex-layout.row#empty-state/flex-layout.col#empty-state/rich-text#minicart-empty-title": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#minicart-empty-title",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "minicart-default-empty-state",
      "text": "Seu carrinho está vazio!",
      "textAlignment": "CENTER",
      "textPosition": "CENTER"
    },
    "render": "lazy",
    "title": "titulo minicart vazio",
    "track": [],
    "content": {
      "blockClass": "minicart-default-empty-state",
      "text": "Seu carrinho está vazio!",
      "textAlignment": "CENTER",
      "textPosition": "CENTER"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-empty-state/flex-layout.row#empty-state/flex-layout.col#empty-state/rich-text#minicart-empty-text": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#minicart-empty-text",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "minicart-empty-text",
      "text": "Navegue pelo site e adicione os produtos que deseja.",
      "textAlignment": "CENTER",
      "textPosition": "CENTER"
    },
    "render": "lazy",
    "title": "texto minicart vazio",
    "track": [],
    "content": {
      "blockClass": "minicart-empty-text",
      "text": "Navegue pelo site e adicione os produtos que deseja.",
      "textAlignment": "CENTER",
      "textPosition": "CENTER"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#minicartItem",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#imageproduct",
        "extensionPointId": "flex-layout.col#imageproduct",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#infosProduct",
        "extensionPointId": "flex-layout.col#infosProduct",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#closebutton",
        "extensionPointId": "flex-layout.col#closebutton",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "minicart-item"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "blockClass": "minicart-item"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/flex-layout.row#minicart-footer/flex-layout.col#minicart-footer/minicart-summary/checkout-summary": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:checkout-summary.compact#minicart",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:summary-totalizers#minicart",
        "extensionPointId": "summary-totalizers#minicart",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.checkout-summary@0.22.0/SummarySmall",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.checkout-summary@0.x:checkout-summary.compact",
      "vtex.checkout-summary@0.x:checkout-summary"
    ],
    "preview": null,
    "props": {
      "blockClass": "summary-compact",
      "totalizersToShow": [
        "Items",
        "Discounts",
        "Shipping"
      ],
      "title": "vtex.checkout-summary@0.x::store/checkout-summary.Summary"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "blockClass": "summary-compact",
      "totalizersToShow": [
        "Items",
        "Discounts",
        "Shipping"
      ],
      "title": "vtex.checkout-summary@0.x::store/checkout-summary.Summary"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
        "extensionPointId": "stack-layout#pdp-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
        "extensionPointId": "flex-layout.row#row-product-available-1-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
        "extensionPointId": "flex-layout.row#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "render": "server",
    "title": "Container Informações Produto",
    "track": [],
    "content": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags/product-highlight-text#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags/product-highlight-text#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
        "extensionPointId": "stack-layout#pdp-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
        "extensionPointId": "flex-layout.row#row-product-available-1-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
        "extensionPointId": "flex-layout.row#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "render": "server",
    "title": "Container Informações Produto",
    "track": [],
    "content": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags/product-highlight-text#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags/product-highlight-text#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
        "extensionPointId": "stack-layout#pdp-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
        "extensionPointId": "flex-layout.row#row-product-available-1-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
        "extensionPointId": "flex-layout.row#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "render": "server",
    "title": "Container Informações Produto",
    "track": [],
    "content": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags/product-highlight-text#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags/product-highlight-text#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
        "extensionPointId": "stack-layout#pdp-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
        "extensionPointId": "flex-layout.row#row-product-available-1-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
        "extensionPointId": "flex-layout.row#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "render": "server",
    "title": "Container Informações Produto",
    "track": [],
    "content": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags/product-highlight-text#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags/product-highlight-text#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
        "extensionPointId": "stack-layout#pdp-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
        "extensionPointId": "flex-layout.row#row-product-available-1-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
        "extensionPointId": "flex-layout.row#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "render": "server",
    "title": "Container Informações Produto",
    "track": [],
    "content": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags/product-highlight-text#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags/product-highlight-text#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
        "extensionPointId": "stack-layout#pdp-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
        "extensionPointId": "flex-layout.row#row-product-available-1-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
        "extensionPointId": "flex-layout.row#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "render": "server",
    "title": "Container Informações Produto",
    "track": [],
    "content": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags/product-highlight-text#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags/product-highlight-text#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#stack-desktop-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
        "extensionPointId": "stack-layout#pdp-quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "width": "48%",
      "rowGap": 0,
      "blockClass": "container__product-image-col"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#right-side-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
        "extensionPointId": "flex-layout.row#row-product-available-1-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
        "extensionPointId": "flex-layout.row#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "render": "server",
    "title": "Container Informações Produto",
    "track": [],
    "content": {
      "preventVerticalStretch": true,
      "blockClass": [
        "container__info-product",
        "container__quickview-content"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags/product-highlight-text#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags/product-highlight-text#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
    "blocks": [],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightText",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-text"
    ],
    "preview": null,
    "props": {
      "message": "{highlightName}"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{highlightName}"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-1": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#col-central-attendance-1",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:image#central-attendance-1",
        "extensionPointId": "image#central-attendance-1",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#central-attendance-1",
        "extensionPointId": "rich-text#central-attendance-1",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-central-attendance"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-central-attendance"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#col-central-attendance-2",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:image#central-attendance-2",
        "extensionPointId": "image#central-attendance-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#central-attendance-2",
        "extensionPointId": "rich-text#central-attendance-2",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-central-attendance"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-central-attendance"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-3": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#col-central-attendance-3",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:image#central-attendance-3",
        "extensionPointId": "image#central-attendance-3",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#central-attendance-3",
        "extensionPointId": "rich-text#central-attendance-3",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-central-attendance"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-central-attendance"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#imageproduct": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#imageproduct",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-image",
        "extensionPointId": "product-list-image",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "25%",
      "blockClass": "imageproduct"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "width": "25%",
      "blockClass": "imageproduct"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#infosProduct": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#infosProduct",
    "blocks": [
      {
        "blockId": "vtex.product-list@0.x:product-name",
        "extensionPointId": "vtex.product-list:product-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-list@0.x:price",
        "extensionPointId": "price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:quantity-selector",
        "extensionPointId": "quantity-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "65%",
      "blockClass": "infosProduct"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "width": "65%",
      "blockClass": "infosProduct"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#closebutton": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#closebutton",
    "blocks": [
      {
        "blockId": "vtex.product-list@0.x:remove-button",
        "extensionPointId": "remove-button",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "width": "10%",
      "blockClass": "closebutton"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "width": "10%",
      "blockClass": "closebutton"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/flex-layout.row#minicart-footer/flex-layout.col#minicart-footer/minicart-summary/checkout-summary/summary-totalizers#minicart": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:summary-totalizers#minicart",
    "blocks": [],
    "component": "vtex.checkout-summary@0.22.0/SummaryTotalizers",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.checkout-summary@0.x:summary-totalizers"
    ],
    "preview": {
      "type": "text",
      "height": {
        "desktop": {
          "defaultValue": 108
        },
        "mobile": {
          "defaultValue": 108
        }
      },
      "fullWidth": true,
      "options": {
        "padding": 0,
        "fontSize": 24,
        "paragraph": false
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "blockClass": "totalizers",
      "showTotal": true,
      "showDeliveryTotal": true
    },
    "render": "lazy",
    "track": [],
    "content": {
      "blockClass": "totalizers",
      "showTotal": true,
      "showDeliveryTotal": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
        "extensionPointId": "flex-layout.row#product-image-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
        "extensionPointId": "product-bookmark",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
        "extensionPointId": "product-specification-badges",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.stack-layout@0.1.0/index",
    "composition": "children",
    "hasContentSchema": false,
    "implements": [
      "vtex.stack-layout@0.x:stack-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-image-stack"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__product-image-stack"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
        "extensionPointId": "flex-layout.row#container-quickview-flags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
        "extensionPointId": "flex-layout.row#product-name-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
        "extensionPointId": "flex-layout.row#seller-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
        "extensionPointId": "flex-layout.row#container-quickview-sku-selector",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
        "extensionPointId": "flex-layout.row#share",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
        "extensionPointId": "flex-layout.col#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
        "extensionPointId": "flex-layout.row#product-image-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
        "extensionPointId": "product-bookmark",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
        "extensionPointId": "product-specification-badges",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.stack-layout@0.1.0/index",
    "composition": "children",
    "hasContentSchema": false,
    "implements": [
      "vtex.stack-layout@0.x:stack-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-image-stack"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__product-image-stack"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
        "extensionPointId": "flex-layout.row#container-quickview-flags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
        "extensionPointId": "flex-layout.row#product-name-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
        "extensionPointId": "flex-layout.row#seller-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
        "extensionPointId": "flex-layout.row#container-quickview-sku-selector",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
        "extensionPointId": "flex-layout.row#share",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
        "extensionPointId": "flex-layout.col#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
        "extensionPointId": "flex-layout.row#product-image-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
        "extensionPointId": "product-bookmark",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
        "extensionPointId": "product-specification-badges",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.stack-layout@0.1.0/index",
    "composition": "children",
    "hasContentSchema": false,
    "implements": [
      "vtex.stack-layout@0.x:stack-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-image-stack"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__product-image-stack"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
        "extensionPointId": "flex-layout.row#container-quickview-flags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
        "extensionPointId": "flex-layout.row#product-name-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
        "extensionPointId": "flex-layout.row#seller-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
        "extensionPointId": "flex-layout.row#container-quickview-sku-selector",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
        "extensionPointId": "flex-layout.row#share",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
        "extensionPointId": "flex-layout.col#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
        "extensionPointId": "flex-layout.row#product-image-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
        "extensionPointId": "product-bookmark",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
        "extensionPointId": "product-specification-badges",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.stack-layout@0.1.0/index",
    "composition": "children",
    "hasContentSchema": false,
    "implements": [
      "vtex.stack-layout@0.x:stack-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-image-stack"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__product-image-stack"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
        "extensionPointId": "flex-layout.row#container-quickview-flags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
        "extensionPointId": "flex-layout.row#product-name-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
        "extensionPointId": "flex-layout.row#seller-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
        "extensionPointId": "flex-layout.row#container-quickview-sku-selector",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
        "extensionPointId": "flex-layout.row#share",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
        "extensionPointId": "flex-layout.col#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
        "extensionPointId": "flex-layout.row#product-image-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
        "extensionPointId": "product-bookmark",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
        "extensionPointId": "product-specification-badges",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.stack-layout@0.1.0/index",
    "composition": "children",
    "hasContentSchema": false,
    "implements": [
      "vtex.stack-layout@0.x:stack-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-image-stack"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__product-image-stack"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
        "extensionPointId": "flex-layout.row#container-quickview-flags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
        "extensionPointId": "flex-layout.row#product-name-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
        "extensionPointId": "flex-layout.row#seller-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
        "extensionPointId": "flex-layout.row#container-quickview-sku-selector",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
        "extensionPointId": "flex-layout.row#share",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
        "extensionPointId": "flex-layout.col#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
        "extensionPointId": "flex-layout.row#product-image-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
        "extensionPointId": "product-bookmark",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
        "extensionPointId": "product-specification-badges",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.stack-layout@0.1.0/index",
    "composition": "children",
    "hasContentSchema": false,
    "implements": [
      "vtex.stack-layout@0.x:stack-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-image-stack"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__product-image-stack"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
        "extensionPointId": "flex-layout.row#container-quickview-flags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
        "extensionPointId": "flex-layout.row#product-name-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
        "extensionPointId": "flex-layout.row#seller-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
        "extensionPointId": "flex-layout.row#container-quickview-sku-selector",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
        "extensionPointId": "flex-layout.row#share",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
        "extensionPointId": "flex-layout.col#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:stack-layout#pdp-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
        "extensionPointId": "flex-layout.row#product-image-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
        "extensionPointId": "product-bookmark",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
        "extensionPointId": "product-specification-badges",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.stack-layout@0.1.0/index",
    "composition": "children",
    "hasContentSchema": false,
    "implements": [
      "vtex.stack-layout@0.x:stack-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-image-stack"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__product-image-stack"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-1-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
        "extensionPointId": "flex-layout.row#container-quickview-flags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
        "extensionPointId": "flex-layout.row#product-name-quickview",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
        "extensionPointId": "flex-layout.row#seller-name",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
        "extensionPointId": "flex-layout.row#container-quickview-sku-selector",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
        "extensionPointId": "flex-layout.row#share",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "row-product-available",
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
        "extensionPointId": "flex-layout.col#container-quickview-last",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-row"
      ],
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-1/image#central-attendance-1": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:image#central-attendance-1",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Image",
    "composition": "blocks",
    "contentMapId": "mxuWSJFrUwerexk61NtRTx",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:image"
    ],
    "preview": null,
    "props": {
      "blockClass": "central-attendance",
      "src": "/arquivos/televendas.png",
      "link": {
        "url": "/duvidas-frequentes"
      }
    },
    "render": "server",
    "title": "Header Menu Imagem 01 Desk",
    "track": [],
    "content": {
      "analyticsProperties": "none",
      "src": "https://lojasmarabraz.vtexassets.com/assets/vtex.file-manager-graphql/images/54181aa7-ef39-4de2-a196-47183d0dd406___5ccfc33de3d158cf86d3fd668a82b6a2.png",
      "link": {
        "attributeNofollow": false,
        "url": "/login?returnUrl=%2Faccount%23%2Forders"
      },
      "alt": "",
      "title": "",
      "text": "",
      "blockClass": "central-attendance"
    },
    "contentIds": [
      "mxuWSJFrUwerexk61NtRTx~cpgM4LAsZhL6B5FyrVvzQb"
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-1/rich-text#central-attendance-1": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#central-attendance-1",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "contentMapId": "gLUTrxEPSnRDJmw6b3GUHi",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-central-attendance",
      "text": "[Central de\nTelevendas](/)"
    },
    "render": "server",
    "title": "Header Menu Texto 01 Desk",
    "track": [],
    "content": {
      "text": "[Meus Pedidos](/login?returnUrl=/account)",
      "src": "",
      "link": {
        "attributeNofollow": false
      },
      "alt": "",
      "title": "",
      "analyticsProperties": "none",
      "blockClass": "text-central-attendance"
    },
    "contentIds": [
      "gLUTrxEPSnRDJmw6b3GUHi~aGKAJAgxwwo8LuivJTiVCr"
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-2/image#central-attendance-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:image#central-attendance-2",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Image",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:image"
    ],
    "preview": null,
    "props": {
      "blockClass": "central-attendance",
      "src": "/arquivos/ourstore.png",
      "link": {
        "url": "/nossas-lojas",
        "attributeNofollow": false
      },
      "alt": "",
      "title": "",
      "analyticsProperties": "none"
    },
    "render": "server",
    "title": "Header Menu Imagem 02 Desk",
    "track": [],
    "content": {
      "blockClass": "central-attendance",
      "src": "/arquivos/ourstore.png",
      "link": {
        "url": "/nossas-lojas",
        "attributeNofollow": false
      },
      "alt": "",
      "title": "",
      "analyticsProperties": "none"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-2/rich-text#central-attendance-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#central-attendance-2",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "contentMapId": "3jfcbBeSgG4FisYCK1UHNh",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-central-attendance",
      "text": "[Nossas\nLojas](/nossas-lojas)"
    },
    "render": "server",
    "title": "Header Menu Texto 02 Desk",
    "track": [],
    "content": {
      "text": "[Nossas Lojas](/nossas-lojas)",
      "blockClass": "text-central-attendance"
    },
    "contentIds": [
      "3jfcbBeSgG4FisYCK1UHNh~6JpBX7USU7SNp4VwJpuYwQ"
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-3/image#central-attendance-3": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:image#central-attendance-3",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Image",
    "composition": "blocks",
    "contentMapId": "vsfy497zWmah8taayNcWDu",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:image"
    ],
    "preview": null,
    "props": {
      "blockClass": "central-attendance",
      "src": "/arquivos/central-atendimento.png",
      "link": {
        "url": "/fale-conosco"
      }
    },
    "render": "server",
    "title": "Header Menu Imagem 03 Desk",
    "track": [],
    "content": {
      "analyticsProperties": "none",
      "src": "/arquivos/central-atendimento.png",
      "link": {
        "attributeNofollow": false,
        "url": "/duvidas-frequentes"
      },
      "alt": "",
      "title": "",
      "text": "",
      "blockClass": "central-attendance"
    },
    "contentIds": [
      "vsfy497zWmah8taayNcWDu~iiRAxhzispAuyoGGfbnuNn"
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/flex-layout.row#central-attendance-menu/vtex.menu@2.x:menu#central-attendance-menu/menu-item#central-attendance/submenu/vtex.menu@2.x:menu#central-attendance/flex-layout.row#central-attendance/flex-layout.col#col-central-attendance-3/rich-text#central-attendance-3": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#central-attendance-3",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "contentMapId": "3MfkbQmGx2QeNSTeQep1Cf",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-central-attendance",
      "text": "[Central de\nAtendimento](/)"
    },
    "render": "server",
    "title": "Header Menu Texto 03 Desk",
    "track": [],
    "content": {
      "text": "[Central de Atendimento](/duvidas-frequentes)",
      "src": "",
      "link": {
        "attributeNofollow": false
      },
      "alt": "",
      "title": "",
      "analyticsProperties": "none",
      "blockClass": "text-central-attendance"
    },
    "contentIds": [
      "3MfkbQmGx2QeNSTeQep1Cf~beoDGB5XD2USGoKm562uma"
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#imageproduct/product-list-image": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-image",
    "blocks": [],
    "component": "vtex.product-list@0.36.0/Image",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-list@0.x:product-list-image"
    ],
    "preview": {
      "type": "box",
      "height": {
        "desktop": {
          "defaultValue": 96
        },
        "mobile": {
          "defaultValue": 96
        }
      },
      "width": {
        "desktop": {
          "defaultValue": 96
        },
        "mobile": {
          "defaultValue": 96
        }
      },
      "options": {
        "padding": 0,
        "minWidth": 96
      }
    },
    "props": {
      "blockClass": "product-image"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "blockClass": "product-image"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#infosProduct/vtex.product-list:product-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-list@0.x:product-name",
    "blocks": [],
    "component": "vtex.product-list@0.36.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-list@0.x:product-name"
    ],
    "preview": {
      "type": "box",
      "height": {
        "desktop": {
          "defaultValue": 30
        },
        "mobile": {
          "defaultValue": 30
        }
      },
      "width": {
        "desktop": {
          "defaultValue": 140
        },
        "mobile": {
          "defaultValue": 140
        }
      },
      "options": {
        "padding": 0
      }
    },
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#infosProduct/price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-list@0.x:price",
    "blocks": [],
    "component": "vtex.product-list@0.36.0/Price",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-list@0.x:price"
    ],
    "preview": {
      "type": "box",
      "height": {
        "desktop": {
          "defaultValue": 35
        },
        "mobile": {
          "defaultValue": 35
        }
      },
      "width": {
        "desktop": {
          "defaultValue": 90
        },
        "mobile": {
          "defaultValue": 90
        }
      },
      "options": {
        "padding": 0
      }
    },
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#infosProduct/quantity-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:quantity-selector",
    "blocks": [],
    "component": "vtex.product-list@0.36.0/QuantitySelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-list@0.x:quantity-selector"
    ],
    "preview": {
      "type": "box",
      "height": {
        "desktop": {
          "defaultValue": 35
        },
        "mobile": {
          "defaultValue": 35
        }
      },
      "width": {
        "desktop": {
          "defaultValue": 80
        },
        "mobile": {
          "defaultValue": 80
        }
      },
      "options": {
        "padding": 0
      }
    },
    "props": {
      "mode": "stepper",
      "size": "small",
      "quantitySelectorStep": "unitMultiplier"
    },
    "render": "lazy",
    "track": [],
    "content": {
      "mode": "stepper",
      "size": "small",
      "quantitySelectorStep": "unitMultiplier"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/flex-layout.col#right-col-content/minicart.v2/minicart-base-content/minicart-product-list/product-list/product-list-content-mobile/flex-layout.row#minicartItem/flex-layout.col#closebutton/remove-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-list@0.x:remove-button",
    "blocks": [],
    "component": "vtex.product-list@0.36.0/RemoveButton",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-list@0.x:remove-button"
    ],
    "preview": {
      "type": "box",
      "height": {
        "desktop": {
          "defaultValue": 25
        },
        "mobile": {
          "defaultValue": 25
        }
      },
      "width": {
        "desktop": {
          "defaultValue": 25
        },
        "mobile": {
          "defaultValue": 25
        }
      },
      "options": {
        "padding": 0
      }
    },
    "props": {},
    "render": "lazy",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
        "extensionPointId": "product-images#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-bookmark": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
    "blocks": [],
    "component": "vtex.product-bookmark-interfaces@1.0.1/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-bookmark-interfaces@1.x:product-bookmark"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-specification-badges": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
    "blocks": [],
    "component": "vtex.product-specification-badges@0.3.0/index",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-specification-badges@0.x:product-specification-badges"
    ],
    "preview": null,
    "props": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "render": "server",
    "title": "Flags",
    "track": [],
    "content": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
        "extensionPointId": "flex-layout.row#container-highlights",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
        "extensionPointId": "flex-layout.row#flags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
        "extensionPointId": "vtex.store-components:product-name#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-name"
    },
    "render": "server",
    "title": "Container Nome Produto",
    "track": [],
    "content": {
      "blockClass": "container__product-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
    "blocks": [
      {
        "blockId": "vtex.product-price@1.x:product-seller-name",
        "extensionPointId": "product-seller-name",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-seller-name"
    },
    "render": "server",
    "title": "Container Nome Do Vendedor",
    "track": [],
    "content": {
      "blockClass": "row-seller-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
    "blocks": [
      {
        "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
        "extensionPointId": "product-summary-sku-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:share#default",
        "extensionPointId": "share#default",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Botões De Compartilhar",
    "track": [],
    "content": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
        "extensionPointId": "flex-layout.row#row-product-available-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
        "extensionPointId": "show-more-link",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
        "extensionPointId": "product-images#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-bookmark": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
    "blocks": [],
    "component": "vtex.product-bookmark-interfaces@1.0.1/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-bookmark-interfaces@1.x:product-bookmark"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-specification-badges": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
    "blocks": [],
    "component": "vtex.product-specification-badges@0.3.0/index",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-specification-badges@0.x:product-specification-badges"
    ],
    "preview": null,
    "props": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "render": "server",
    "title": "Flags",
    "track": [],
    "content": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
        "extensionPointId": "flex-layout.row#container-highlights",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
        "extensionPointId": "flex-layout.row#flags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
        "extensionPointId": "vtex.store-components:product-name#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-name"
    },
    "render": "server",
    "title": "Container Nome Produto",
    "track": [],
    "content": {
      "blockClass": "container__product-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
    "blocks": [
      {
        "blockId": "vtex.product-price@1.x:product-seller-name",
        "extensionPointId": "product-seller-name",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-seller-name"
    },
    "render": "server",
    "title": "Container Nome Do Vendedor",
    "track": [],
    "content": {
      "blockClass": "row-seller-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
    "blocks": [
      {
        "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
        "extensionPointId": "product-summary-sku-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:share#default",
        "extensionPointId": "share#default",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Botões De Compartilhar",
    "track": [],
    "content": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
        "extensionPointId": "flex-layout.row#row-product-available-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
        "extensionPointId": "show-more-link",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
        "extensionPointId": "product-images#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-bookmark": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
    "blocks": [],
    "component": "vtex.product-bookmark-interfaces@1.0.1/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-bookmark-interfaces@1.x:product-bookmark"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-specification-badges": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
    "blocks": [],
    "component": "vtex.product-specification-badges@0.3.0/index",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-specification-badges@0.x:product-specification-badges"
    ],
    "preview": null,
    "props": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "render": "server",
    "title": "Flags",
    "track": [],
    "content": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
        "extensionPointId": "flex-layout.row#container-highlights",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
        "extensionPointId": "flex-layout.row#flags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
        "extensionPointId": "vtex.store-components:product-name#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-name"
    },
    "render": "server",
    "title": "Container Nome Produto",
    "track": [],
    "content": {
      "blockClass": "container__product-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
    "blocks": [
      {
        "blockId": "vtex.product-price@1.x:product-seller-name",
        "extensionPointId": "product-seller-name",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-seller-name"
    },
    "render": "server",
    "title": "Container Nome Do Vendedor",
    "track": [],
    "content": {
      "blockClass": "row-seller-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
    "blocks": [
      {
        "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
        "extensionPointId": "product-summary-sku-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:share#default",
        "extensionPointId": "share#default",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Botões De Compartilhar",
    "track": [],
    "content": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
        "extensionPointId": "flex-layout.row#row-product-available-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
        "extensionPointId": "show-more-link",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
        "extensionPointId": "product-images#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-bookmark": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
    "blocks": [],
    "component": "vtex.product-bookmark-interfaces@1.0.1/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-bookmark-interfaces@1.x:product-bookmark"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-specification-badges": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
    "blocks": [],
    "component": "vtex.product-specification-badges@0.3.0/index",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-specification-badges@0.x:product-specification-badges"
    ],
    "preview": null,
    "props": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "render": "server",
    "title": "Flags",
    "track": [],
    "content": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
        "extensionPointId": "flex-layout.row#container-highlights",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
        "extensionPointId": "flex-layout.row#flags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
        "extensionPointId": "vtex.store-components:product-name#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-name"
    },
    "render": "server",
    "title": "Container Nome Produto",
    "track": [],
    "content": {
      "blockClass": "container__product-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
    "blocks": [
      {
        "blockId": "vtex.product-price@1.x:product-seller-name",
        "extensionPointId": "product-seller-name",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-seller-name"
    },
    "render": "server",
    "title": "Container Nome Do Vendedor",
    "track": [],
    "content": {
      "blockClass": "row-seller-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
    "blocks": [
      {
        "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
        "extensionPointId": "product-summary-sku-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:share#default",
        "extensionPointId": "share#default",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Botões De Compartilhar",
    "track": [],
    "content": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
        "extensionPointId": "flex-layout.row#row-product-available-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
        "extensionPointId": "show-more-link",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
        "extensionPointId": "product-images#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-bookmark": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
    "blocks": [],
    "component": "vtex.product-bookmark-interfaces@1.0.1/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-bookmark-interfaces@1.x:product-bookmark"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-specification-badges": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
    "blocks": [],
    "component": "vtex.product-specification-badges@0.3.0/index",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-specification-badges@0.x:product-specification-badges"
    ],
    "preview": null,
    "props": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "render": "server",
    "title": "Flags",
    "track": [],
    "content": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
        "extensionPointId": "flex-layout.row#container-highlights",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
        "extensionPointId": "flex-layout.row#flags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
        "extensionPointId": "vtex.store-components:product-name#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-name"
    },
    "render": "server",
    "title": "Container Nome Produto",
    "track": [],
    "content": {
      "blockClass": "container__product-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
    "blocks": [
      {
        "blockId": "vtex.product-price@1.x:product-seller-name",
        "extensionPointId": "product-seller-name",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-seller-name"
    },
    "render": "server",
    "title": "Container Nome Do Vendedor",
    "track": [],
    "content": {
      "blockClass": "row-seller-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
    "blocks": [
      {
        "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
        "extensionPointId": "product-summary-sku-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:share#default",
        "extensionPointId": "share#default",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Botões De Compartilhar",
    "track": [],
    "content": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
        "extensionPointId": "flex-layout.row#row-product-available-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
        "extensionPointId": "show-more-link",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
        "extensionPointId": "product-images#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-bookmark": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
    "blocks": [],
    "component": "vtex.product-bookmark-interfaces@1.0.1/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-bookmark-interfaces@1.x:product-bookmark"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-specification-badges": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
    "blocks": [],
    "component": "vtex.product-specification-badges@0.3.0/index",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-specification-badges@0.x:product-specification-badges"
    ],
    "preview": null,
    "props": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "render": "server",
    "title": "Flags",
    "track": [],
    "content": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
        "extensionPointId": "flex-layout.row#container-highlights",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
        "extensionPointId": "flex-layout.row#flags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
        "extensionPointId": "vtex.store-components:product-name#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-name"
    },
    "render": "server",
    "title": "Container Nome Produto",
    "track": [],
    "content": {
      "blockClass": "container__product-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
    "blocks": [
      {
        "blockId": "vtex.product-price@1.x:product-seller-name",
        "extensionPointId": "product-seller-name",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-seller-name"
    },
    "render": "server",
    "title": "Container Nome Do Vendedor",
    "track": [],
    "content": {
      "blockClass": "row-seller-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
    "blocks": [
      {
        "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
        "extensionPointId": "product-summary-sku-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:share#default",
        "extensionPointId": "share#default",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Botões De Compartilhar",
    "track": [],
    "content": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
        "extensionPointId": "flex-layout.row#row-product-available-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
        "extensionPointId": "show-more-link",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-image-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
        "extensionPointId": "product-images#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "render": "server",
    "title": "Container Imagem Produto",
    "track": [],
    "content": {
      "blockClass": [
        "container__product-image-row",
        "container__product-image-quickview"
      ]
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-bookmark": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-bookmark-interfaces@1.x:product-bookmark",
    "blocks": [],
    "component": "vtex.product-bookmark-interfaces@1.0.1/Noop",
    "composition": "blocks",
    "hasContentSchema": false,
    "implements": [
      "vtex.product-bookmark-interfaces@1.x:product-bookmark"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/product-specification-badges": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-specification-badges",
    "blocks": [],
    "component": "vtex.product-specification-badges@0.3.0/index",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-specification-badges@0.x:product-specification-badges"
    ],
    "preview": null,
    "props": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "render": "server",
    "title": "Flags",
    "track": [],
    "content": {
      "specificationGroupName": "Group",
      "specificationName": "On Sale",
      "visibleWhen": "True",
      "displayValue": "SPECIFICATION_NAME",
      "blockClass": "container__product-specification-badges"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
        "extensionPointId": "flex-layout.row#container-highlights",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
        "extensionPointId": "flex-layout.row#flags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-flags"
      ],
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#product-name-quickview",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
        "extensionPointId": "vtex.store-components:product-name#quickview",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-name"
    },
    "render": "server",
    "title": "Container Nome Produto",
    "track": [],
    "content": {
      "blockClass": "container__product-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#seller-name",
    "blocks": [
      {
        "blockId": "vtex.product-price@1.x:product-seller-name",
        "extensionPointId": "product-seller-name",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "row-seller-name"
    },
    "render": "server",
    "title": "Container Nome Do Vendedor",
    "track": [],
    "content": {
      "blockClass": "row-seller-name"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-quickview-sku-selector",
    "blocks": [
      {
        "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
        "extensionPointId": "product-summary-sku-selector",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-sku-selector"
      ],
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#share",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:share#default",
        "extensionPointId": "share#default",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Botões De Compartilhar",
    "track": [],
    "content": {
      "blockClass": "container__share-product",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-quickview-last",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
        "extensionPointId": "flex-layout.row#row-product-available-2",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
        "extensionPointId": "show-more-link",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "container__quickview-last-col"
      ],
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview/product-images#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductImages",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-images"
    ],
    "preview": null,
    "props": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "render": "server",
    "track": [],
    "content": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview/vtex.store-components:product-name#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-name"
    ],
    "preview": null,
    "props": {
      "showSku": false
    },
    "render": "server",
    "track": [],
    "content": {
      "showSku": false
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name/product-seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-price@1.x:product-seller-name",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellerName",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-seller-name"
    ],
    "preview": null,
    "props": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector/product-summary-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummarySKUSelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-sku-selector"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share/share#default": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:share#default",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Share",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:share"
    ],
    "preview": null,
    "props": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
    "blocks": [
      {
        "blockId": "vtex.product-identifier@0.x:product-identifier.product",
        "extensionPointId": "product-identifier.product",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
        "extensionPointId": "flex-layout.row#list-price-savings-with-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
        "extensionPointId": "flex-layout.row#selling-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
        "extensionPointId": "flex-layout.row#installments",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
        "extensionPointId": "flex-layout.row#buy-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
        "extensionPointId": "flex-layout.row#shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/show-more-link": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
    "blocks": [],
    "component": "lojasmarabraz.store-theme@3.0.42/ShowMoreLink",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.store-theme@3.x:show-more-link"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview/product-images#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductImages",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-images"
    ],
    "preview": null,
    "props": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "render": "server",
    "track": [],
    "content": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview/vtex.store-components:product-name#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-name"
    ],
    "preview": null,
    "props": {
      "showSku": false
    },
    "render": "server",
    "track": [],
    "content": {
      "showSku": false
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name/product-seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-price@1.x:product-seller-name",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellerName",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-seller-name"
    ],
    "preview": null,
    "props": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector/product-summary-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummarySKUSelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-sku-selector"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share/share#default": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:share#default",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Share",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:share"
    ],
    "preview": null,
    "props": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
    "blocks": [
      {
        "blockId": "vtex.product-identifier@0.x:product-identifier.product",
        "extensionPointId": "product-identifier.product",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
        "extensionPointId": "flex-layout.row#list-price-savings-with-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
        "extensionPointId": "flex-layout.row#selling-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
        "extensionPointId": "flex-layout.row#installments",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
        "extensionPointId": "flex-layout.row#buy-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
        "extensionPointId": "flex-layout.row#shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/show-more-link": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
    "blocks": [],
    "component": "lojasmarabraz.store-theme@3.0.42/ShowMoreLink",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.store-theme@3.x:show-more-link"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview/product-images#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductImages",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-images"
    ],
    "preview": null,
    "props": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "render": "server",
    "track": [],
    "content": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview/vtex.store-components:product-name#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-name"
    ],
    "preview": null,
    "props": {
      "showSku": false
    },
    "render": "server",
    "track": [],
    "content": {
      "showSku": false
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name/product-seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-price@1.x:product-seller-name",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellerName",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-seller-name"
    ],
    "preview": null,
    "props": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector/product-summary-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummarySKUSelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-sku-selector"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share/share#default": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:share#default",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Share",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:share"
    ],
    "preview": null,
    "props": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
    "blocks": [
      {
        "blockId": "vtex.product-identifier@0.x:product-identifier.product",
        "extensionPointId": "product-identifier.product",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
        "extensionPointId": "flex-layout.row#list-price-savings-with-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
        "extensionPointId": "flex-layout.row#selling-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
        "extensionPointId": "flex-layout.row#installments",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
        "extensionPointId": "flex-layout.row#buy-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
        "extensionPointId": "flex-layout.row#shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/show-more-link": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
    "blocks": [],
    "component": "lojasmarabraz.store-theme@3.0.42/ShowMoreLink",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.store-theme@3.x:show-more-link"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview/product-images#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductImages",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-images"
    ],
    "preview": null,
    "props": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "render": "server",
    "track": [],
    "content": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview/vtex.store-components:product-name#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-name"
    ],
    "preview": null,
    "props": {
      "showSku": false
    },
    "render": "server",
    "track": [],
    "content": {
      "showSku": false
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name/product-seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-price@1.x:product-seller-name",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellerName",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-seller-name"
    ],
    "preview": null,
    "props": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector/product-summary-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummarySKUSelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-sku-selector"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share/share#default": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:share#default",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Share",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:share"
    ],
    "preview": null,
    "props": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
    "blocks": [
      {
        "blockId": "vtex.product-identifier@0.x:product-identifier.product",
        "extensionPointId": "product-identifier.product",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
        "extensionPointId": "flex-layout.row#list-price-savings-with-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
        "extensionPointId": "flex-layout.row#selling-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
        "extensionPointId": "flex-layout.row#installments",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
        "extensionPointId": "flex-layout.row#buy-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
        "extensionPointId": "flex-layout.row#shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/show-more-link": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
    "blocks": [],
    "component": "lojasmarabraz.store-theme@3.0.42/ShowMoreLink",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.store-theme@3.x:show-more-link"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview/product-images#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductImages",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-images"
    ],
    "preview": null,
    "props": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "render": "server",
    "track": [],
    "content": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview/vtex.store-components:product-name#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-name"
    ],
    "preview": null,
    "props": {
      "showSku": false
    },
    "render": "server",
    "track": [],
    "content": {
      "showSku": false
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name/product-seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-price@1.x:product-seller-name",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellerName",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-seller-name"
    ],
    "preview": null,
    "props": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector/product-summary-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummarySKUSelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-sku-selector"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share/share#default": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:share#default",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Share",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:share"
    ],
    "preview": null,
    "props": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
    "blocks": [
      {
        "blockId": "vtex.product-identifier@0.x:product-identifier.product",
        "extensionPointId": "product-identifier.product",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
        "extensionPointId": "flex-layout.row#list-price-savings-with-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
        "extensionPointId": "flex-layout.row#selling-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
        "extensionPointId": "flex-layout.row#installments",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
        "extensionPointId": "flex-layout.row#buy-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
        "extensionPointId": "flex-layout.row#shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/show-more-link": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
    "blocks": [],
    "component": "lojasmarabraz.store-theme@3.0.42/ShowMoreLink",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.store-theme@3.x:show-more-link"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview/product-images#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductImages",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-images"
    ],
    "preview": null,
    "props": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "render": "server",
    "track": [],
    "content": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview/vtex.store-components:product-name#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-name"
    ],
    "preview": null,
    "props": {
      "showSku": false
    },
    "render": "server",
    "track": [],
    "content": {
      "showSku": false
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name/product-seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-price@1.x:product-seller-name",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellerName",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-seller-name"
    ],
    "preview": null,
    "props": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector/product-summary-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummarySKUSelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-sku-selector"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share/share#default": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:share#default",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Share",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:share"
    ],
    "preview": null,
    "props": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
    "blocks": [
      {
        "blockId": "vtex.product-identifier@0.x:product-identifier.product",
        "extensionPointId": "product-identifier.product",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
        "extensionPointId": "flex-layout.row#list-price-savings-with-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
        "extensionPointId": "flex-layout.row#selling-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
        "extensionPointId": "flex-layout.row#installments",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
        "extensionPointId": "flex-layout.row#buy-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
        "extensionPointId": "flex-layout.row#shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/show-more-link": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
    "blocks": [],
    "component": "lojasmarabraz.store-theme@3.0.42/ShowMoreLink",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.store-theme@3.x:show-more-link"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#stack-desktop-quickview/stack-layout#pdp-quickview/flex-layout.row#product-image-quickview/product-images#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-images#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductImages",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-images"
    ],
    "preview": null,
    "props": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "render": "server",
    "track": [],
    "content": {
      "aspectRatio": {
        "desktop": "auto"
      },
      "showPaginationDots": {
        "desktop": false,
        "mobile": true
      },
      "contentOrder": "videos-first",
      "showNavigationArrows": false,
      "displayThumbnailsArrows": true,
      "maxHeight": 450
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
        "extensionPointId": "flex-layout.col#container-highlights",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "render": "server",
    "title": "Container Flags",
    "track": [],
    "content": {
      "blockClass": "container__highlights-row",
      "preserveLayoutOnMobile": true,
      "fullWidth": true,
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "colGap": 5
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#flags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#collectionFlags",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
        "extensionPointId": "vtex.product-highlights@2.x:product-highlights#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionAndPromotionFlags",
      "colGap": 2
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#product-name-quickview/vtex.store-components:product-name#quickview": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-name#quickview",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ProductName",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:product-name"
    ],
    "preview": null,
    "props": {
      "showSku": false
    },
    "render": "server",
    "track": [],
    "content": {
      "showSku": false
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#seller-name/product-seller-name": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-price@1.x:product-seller-name",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellerName",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-seller-name"
    ],
    "preview": null,
    "props": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "vtex.product-price@1.x::store/seller-name.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-sku-selector/product-summary-sku-selector": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-summary@2.x:product-summary-sku-selector",
    "blocks": [],
    "component": "vtex.product-summary@2.81.0/ProductSummarySKUSelector",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-summary@2.x:product-summary-sku-selector"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#share/share#default": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:share#default",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/Share",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:share"
    ],
    "preview": null,
    "props": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "render": "server",
    "track": [],
    "content": {
      "social": {
        "WhatsApp": true,
        "Facebook": true,
        "Twitter": true,
        "Pinterest": true
      }
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#row-product-available-2",
    "blocks": [
      {
        "blockId": "vtex.product-identifier@0.x:product-identifier.product",
        "extensionPointId": "product-identifier.product",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
        "extensionPointId": "flex-layout.row#list-price-savings-with-price-savings",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
        "extensionPointId": "flex-layout.row#selling-price",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
        "extensionPointId": "flex-layout.row#installments",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
        "extensionPointId": "flex-layout.row#buy-button",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
        "extensionPointId": "flex-layout.row#shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": [
        "row-product-available",
        "row-product-available-2"
      ],
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/show-more-link": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:show-more-link",
    "blocks": [],
    "component": "lojasmarabraz.store-theme@3.0.42/ShowMoreLink",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "lojasmarabraz.store-theme@3.x:show-more-link"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/product-identifier.product": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-identifier@0.x:product-identifier.product",
    "blocks": [],
    "component": "vtex.product-identifier@0.5.0/ProductIdentifierProduct",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-identifier@0.x:product-identifier.product",
      "vtex.product-identifier@0.x:product-identifier"
    ],
    "preview": {
      "type": "grid",
      "height": {
        "desktop": {
          "defaultValue": 20
        },
        "mobile": {
          "defaultValue": 20
        }
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "idField": "productReference",
      "label": "default"
    },
    "render": "server",
    "track": [],
    "content": {
      "idField": "productReference",
      "label": "default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
        "extensionPointId": "product-list-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
        "extensionPointId": "flex-layout.col#wishlist-buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Lista E Desconto",
    "track": [],
    "content": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
        "extensionPointId": "product-selling-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
        "extensionPointId": "rich-text#in-cash",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
        "extensionPointId": "product-installments#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
        "extensionPointId": "flex-layout.col#product-quantity",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
        "extensionPointId": "flex-layout.col#buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "render": "server",
    "title": "Container Botão De Compra",
    "track": [],
    "content": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
    "blocks": [
      {
        "blockId": "vtex.store-components@3.x:shipping-simulator",
        "extensionPointId": "shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Simulador De Entrega",
    "track": [],
    "content": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/product-identifier.product": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-identifier@0.x:product-identifier.product",
    "blocks": [],
    "component": "vtex.product-identifier@0.5.0/ProductIdentifierProduct",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-identifier@0.x:product-identifier.product",
      "vtex.product-identifier@0.x:product-identifier"
    ],
    "preview": {
      "type": "grid",
      "height": {
        "desktop": {
          "defaultValue": 20
        },
        "mobile": {
          "defaultValue": 20
        }
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "idField": "productReference",
      "label": "default"
    },
    "render": "server",
    "track": [],
    "content": {
      "idField": "productReference",
      "label": "default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
        "extensionPointId": "product-list-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
        "extensionPointId": "flex-layout.col#wishlist-buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Lista E Desconto",
    "track": [],
    "content": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
        "extensionPointId": "product-selling-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
        "extensionPointId": "rich-text#in-cash",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
        "extensionPointId": "product-installments#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
        "extensionPointId": "flex-layout.col#product-quantity",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
        "extensionPointId": "flex-layout.col#buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "render": "server",
    "title": "Container Botão De Compra",
    "track": [],
    "content": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
    "blocks": [
      {
        "blockId": "vtex.store-components@3.x:shipping-simulator",
        "extensionPointId": "shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Simulador De Entrega",
    "track": [],
    "content": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/product-identifier.product": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-identifier@0.x:product-identifier.product",
    "blocks": [],
    "component": "vtex.product-identifier@0.5.0/ProductIdentifierProduct",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-identifier@0.x:product-identifier.product",
      "vtex.product-identifier@0.x:product-identifier"
    ],
    "preview": {
      "type": "grid",
      "height": {
        "desktop": {
          "defaultValue": 20
        },
        "mobile": {
          "defaultValue": 20
        }
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "idField": "productReference",
      "label": "default"
    },
    "render": "server",
    "track": [],
    "content": {
      "idField": "productReference",
      "label": "default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
        "extensionPointId": "product-list-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
        "extensionPointId": "flex-layout.col#wishlist-buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Lista E Desconto",
    "track": [],
    "content": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
        "extensionPointId": "product-selling-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
        "extensionPointId": "rich-text#in-cash",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
        "extensionPointId": "product-installments#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
        "extensionPointId": "flex-layout.col#product-quantity",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
        "extensionPointId": "flex-layout.col#buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "render": "server",
    "title": "Container Botão De Compra",
    "track": [],
    "content": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
    "blocks": [
      {
        "blockId": "vtex.store-components@3.x:shipping-simulator",
        "extensionPointId": "shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Simulador De Entrega",
    "track": [],
    "content": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/product-identifier.product": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-identifier@0.x:product-identifier.product",
    "blocks": [],
    "component": "vtex.product-identifier@0.5.0/ProductIdentifierProduct",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-identifier@0.x:product-identifier.product",
      "vtex.product-identifier@0.x:product-identifier"
    ],
    "preview": {
      "type": "grid",
      "height": {
        "desktop": {
          "defaultValue": 20
        },
        "mobile": {
          "defaultValue": 20
        }
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "idField": "productReference",
      "label": "default"
    },
    "render": "server",
    "track": [],
    "content": {
      "idField": "productReference",
      "label": "default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
        "extensionPointId": "product-list-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
        "extensionPointId": "flex-layout.col#wishlist-buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Lista E Desconto",
    "track": [],
    "content": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
        "extensionPointId": "product-selling-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
        "extensionPointId": "rich-text#in-cash",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
        "extensionPointId": "product-installments#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
        "extensionPointId": "flex-layout.col#product-quantity",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
        "extensionPointId": "flex-layout.col#buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "render": "server",
    "title": "Container Botão De Compra",
    "track": [],
    "content": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
    "blocks": [
      {
        "blockId": "vtex.store-components@3.x:shipping-simulator",
        "extensionPointId": "shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Simulador De Entrega",
    "track": [],
    "content": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/product-identifier.product": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-identifier@0.x:product-identifier.product",
    "blocks": [],
    "component": "vtex.product-identifier@0.5.0/ProductIdentifierProduct",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-identifier@0.x:product-identifier.product",
      "vtex.product-identifier@0.x:product-identifier"
    ],
    "preview": {
      "type": "grid",
      "height": {
        "desktop": {
          "defaultValue": 20
        },
        "mobile": {
          "defaultValue": 20
        }
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "idField": "productReference",
      "label": "default"
    },
    "render": "server",
    "track": [],
    "content": {
      "idField": "productReference",
      "label": "default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
        "extensionPointId": "product-list-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
        "extensionPointId": "flex-layout.col#wishlist-buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Lista E Desconto",
    "track": [],
    "content": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
        "extensionPointId": "product-selling-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
        "extensionPointId": "rich-text#in-cash",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
        "extensionPointId": "product-installments#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
        "extensionPointId": "flex-layout.col#product-quantity",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
        "extensionPointId": "flex-layout.col#buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "render": "server",
    "title": "Container Botão De Compra",
    "track": [],
    "content": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
    "blocks": [
      {
        "blockId": "vtex.store-components@3.x:shipping-simulator",
        "extensionPointId": "shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Simulador De Entrega",
    "track": [],
    "content": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/product-identifier.product": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-identifier@0.x:product-identifier.product",
    "blocks": [],
    "component": "vtex.product-identifier@0.5.0/ProductIdentifierProduct",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-identifier@0.x:product-identifier.product",
      "vtex.product-identifier@0.x:product-identifier"
    ],
    "preview": {
      "type": "grid",
      "height": {
        "desktop": {
          "defaultValue": 20
        },
        "mobile": {
          "defaultValue": 20
        }
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "idField": "productReference",
      "label": "default"
    },
    "render": "server",
    "track": [],
    "content": {
      "idField": "productReference",
      "label": "default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
        "extensionPointId": "product-list-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
        "extensionPointId": "flex-layout.col#wishlist-buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Lista E Desconto",
    "track": [],
    "content": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
        "extensionPointId": "product-selling-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
        "extensionPointId": "rich-text#in-cash",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
        "extensionPointId": "product-installments#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
        "extensionPointId": "flex-layout.col#product-quantity",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
        "extensionPointId": "flex-layout.col#buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "render": "server",
    "title": "Container Botão De Compra",
    "track": [],
    "content": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
    "blocks": [
      {
        "blockId": "vtex.store-components@3.x:shipping-simulator",
        "extensionPointId": "shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Simulador De Entrega",
    "track": [],
    "content": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#container-highlights",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
        "extensionPointId": "product-price-savings#summaryPercentage",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "container__highlights-col",
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
        "extensionPointId": "product-highlight-wrapper#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "collection"
    },
    "render": "server",
    "title": "Container Coleção",
    "track": [],
    "content": {
      "type": "collection"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlights#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
        "extensionPointId": "product-highlight-wrapper#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlights",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlights"
    ],
    "preview": null,
    "props": {
      "type": "promotion"
    },
    "render": "server",
    "title": "Container Promoção",
    "track": [],
    "content": {
      "type": "promotion"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/product-identifier.product": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.product-identifier@0.x:product-identifier.product",
    "blocks": [],
    "component": "vtex.product-identifier@0.5.0/ProductIdentifierProduct",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-identifier@0.x:product-identifier.product",
      "vtex.product-identifier@0.x:product-identifier"
    ],
    "preview": {
      "type": "grid",
      "height": {
        "desktop": {
          "defaultValue": 20
        },
        "mobile": {
          "defaultValue": 20
        }
      },
      "width": {
        "desktop": {},
        "mobile": {}
      }
    },
    "props": {
      "idField": "productReference",
      "label": "default"
    },
    "render": "server",
    "track": [],
    "content": {
      "idField": "productReference",
      "label": "default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#list-price-savings-with-price-savings",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
        "extensionPointId": "product-list-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
        "extensionPointId": "flex-layout.col#wishlist-buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Lista E Desconto",
    "track": [],
    "content": {
      "blockClass": "container__list-price-savings-with-price-savings",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#selling-price",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
        "extensionPointId": "product-selling-price#pdp",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
        "extensionPointId": "rich-text#in-cash",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "render": "server",
    "title": "Container Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "container__selling-price",
      "preserveLayoutOnMobile": true,
      "preventHorizontalStretch": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#installments",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
        "extensionPointId": "product-installments#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Parcelas",
    "track": [],
    "content": {
      "blockClass": "container__installments",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true,
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#buy-button",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
        "extensionPointId": "flex-layout.col#product-quantity",
        "children": true,
        "blockRole": "children"
      },
      {
        "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
        "extensionPointId": "flex-layout.col#buybox",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "render": "server",
    "title": "Container Botão De Compra",
    "track": [],
    "content": {
      "blockClass": "container__buy-button",
      "preventHorizontalStretch": true,
      "preserveLayoutOnMobile": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/$before_header.full/header-layout.desktop/sticky-layout#header-desktop/flex-layout.row#content-principal-header-desktop/search-bar#desktop/autocomplete-result-list/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.row#shipping-simulator",
    "blocks": [
      {
        "blockId": "vtex.store-components@3.x:shipping-simulator",
        "extensionPointId": "shipping-simulator",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/FlexLayout",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.row",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "render": "server",
    "title": "Container Simulador De Entrega",
    "track": [],
    "content": {
      "blockClass": "container__shipping-simulator",
      "fullWidth": true
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/product-list-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/flex-layout.col#wishlist-buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
    "blocks": [
      {
        "blockId": "vtex.wish-list@1.x:add-to-list-btn",
        "extensionPointId": "add-to-list-btn",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-wishlist-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-wishlist-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/product-selling-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/rich-text#in-cash": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "render": "server",
    "title": "Texto Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments/product-installments#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#product-quantity": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-quantity",
        "extensionPointId": "product-quantity",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "render": "server",
    "title": "Container Seletor Quantidade",
    "track": [],
    "content": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:condition-voltagem#pdp",
        "extensionPointId": "condition-voltagem#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home12/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator/shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-components@3.x:shipping-simulator",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ShippingSimulator",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:shipping-simulator"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/product-list-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/flex-layout.col#wishlist-buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
    "blocks": [
      {
        "blockId": "vtex.wish-list@1.x:add-to-list-btn",
        "extensionPointId": "add-to-list-btn",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-wishlist-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-wishlist-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/product-selling-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/rich-text#in-cash": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "render": "server",
    "title": "Texto Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments/product-installments#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#product-quantity": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-quantity",
        "extensionPointId": "product-quantity",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "render": "server",
    "title": "Container Seletor Quantidade",
    "track": [],
    "content": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:condition-voltagem#pdp",
        "extensionPointId": "condition-voltagem#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home16/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator/shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-components@3.x:shipping-simulator",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ShippingSimulator",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:shipping-simulator"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/product-list-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/flex-layout.col#wishlist-buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
    "blocks": [
      {
        "blockId": "vtex.wish-list@1.x:add-to-list-btn",
        "extensionPointId": "add-to-list-btn",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-wishlist-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-wishlist-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/product-selling-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/rich-text#in-cash": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "render": "server",
    "title": "Texto Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments/product-installments#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#product-quantity": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-quantity",
        "extensionPointId": "product-quantity",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "render": "server",
    "title": "Container Seletor Quantidade",
    "track": [],
    "content": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:condition-voltagem#pdp",
        "extensionPointId": "condition-voltagem#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home24/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator/shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-components@3.x:shipping-simulator",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ShippingSimulator",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:shipping-simulator"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/product-list-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/flex-layout.col#wishlist-buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
    "blocks": [
      {
        "blockId": "vtex.wish-list@1.x:add-to-list-btn",
        "extensionPointId": "add-to-list-btn",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-wishlist-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-wishlist-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/product-selling-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/rich-text#in-cash": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "render": "server",
    "title": "Texto Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments/product-installments#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#product-quantity": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-quantity",
        "extensionPointId": "product-quantity",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "render": "server",
    "title": "Container Seletor Quantidade",
    "track": [],
    "content": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:condition-voltagem#pdp",
        "extensionPointId": "condition-voltagem#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#container-home-app-vitrine-multilevel/flex-layout.col#container-home-app-vitrine-multilevel/app-vitrine-multilevel-3/list-context.product-list#vitrine-home36/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator/shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-components@3.x:shipping-simulator",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ShippingSimulator",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:shipping-simulator"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/product-list-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/flex-layout.col#wishlist-buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
    "blocks": [
      {
        "blockId": "vtex.wish-list@1.x:add-to-list-btn",
        "extensionPointId": "add-to-list-btn",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-wishlist-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-wishlist-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/product-selling-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/rich-text#in-cash": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "render": "server",
    "title": "Texto Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#installments/product-installments#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-installments#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Installments",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-installments"
    ],
    "preview": null,
    "props": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "installments-pdp",
      "message": "ou em {installmentsNumber}x de {installmentValue} sem juros"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#product-quantity": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#product-quantity",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-quantity",
        "extensionPointId": "product-quantity",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "render": "server",
    "title": "Container Seletor Quantidade",
    "track": [],
    "content": {
      "blockClass": "container__product-quantity",
      "preserveLayoutOnMobile": true,
      "width": "35%"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#buy-button/flex-layout.col#buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#buybox",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:condition-voltagem#pdp",
        "extensionPointId": "condition-voltagem#pdp",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-01/flex-layout.col#shelf-01/flex-layout.row#shelf-list-container-01/list-context.product-list#demo1/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#shipping-simulator/shipping-simulator": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "vtex.store-components@3.x:shipping-simulator",
    "blocks": [],
    "component": "vtex.store-components@3.164.0/ShippingSimulator",
    "composition": "blocks",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.store-components@3.x:shipping-simulator"
    ],
    "preview": null,
    "props": {},
    "render": "server",
    "track": [],
    "content": {},
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#container-highlights/flex-layout.col#container-highlights/product-price-savings#summaryPercentage": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-price-savings#summaryPercentage",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/Savings",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-price-savings"
    ],
    "preview": null,
    "props": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "render": "server",
    "track": [],
    "content": {
      "message": "{savingsPercentage} OFF",
      "blockClass": "summaryPercentage"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#collectionFlags/product-highlight-wrapper#collectionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#collectionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#collectionFlags",
        "extensionPointId": "product-highlight-text#collectionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "collectionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "collectionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#row-product-available-1-quickview/flex-layout.row#container-quickview-flags/flex-layout.row#flags/vtex.product-highlights@2.x:product-highlights#promotionFlags/product-highlight-wrapper#promotionFlags": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-wrapper#promotionFlags",
    "blocks": [
      {
        "blockId": "lojasmarabraz.store-theme@3.x:product-highlight-text#promotionFlags",
        "extensionPointId": "product-highlight-text#promotionFlags",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.product-highlights@2.2.2/ProductHighlightWrapper",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.product-highlights@2.x:product-highlight-wrapper"
    ],
    "preview": null,
    "props": {
      "blockClass": "promotionFlags"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "promotionFlags"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/product-list-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-list-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/ListPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-list-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "list-price-pdp",
      "message": "vtex.product-price@1.x::store/list-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#list-price-savings-with-price-savings/flex-layout.col#wishlist-buybox": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:flex-layout.col#wishlist-buybox",
    "blocks": [
      {
        "blockId": "vtex.wish-list@1.x:add-to-list-btn",
        "extensionPointId": "add-to-list-btn",
        "children": true,
        "blockRole": "children"
      }
    ],
    "component": "vtex.flex-layout@0.20.1/Col",
    "composition": "children",
    "hasContentSchema": false,
    "hydration": "always",
    "implements": [
      "vtex.flex-layout@0.x:flex-layout.col",
      "vtex.flex-layout@0.x:flex-layout"
    ],
    "preview": null,
    "props": {
      "blockClass": "col-wishlist-buybox"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "col-wishlist-buybox"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/product-selling-price#pdp": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:product-selling-price#pdp",
    "blocks": [],
    "component": "vtex.product-price@1.30.0/SellingPrice",
    "composition": "children",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.product-price@1.x:product-selling-price"
    ],
    "preview": null,
    "props": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "render": "server",
    "track": [],
    "content": {
      "blockClass": "selling-price-pdp",
      "message": "vtex.product-price@1.x::store/selling-price.default"
    },
    "contentIds": [
      ""
    ]
  },
  "store.home/responsive-layout.desktop#home/flex-layout.row#shelf-02/flex-layout.col#shelf-02/flex-layout.row#02/list-context.product-list#demo-02/product-summary/stack-layout#prodsum/modal-trigger#quickview/modal-layout#quickview/flex-layout.row#quickview-content/flex-layout.col#right-side-quickview/flex-layout.row#container-quickview-last/flex-layout.col#container-quickview-last/flex-layout.row#row-product-available-2/flex-layout.row#selling-price/rich-text#in-cash": {
    "before": [],
    "around": [],
    "after": [],
    "blockId": "lojasmarabraz.store-theme@3.x:rich-text#in-cash",
    "blocks": [],
    "component": "vtex.rich-text@0.15.0/index",
    "composition": "blocks",
    "hasContentSchema": true,
    "hydration": "always",
    "implements": [
      "vtex.rich-text@0.x:rich-text"
    ],
    "preview": null,
    "props": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "render": "server",
    "title": "Texto Preço De Venda",
    "track": [],
    "content": {
      "blockClass": "text-in-cash",
      "text": "à vista"
    },
    "contentIds": [
      ""
    ]
  }
}


function getPropsAndContent(obj) {
  let result = {};
  for (let key in obj) {
      if (key === "props" || key === "content") {
          result[key] = obj[key];
      } else if (typeof obj[key] === "object") {
          let nestedResult = getPropsAndContent(obj[key]);
          if (Object.keys(nestedResult).length) {
              result[key] = nestedResult;
          }
      }
  }
  // Verifica se o objeto de resultado possui algum valor dentro de "props" ou "content"
  if (!("props" in result) && !("content" in result)) {
      return {}
  }
  return result;
}


const teste2 = getPropsAndContent(mock)


console.dir('olas',teste2)