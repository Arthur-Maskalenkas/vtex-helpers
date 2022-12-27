import { schema_site_editor_default_collection_flags } from '../../../src/remap-schema/_interfaces'

export const mock_real_data_quadrant_right_1: schema_site_editor_default_collection_flags[] = [
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
            value: 489
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
          width: "140px",
          height: "15px"
        },
        borderRadius: "0px"
      }
    ]
  },
  {
    __editorItemTitle: "id categoria",
    priority: "0",
    isActive: true,
    _screen_config_links: [
      {
        __editorItemTitle: "Configurações",
        linksByCategory: [
          {
            _: "Atenção!",

            value: 496
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
          height: "15px"
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
            value: 4890013

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
          width: "140px",
          height: "15px"
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
          height: "15px"
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
          height: "15px"
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
            name: "Nível de Conforto",
            value: "Médio"

          },
          {
            _: "Atenção!",
            name: "lugares",
            value: "3 lugares"

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
          width: "140px",
          height: "15px"
        }
      }
    ]
  }
]

export const mock_real_data_refined_1 = {
  brandId: 489,
  categoryId: "496",
  productId: "4890013",
  listOfCollections: [],
  listOfVariations: [],
  listOfProductFields: [
    {
      name: "Tipo de Mola",
      originalName: "Tipo de Mola",
      values: [
        "Pocket"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "Nível de Conforto",
      originalName: "Nível de Conforto",
      values: [
        "Médio"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "Biotipo Adequado (Kg)",
      originalName: "Biotipo Adequado (Kg)",
      values: [
        "100"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "EPS",
      originalName: "EPS",
      values: [
        "Não"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "Tampo (Tecido e Gramatura)",
      originalName: "Tampo (Tecido e Gramatura)",
      values: [
        "Malha"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "Tecido da Faixa Lateral",
      originalName: "Tecido da Faixa Lateral",
      values: [
        "Poliéster"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "Tipo de Pillow Top",
      originalName: "Tipo de Pillow Top",
      values: [
        "Euro Pillow"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "tipo de tecido",
      originalName: "tipo de tecido",
      values: [
        "veludo"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "lugares",
      originalName: "lugares",
      values: [
        "3 lugares"
      ],
      __typename: "SpecificationGroupProperty"
    },
    {
      name: "sellerId",
      originalName: "sellerId",
      values: [
        "1"
      ],
      __typename: "SpecificationGroupProperty"
    }
  ]
}

export const mock_real_data_result_1 = [
  {
    __editorItemTitle: "id marca",
    priority: "0",
    isActive: true,
    typeContent: "createContent",
    items: [
      {
        __editorItemTitle: "Configurações",
        text: "id marca",
        fontWeight: "200",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        commonPropsBetweenContentAndImage: {
          width: "140px",
          height: "15px"
        },
        borderRadius: "0px"
      }
    ],
    HTMLMatch: {
      "data-custom--match-by-brand-attr--value-489": true,
      "data-default--match-occurs-by-brand-attr": true,
      "data-default--priority-value-0": true,
      "data-default--type-content-create-content": true,
      "data-default--link-name-id-marca": true,
      "data-default--variant-value-variant-1": true
    }
  },
  {
    __editorItemTitle: "id categoria",
    priority: "0",
    isActive: true,
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
          height: "15px"
        }
      }
    ],
    HTMLMatch: {
      "data-custom--match-by-category-attr--value-496": true,
      "data-default--match-occurs-by-category-attr": true,
      "data-default--priority-value-0": true,
      "data-default--type-content-create-content": true,
      "data-default--link-name-id-categoria": true,
      "data-default--variant-value-variant-1": true
    }
  },
  {
    __editorItemTitle: "id produto",
    priority: "0",
    isActive: true,
    typeContent: "createContent",
    items: [
      {
        __editorItemTitle: "Configurações",
        text: "id produto",
        fontWeight: "400",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        commonPropsBetweenContentAndImage: {
          width: "140px",
          height: "15px"
        }
      }
    ],
    HTMLMatch: {
      "data-custom--match-by-product-attr--value-4890013": true,
      "data-default--match-occurs-by-product-attr": true,
      "data-default--priority-value-0": true,
      "data-default--type-content-create-content": true,
      "data-default--link-name-id-produto": true,
      "data-default--variant-value-variant-1": true
    }
  },
  null,
  null,
  {
    __editorItemTitle: "campo de produto",
    priority: "0",
    isActive: true,
    typeContent: "createContent",
    items: [
      {
        __editorItemTitle: "Configurações",
        text: "Campo De Produto",
        fontWeight: "400",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        commonPropsBetweenContentAndImage: {
          width: "140px",
          height: "15px"
        }
      }
    ],
    HTMLMatch: {
      "data-custom--match-by-specification-attr--name-nivel-de-conforto--value-medio": true,
      "data-custom--match-by-specification-attr--name-lugares--value-3-lugares": true,
      "data-default--match-occurs-by-specification-attr": true,
      "data-default--priority-value-0": true,
      "data-default--type-content-create-content": true,
      "data-default--link-name-campo-de-produto": true,
      "data-default--variant-value-variant-1": true
    }
  }
]