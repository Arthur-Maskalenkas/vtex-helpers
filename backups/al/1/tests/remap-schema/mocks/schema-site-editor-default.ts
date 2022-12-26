import { mock_schema_remapped_priority_config_container } from "./schema_site-editor-remapped"
import { mock_refined_data_on_product_context } from "./refined-data"

import {
  RefinedDataOnProductContext,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_container_generic_quadrant,
  schema_site_editor_default_priorirty_config_container,
  schema_site_editor_default_quadrant_editor_title,
  schema_site_editor_default_quadrant_name,
  schema_site_editor_default_root_app_badge_custom,
  schema_site_editor_remapped_QuadrantStyles
} from '../../../src/remap-schema/_interfaces'

export const mock_schema_default_collection_flags_id_product = (idProduct: string | number): schema_site_editor_default_collection_flags => {
  return {
    __editorItemTitle: "id produto",
    priority: "0",
    isActive: true,
    _containerConfigsOfLinksPresentsOnProductContext: [
      {
        __editorItemTitle: "Configurações",
        theLinksPresentsInThisProductContextByProduct: [
          {
            _: "Atenção!",
            __editorItemTitle: 26,
            propertieToLinkOnCtx: "productId"
          }
        ]
      }
    ],
    typeContent: "createContent",
    items: [
      {
        __editorItemTitle: "Configurações",
        text: "id produto",
        fontWeight: "400",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        commonPropsBetweenContentAndImage: {
          width: "20",
          height: "unset"
        }
      }
    ]
  }
}

export const mock_schema_default_priorirty_config_container = (): [schema_site_editor_default_priorirty_config_container] => {
  return [
    {
      __editorItemTitle: "Configurações",
      _: "Priridade por Campo",
      _2: "Prioridade Por Ordem Da Lista",
      prioritySystemOnQuadrant: "priorityByList",
      isInverted: false
    }
  ]
}

export const mock_schema_default_QuadrantStyles = (): [schema_site_editor_remapped_QuadrantStyles] => {
  return [{
    __editorItemTitle: "Configurações",
    horizontalDistance: "10px",
    positionFlow: "center",
    verticalDistance: "10px"
  }]
}

export const mock_schema_default_container_generic_quadrant = (): schema_site_editor_default_container_generic_quadrant => {
  return {
    __editorItemTitle: "Quadrante - Direita",
    collection: [
      mock_schema_default_collection_flags_id_product(100)
    ],
    _positioningContainer: mock_schema_default_QuadrantStyles(),
    _priorityConfigContainer: mock_schema_default_priorirty_config_container()
  }
}

export const mock_schema_default_collection_flags_to_filter_collection = (
  {
    value = 1,
    extraValue = null,
    name = "id produto",
    propertieToLinkOnCtx = "productId",
    priority = "0",
    isActive = true
  }: { value: string | number, propertieToLinkOnCtx?: keyof RefinedDataOnProductContext, extraValue?: string, name?: string, priority?: string, isActive?: boolean }
): schema_site_editor_default_collection_flags => {
  return {
    __editorItemTitle: name,
    priority,
    isActive,
    _containerConfigsOfLinksPresentsOnProductContext: [
      {
        __editorItemTitle: "Configurações",
        theLinksPresentsInThisProductContextByProduct: [
          {
            _: "Atenção!",
            __editorItemTitle: value,
            propertieToLinkOnCtx,
            extraCampToFilter_1: extraValue
          }
        ]
      }
    ],
    typeContent: "createContent",
    items: [
      {
        __editorItemTitle: "Configurações",
        text: "id produto",
        fontWeight: "400",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        commonPropsBetweenContentAndImage: {
          width: "20",
          height: "unset"
        }
      }
    ]
  }
}

export const mock_default_quadrant_base_to_filter_collections = (mock_quadrant: schema_site_editor_default_quadrant_editor_title, mock_collection: schema_site_editor_default_collection_flags[]): schema_site_editor_default_container_generic_quadrant => {
  return {
    __editorItemTitle: mock_quadrant,
    collection: [
      ...mock_collection
    ],
    _positioningContainer: mock_schema_default_QuadrantStyles(),
    _priorityConfigContainer: mock_schema_default_priorirty_config_container()
  }
}

export const mock_default_quadrant_to_filter_collections = (...mock_quadrant: Array<Partial<Record<schema_site_editor_default_quadrant_name, schema_site_editor_default_container_generic_quadrant>>>): schema_site_editor_default_root_app_badge_custom => {
  return {
    quadrantBottom: null,
    quadrantTopLeft: null,
    quadrantTopRight: null,
    ...mock_quadrant[0]
  }
}

export const patchs_to_match_refined_with_quadrant_on_filter = () => {
  return {
    quadrantRight: {
      brandId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight.collection[0],
        propertieToLinkOnCtx: "brandId",
        value: 2000000,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.brandId
      },
      categoryId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight.collection[1],
        propertieToLinkOnCtx: "categoryId",
        value: 54,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.categoryId
      },
      productId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight.collection[2],
        propertieToLinkOnCtx: "productId",
        value: 26,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.productId
      },
      listOfCollections: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight.collection[3],
        propertieToLinkOnCtx: "ListOfCollections",
        value: 143,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.listOfCollections.find(collection => collection.id === '143')
      },
      listOfVariations: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight.collection[4],
        propertieToLinkOnCtx: "listOfVariations",
        name: 'Cor',
        value: 'Vermelho',
        matchByValueOnRefinedData: mock_refined_data_on_product_context.listOfVariations.find(variation => variation.name === 'Cor' && variation.values[0] === 'Vermelho')
      },
      listOfProductFields: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight.collection[5],
        propertieToLinkOnCtx: "ListOfProductFields",
        name: 'Voltagem',
        value: '220',
        matchByValueOnRefinedData: mock_refined_data_on_product_context.listOfProductFields.find(variation => variation.name === 'Voltagem' && variation.values[0] === '220')
      }
    },
    quadrantLeft: {
      productId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopLeft.collection[0],
        propertieToLinkOnCtx: "productId",
        value: 26,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.productId
      }
    },
    quadrantBottom: {
      productId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantBottom.collection[0],
        propertieToLinkOnCtx: "productId",
        value: 26,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.productId
      }
    }
  }
}

export const mock_schema_default_root_app = (): schema_site_editor_default_root_app_badge_custom => ({
  quadrantTopRight:
  {
    __editorItemTitle: "Quadrante - Direita",
    collection: [
      {
        __editorItemTitle: "id marca",
        priority: "0",
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByBrand: [
              {
                _: "Atenção!",
                __editorItemTitle: 2000000,
                propertieToLinkOnCtx: "brandId"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "id marca",
            fontWeight: "200",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "unset",
              height: "unset"
            },
            borderRadius: "0px"
          }
        ]
      },
      {
        __editorItemTitle: "ida categoria",
        priority: "0",
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByCategoryId: [
              {
                _: "Atenção!",
                propertieToLinkOnCtx: "categoryId",
                __editorItemTitle: 54
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "id categoria",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "id produto",
        priority: "0",
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByProduct: [
              {
                _: "Atenção!",
                __editorItemTitle: 26,
                propertieToLinkOnCtx: "productId"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "id produto",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "coleção",
        priority: "0",
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByCollections: [
              {
                _: "Atenção!",
                __editorItemTitle: 143,
                propertieToLinkOnCtx: "listOfCollections"
              },
              {
                _: "Atenção!",
                __editorItemTitle: 147,
                propertieToLinkOnCtx: "listOfCollections"
              },
              {
                _: "Atenção!",
                __editorItemTitle: 139,
                propertieToLinkOnCtx: "listOfCollections"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "coleção 11",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "variação 2",
        priority: "0",
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByVariations: [
              {
                _: "Atenção!",
                __editorItemTitle: "Cor",
                extraCampToFilter_1: "Vermelho",
                propertieToLinkOnCtx: "listOfVariations"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "variação 2",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "campo de produto",
        priority: "0",
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByProductField: [
              {
                _: "Atenção!",
                __editorItemTitle: "Voltagem",
                extraCampToFilter_1: "220",
                propertieToLinkOnCtx: "listOfProductFields"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "Campo De Produto",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "unset",
              height: "unset"
            }
          }
        ]
      }
    ],
    _positioningContainer: [
      {
        __editorItemTitle: "Configurações",
        horizontalDistance: "10px",
        positionFlow: "center",
        verticalDistance: "10px"
      }
    ],
    _priorityConfigContainer: [
      {
        __editorItemTitle: "Configurações",
        _: "Priridade por Campo",
        _2: "Prioridade Por Ordem Da Lista",
        prioritySystemOnQuadrant: "priorityByList",
        isInverted: false
      }
    ]
  },
  quadrantTopLeft:
  {
    __editorItemTitle: "Quadrante - Esquerda",
    collection: [
      {
        __editorItemTitle: "item 1 - prioridade 1",
        priority: '1',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByBrand: [],
            theLinksPresentsInThisProductContextByProduct: [
              {
                _: "Atenção!",
                __editorItemTitle: 26,
                propertieToLinkOnCtx: "productId"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "item 1 - prioridade 1",
            fontWeight: "400",
            color: "white",
            backgroundColor: "black",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "item 2 - prioridade 2",
        priority: '2',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByBrand: [],
            theLinksPresentsInThisProductContextByProduct: [
              {
                _: "Atenção!",
                __editorItemTitle: 26,
                propertieToLinkOnCtx: "productId"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "item 2 - prioridade 2",
            fontWeight: "400",
            color: "white",
            backgroundColor: "black",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "item 3 - prioridade 3",
        priority: '3',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByBrand: [],
            theLinksPresentsInThisProductContextByProduct: [
              {
                _: "Atenção!",
                __editorItemTitle: 26,
                propertieToLinkOnCtx: "productId"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "item 3 - prioridade 3",
            fontWeight: "400",
            color: "white",
            backgroundColor: "black",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "item 4 - prioridade 4",
        priority: '4',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByBrand: [],
            theLinksPresentsInThisProductContextByProduct: [
              {
                _: "Atenção!",
                __editorItemTitle: 26,
                propertieToLinkOnCtx: "productId"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "item 4 - prioridade 4",
            fontWeight: "400",
            color: "white",
            backgroundColor: "black",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      },
      {
        __editorItemTitle: "item 5 - prioridade 2",
        priority: '2',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByBrand: [],
            theLinksPresentsInThisProductContextByProduct: [
              {
                _: "Atenção!",
                __editorItemTitle: 26,
                propertieToLinkOnCtx: "productId"
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            __editorItemTitle: "Configurações",
            text: "item 5 - prioridade 2",
            fontWeight: "400",
            color: "white",
            backgroundColor: "black",
            commonPropsBetweenContentAndImage: {
              width: "20",
              height: "unset"
            }
          }
        ]
      }
    ],
    _positioningContainer: [
      {
        __editorItemTitle: "Configurações",
        horizontalDistance: "10px",
        positionFlow: "center",
        verticalDistance: "10px"
      }
    ],
    _priorityConfigContainer: [
      {
        __editorItemTitle: "Configurações",
        _: "Priridade por Campo",
        _2: "Prioridade Por Ordem Da Lista",
        prioritySystemOnQuadrant: "priorityByField",
        isInverted: false
      }
    ]
  },
  quadrantBottom:
  {
    __editorItemTitle: "Quadrante - Inferior",
    collection: [
      {
        __editorItemTitle: "Vinculação 1 - id produto",
        typeContent: "createContent",
        priority: '0',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByProduct: [
              {
                _: "Atenção!",
                __editorItemTitle: 26,
                propertieToLinkOnCtx: "productId"
              }
            ],
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByProductField: [],
            theLinksPresentsInThisProductContextByVariations: [],
            theLinksPresentsInThisProductContextByCategoryId: [],
            theLinksPresentsInThisProductContextByBrand: []
          }
        ],
        items: [
          {
            __editorItemTitle: "Vinculação 1",
            text: "Vinculação 1",
            fontSize: "13px",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "80px",
              height: "40px"
            },
            borderRadius: "0px"
          }
        ]
      },
      {
        __editorItemTitle: "Vinculação 2 - id catalogo",
        typeContent: "createContent",
        priority: '0',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByProduct: [],
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByProductField: [],
            theLinksPresentsInThisProductContextByVariations: [],
            theLinksPresentsInThisProductContextByCategoryId: [
              {
                _: "Atenção!",
                propertieToLinkOnCtx: "categoryId",
                __editorItemTitle: 54
              }
            ]
          }
        ],
        items: [
          {
            __editorItemTitle: "Vinculação 2",
            text: "Vinculação 2",
            fontSize: "13px",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "80px",
              height: "40px"
            },
            borderRadius: "0px"
          }
        ]
      },
      {
        __editorItemTitle: "Vinculação 3 - id marca",
        typeContent: "createContent",
        priority: '3',
        isActive: true,
        _containerConfigsOfLinksPresentsOnProductContext: [
          {
            __editorItemTitle: "Configurações",
            theLinksPresentsInThisProductContextByProduct: [],
            theLinksPresentsInThisProductContextByCollections: [],
            theLinksPresentsInThisProductContextByProductField: [],
            theLinksPresentsInThisProductContextByVariations: [],
            theLinksPresentsInThisProductContextByCategoryId: [],
            theLinksPresentsInThisProductContextByBrand: [
              {
                _: "Atenção!",
                __editorItemTitle: 2000000,
                propertieToLinkOnCtx: "brandId"
              }
            ]
          }
        ],
        items: [
          {
            __editorItemTitle: "Vinculação 3",
            text: "Vinculação 3",
            fontSize: "13px",
            fontWeight: "400",
            color: "#FFFFFF",
            backgroundColor: "#000000",
            commonPropsBetweenContentAndImage: {
              width: "80px",
              height: "40px"
            },
            borderRadius: "0px"
          }
        ]
      }
    ],
    _positioningContainer: [
      {
        __editorItemTitle: "Configurações",
        horizontalDistance: "10px",
        positionFlow: "center",
        verticalDistance: "10px"
      }
    ],
    _priorityConfigContainer: [
      {
        __editorItemTitle: "Configurações",
        _: "Priridade por Campo",
        _2: "Prioridade Por Ordem Da Lista",
        prioritySystemOnQuadrant: "priorityByField",
        isInverted: false
      }
    ]
  }

})