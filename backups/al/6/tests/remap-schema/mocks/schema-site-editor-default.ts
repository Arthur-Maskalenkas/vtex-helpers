import { mock_refined_data_on_product_context } from './refined-data'

import {
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_container_generic_quadrant,
  schema_site_editor_default_root_app_badge_custom,
  schema_site_editor_default_screen_config_container,
  schema_site_editor_default_screen_config_position
} from '../../../src/_interfaces'
import { T_schema_quadrant_name } from '../../../src/_interfaces/_schema-types'

export const mock_schema_default_collection_flags_id_product = (idProduct: string | number): schema_site_editor_default_collection_flags => {
  return {
    __editorItemTitle: "id produto",
    priority: "0",
    isActive: true,
    _screen_config_links: [
      {
        __editorItemTitle: "Configurações",
        linksByProduct: [
          {
            _: "Atenção!",
            value: 26

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

export const mock_schema_default_priorirty_config_container = (): [schema_site_editor_default_screen_config_container] => {
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

export const mock_schema_default_QuadrantStyles = (): [schema_site_editor_default_screen_config_position] => {
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
    _screen_config_position: mock_schema_default_QuadrantStyles(),
    _screen_config_priority: mock_schema_default_priorirty_config_container()
  }
}

export const mock_default_quadrant_base_to_filter_collections = (mock_quadrant: T_schema_quadrant_name, mock_collection: schema_site_editor_default_collection_flags[]): schema_site_editor_default_container_generic_quadrant => {
  return {
    __editorItemTitle: mock_quadrant,
    collection: [
      ...mock_collection
    ],
    _screen_config_position: mock_schema_default_QuadrantStyles(),
    _screen_config_priority: mock_schema_default_priorirty_config_container()
  }
}

export const mock_default_quadrant_to_filter_collections = (...mock_quadrant: Array<Partial<Record<T_schema_quadrant_name, schema_site_editor_default_container_generic_quadrant>>>): schema_site_editor_default_root_app_badge_custom => {
  return {
    quadrantBottom: null,
    quadrantTopLeft: null,
    quadrantTopRight: null,
    ...mock_quadrant[0]
  }
}

export const patchs_to_match_refined_with_quadrant_on_filter = (): any => {
  return {
    quadrantRight: {
      brandId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight?.[0].collection[0],

        value: 2000000,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.brandId
      },
      categoryId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight?.[0].collection[1],

        value: 54,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.categoryId
      },
      productId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight?.[0].collection[2],

        value: 26,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.productId
      },
      listOfCollections: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight?.[0].collection[3],

        value: 143,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.listOfCollections.find(collection => collection.id === '143')
      },
      listOfVariations: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight?.[0].collection[4],

        name: 'Cor',
        value: 'Vermelho',
        matchByValueOnRefinedData: mock_refined_data_on_product_context.listOfVariations.find(variation => variation.name === 'Cor' && variation.values[0] === 'Vermelho')
      },
      listOfProductFields: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopRight?.[0].collection[5],

        name: 'Voltagem',
        value: '220',
        matchByValueOnRefinedData: mock_refined_data_on_product_context.listOfProductFields.find(variation => variation.name === 'Voltagem' && variation.values[0] === '220')
      }
    },
    quadrantLeft: {
      productId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantTopLeft?.[0].collection[0],

        value: 26,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.productId
      }
    },
    quadrantBottom: {
      productId: {
        pathCurrentQuadrant: mock_schema_default_root_app().quadrantBottom?.[0].collection[0],

        value: 26,
        matchByValueOnRefinedData: mock_refined_data_on_product_context.productId
      }
    }
  }
}

export const mock_schema_default_root_app = (): schema_site_editor_default_root_app_badge_custom => ({
  quadrantTopRight:
 [{
   __editorItemTitle: "Quadrante - Direita",
   collection: [
     {
       __editorItemTitle: "id marca",
       priority: "0",
       isActive: true,
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByBrand: [
             {
               _: "Atenção!",
               value: 2000000

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
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByCategory: [
             {
               _: "Atenção!",

               value: 54
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
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByProduct: [
             {
               _: "Atenção!",
               value: 26

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
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByCollection: [
             {
               _: "Atenção!",
               value: 143

             },
             {
               _: "Atenção!",
               value: 147

             },
             {
               _: "Atenção!",
               value: 139

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
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByVariation: [
             {
               _: "Atenção!",
               name: "Cor",
               value: "Vermelho"

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
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksBySpecification: [
             {
               _: "Atenção!",
               name: "Voltagem",
               value: "220"

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
   _screen_config_position: [
     {
       __editorItemTitle: "Configurações",
       horizontalDistance: "10px",
       positionFlow: "center",
       verticalDistance: "10px"
     }
   ],
   _screen_config_priority: [
     {
       __editorItemTitle: "Configurações",
       _: "Priridade por Campo",
       _2: "Prioridade Por Ordem Da Lista",
       prioritySystemOnQuadrant: "priorityByList",
       isInverted: false
     }
   ]
 }],
  quadrantTopLeft:
  [{
    __editorItemTitle: "Quadrante - Esquerda",
    collection: [
      {
        __editorItemTitle: "item 1 - prioridade 1",
        priority: '1',
        isActive: true,
        _screen_config_links: [
          {
            __editorItemTitle: "Configurações",
            linksByCollection: [],
            linksByBrand: [],
            linksByProduct: [
              {
                _: "Atenção!",
                value: 26

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
        _screen_config_links: [
          {
            __editorItemTitle: "Configurações",
            linksByCollection: [],
            linksByBrand: [],
            linksByProduct: [
              {
                _: "Atenção!",
                value: 26

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
        _screen_config_links: [
          {
            __editorItemTitle: "Configurações",
            linksByCollection: [],
            linksByBrand: [],
            linksByProduct: [
              {
                _: "Atenção!",
                value: 26

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
        _screen_config_links: [
          {
            __editorItemTitle: "Configurações",
            linksByCollection: [],
            linksByBrand: [],
            linksByProduct: [
              {
                _: "Atenção!",
                value: 26

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
        _screen_config_links: [
          {
            __editorItemTitle: "Configurações",
            linksByCollection: [],
            linksByBrand: [],
            linksByProduct: [
              {
                _: "Atenção!",
                value: 26

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
    _screen_config_position: [
      {
        __editorItemTitle: "Configurações",
        horizontalDistance: "10px",
        positionFlow: "center",
        verticalDistance: "10px"
      }
    ],
    _screen_config_priority: [
      {
        __editorItemTitle: "Configurações",
        _: "Priridade por Campo",
        _2: "Prioridade Por Ordem Da Lista",
        prioritySystemOnQuadrant: "priorityByField",
        isInverted: false
      }
    ]
  }],
  quadrantBottom:
 [{
   __editorItemTitle: "Quadrante - Inferior",
   collection: [
     {
       __editorItemTitle: "Vinculação 1 - id produto",
       typeContent: "createContent",
       priority: '0',
       isActive: true,
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByProduct: [
             {
               _: "Atenção!",
               value: 26

             }
           ],
           linksByCollection: [],
           linksBySpecification: [],
           linksByVariation: [],
           linksByCategory: [],
           linksByBrand: []
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
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByProduct: [],
           linksByCollection: [],
           linksBySpecification: [],
           linksByVariation: [],
           linksByCategory: [
             {
               _: "Atenção!",

               value: 54
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
       _screen_config_links: [
         {
           __editorItemTitle: "Configurações",
           linksByProduct: [],
           linksByCollection: [],
           linksBySpecification: [],
           linksByVariation: [],
           linksByCategory: [],
           linksByBrand: [
             {
               _: "Atenção!",
               value: 2000000

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
   _screen_config_position: [
     {
       __editorItemTitle: "Configurações",
       horizontalDistance: "10px",
       positionFlow: "center",
       verticalDistance: "10px"
     }
   ],
   _screen_config_priority: [
     {
       __editorItemTitle: "Configurações",
       _: "Priridade por Campo",
       _2: "Prioridade Por Ordem Da Lista",
       prioritySystemOnQuadrant: "priorityByField",
       isInverted: false
     }
   ]
 }]

})