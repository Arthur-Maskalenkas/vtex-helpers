import { ProductContextState } from '../../../src/remap-schema/_interfaces/product-context/_product-context'
import { DataRefined } from '../../../src/remap-schema/_interfaces'
import { product_context_root } from '../../../src/remap-schema/_interfaces/product-context/custom_context'

export const get_mock = (): DataRefined => ({
  brand: {
    name: "Avanti Fashion",
    value: "2000000"
  },

  category: {
    name: null,
    value: "54"
  },

  product: {
    name: "Toalha Trou Angel Rosto - Branco - 48X90",
    value: "26"
  },

  collection: [
    {
      name: "Sale",
      value: "139"
    },
    {
      name: "Novidade",
      value: "142"
    },
    {
      name: "Inovação",
      value: "143"
    },
    {
      name: "Produtos Kits",
      value: "147"
    }
  ],

  variation: [
    {
      name: "Cor",
      value: [
        "Vermelho"
      ]
    },
    {
      name: "Tamanho",
      value: [
        "P"
      ]
    },
    {
      name: "activeSubscriptions",
      value: [
        "assinatura2"
      ]
    }
  ],

  specification: [
    {
      name: "Voltagem",
      value: [
        "220"
      ],
      refGroup: "Especificações"
    },
    {
      name: "Porte",
      value: [
        "Médio"
      ],
      refGroup: "Especificações"
    },
    {
      name: "Indicação",
      value: [
        "Com queda"
      ],
      refGroup: "Especificações"
    },
    {
      name: "Capacidade",
      value: [
        "128GB"
      ],
      refGroup: "Especificações"
    },
    {
      name: "Composição",

      value: [
        "100% Poliuretano"
      ],
      refGroup: "Descrição"
    },
    {
      name: "Forro",
      value: [
        "100% Poliéster"
      ],
      refGroup: "Descrição"
    },
    {
      name: "Indicação de uso",
      value: [
        "uma indicação de uso teste"
      ],
      refGroup: "Descrição"
    }

  ],

  seller: {
    name: "Avanti Desenvolvimento de Sistemas Ltda - ME Capital Social",
    value: "1"
  },

  price: {
    listPrice: 50.47,
    sellingPrice: 36.95,
    discountInPercentage: 26.79,
    discountInValue: 13.52
  }
})

export const mock_product_context = {
  loadingItem: false,
  product: {
    cacheId: "sp-26",
    productId: "26",
    description: "",
    productName: "Toalha Trou Angel Rosto - Branco - 48X90",
    productReference: "",
    linkText: "jogo-de-banho-padrao-fantastique-03-02-0072-p41525",
    brand: "Avanti Fashion",
    brandId: 2000000,
    link: "/jogo-de-banho-padrao-fantastique-03-02-0072-p41525/p",
    categories: [
      "/Woman/"
    ],
    categoryId: "54",
    priceRange: {
      sellingPrice: {
        highPrice: get_mock().price.sellingPrice,
        lowPrice: get_mock().price.sellingPrice,
        __typename: "PriceRange"
      },
      listPrice: {
        highPrice: get_mock().price.listPrice,
        lowPrice: get_mock().price.listPrice,
        __typename: "PriceRange"
      },
      __typename: "ProductPriceRange"
    },
    specificationGroups: [
      {
        name: "Especificações",
        originalName: "Especificações",
        specifications: [
          {
            name: "Voltagem",
            originalName: "Voltagem",
            values: [
              "220"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Porte",
            originalName: "Porte",
            values: [
              "Médio"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Indicação",
            originalName: "Indicação",
            values: [
              "Com queda"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Capacidade",
            originalName: "Capacidade",
            values: [
              "128GB"
            ],
            __typename: "SpecificationGroupProperty"
          }
        ],
        __typename: "SpecificationGroup"
      },
      {
        name: "Descrição",
        originalName: "Descrição",
        specifications: [
          {
            name: "Composição",
            originalName: "Composição",
            values: [
              "100% Poliuretano"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Forro",
            originalName: "Forro",
            values: [
              "100% Poliéster"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Indicação de uso",
            originalName: "Indicação de uso",
            values: [
              "uma indicação de uso teste"
            ],
            __typename: "SpecificationGroupProperty"
          }
        ],
        __typename: "SpecificationGroup"
      },
      {
        name: "allSpecifications",
        originalName: "allSpecifications",
        specifications: [
          {
            name: "Voltagem",
            originalName: "Voltagem",
            values: [
              "220"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Porte",
            originalName: "Porte",
            values: [
              "Médio"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Indicação",
            originalName: "Indicação",
            values: [
              "Com queda"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Capacidade",
            originalName: "Capacidade",
            values: [
              "128GB"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Composição",
            originalName: "Composição",
            values: [
              "100% Poliuretano"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Forro",
            originalName: "Forro",
            values: [
              "100% Poliéster"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Indicação de uso",
            originalName: "Indicação de uso",
            values: [
              "uma indicação de uso teste"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Cor",
            originalName: "Cor",
            values: [
              "Vermelho"
            ],
            __typename: "SpecificationGroupProperty"
          },
          {
            name: "Tamanho",
            originalName: "Tamanho",
            values: [
              "P"
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
        ],
        __typename: "SpecificationGroup"
      }
    ],
    skuSpecifications: [
      {
        field: {
          name: "Cor",
          originalName: "Cor",
          __typename: "SKUSpecificationField"
        },
        values: [
          {
            name: "Vermelho",
            originalName: "Vermelho",
            __typename: "SKUSpecificationValue"
          }
        ],
        __typename: "SkuSpecification"
      },
      {
        field: {
          name: "Tamanho",
          originalName: "Tamanho",
          __typename: "SKUSpecificationField"
        },
        values: [
          {
            name: "P",
            originalName: "P",
            __typename: "SKUSpecificationValue"
          }
        ],
        __typename: "SkuSpecification"
      }
    ],
    productClusters: [
      {
        id: "139",
        name: "Sale",
        __typename: "ProductClusters"
      },
      {
        id: "142",
        name: "Novidade",
        __typename: "ProductClusters"
      },
      {
        id: "143",
        name: "Inovação",
        __typename: "ProductClusters"
      },
      {
        id: "147",
        name: "Produtos Kits",
        __typename: "ProductClusters"
      }
    ],
    clusterHighlights: [
      {
        id: "139",
        name: "Sale",
        __typename: "ClusterHighlight"
      },
      {
        id: "142",
        name: "Novidade",
        __typename: "ClusterHighlight"
      },
      {
        id: "143",
        name: "Inovação",
        __typename: "ClusterHighlight"
      },
      {
        id: "147",
        name: "Produtos Kits",
        __typename: "ClusterHighlight"
      }
    ],
    properties: [
      {
        name: "Voltagem",
        values: [
          "220"
        ],
        __typename: "Property"
      },
      {
        name: "Porte",
        values: [
          "Médio"
        ],
        __typename: "Property"
      },
      {
        name: "Indicação",
        values: [
          "Com queda"
        ],
        __typename: "Property"
      },
      {
        name: "Capacidade",
        values: [
          "128GB"
        ],
        __typename: "Property"
      },
      {
        name: "Composição",
        values: [
          "100% Poliuretano"
        ],
        __typename: "Property"
      },
      {
        name: "Forro",
        values: [
          "100% Poliéster"
        ],
        __typename: "Property"
      },
      {
        name: "Indicação de uso",
        values: [
          "uma indicação de uso teste"
        ],
        __typename: "Property"
      },
      {
        name: "Cor",
        values: [
          "Vermelho"
        ],
        __typename: "Property"
      },
      {
        name: "Tamanho",
        values: [
          "P"
        ],
        __typename: "Property"
      },
      {
        name: "sellerId",
        values: [
          "1"
        ],
        __typename: "Property"
      }
    ],
    __typename: "Product",
    items: [
      {
        itemId: "213",
        name: "Toalha Trou Angel Rosto - Branco - 48X90",
        nameComplete: "Toalha Trou Angel Rosto - Branco - 48X90",
        complementName: "",
        ean: "3456978",
        variations: [
          {
            name: "Cor",
            values: [
              "Vermelho"
            ],
            __typename: "Property"
          },
          {
            name: "Tamanho",
            values: [
              "P"
            ],
            __typename: "Property"
          },
          {
            name: "activeSubscriptions",
            values: [
              "assinatura2"
            ],
            __typename: "Property"
          }
        ],
        referenceId: [
          {
            Key: "RefId",
            Value: "88111",
            __typename: "Reference"
          }
        ],
        measurementUnit: "un",
        unitMultiplier: 1,
        images: [
          {
            cacheId: "155499",
            imageId: "155499",
            imageLabel: "",
            imageTag: "",
            imageUrl: "https://avantiimplantacao.vtexassets.com/arquivos/ids/155499/image-9915f727bff747c2a71a0da39af3c212.jpg?v=1758113564",
            imageText: "",
            __typename: "Image"
          }
        ],
        __typename: "SKU",
        sellers: [
          {
            sellerId: "1",
            sellerName: "Avanti Desenvolvimento de Sistemas Ltda - ME Capital Social",
            sellerDefault: true,
            __typename: "Seller",
            commertialOffer: {
              discountHighlights: [
                {
                  name: "30% cartão",
                  __typename: "Discount"
                }
              ],
              teasers: [],
              Price: 36.75,
              ListPrice: 52.5,
              Tax: 0,
              taxPercentage: 0,
              spotPrice: 36.75,
              PriceWithoutDiscount: 52.5,
              RewardValue: 0,
              PriceValidUntil: "2023-12-28T20:12:01Z",
              AvailableQuantity: 10000,
              __typename: "Offer",
              Installments: [
                {
                  Value: 6.12,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 36.75,
                  NumberOfInstallments: 6,
                  Name: "Visa 6 vezes sem juros",
                  PaymentSystemName: "Visa",
                  __typename: "Installment"
                }
              ]
            }
          }
        ]
      }
    ],
    selectedProperties: null,
    rule: null,
    sku: {
      itemId: "213",
      name: "Toalha Trou Angel Rosto - Branco - 48X90",
      nameComplete: "Toalha Trou Angel Rosto - Branco - 48X90",
      complementName: "",
      ean: "3456978",
      variations: [
        {
          name: "Cor",
          values: [
            "Vermelho"
          ],
          __typename: "Property"
        },
        {
          name: "Tamanho",
          values: [
            "P"
          ],
          __typename: "Property"
        },
        {
          name: "activeSubscriptions",
          values: [
            "assinatura2"
          ],
          __typename: "Property"
        }
      ],
      referenceId: {
        Key: "RefId",
        Value: "88111",
        __typename: "Reference"
      },
      measurementUnit: "un",
      unitMultiplier: 1,
      images: [
        {
          cacheId: "155499",
          imageId: "155499",
          imageLabel: "",
          imageTag: "",
          imageUrl: "https://avantiimplantacao.vtexassets.com/arquivos/ids/155499-500-auto?v=1758113564&width=500&height=auto&aspect=true",
          imageText: "",
          __typename: "Image"
        }
      ],
      __typename: "SKU",
      sellers: [
        {
          sellerId: "1",
          sellerName: "Avanti Desenvolvimento de Sistemas Ltda - ME Capital Social",
          sellerDefault: true,
          __typename: "Seller",
          commertialOffer: {
            discountHighlights: [
              {
                name: "30% cartão",
                __typename: "Discount"
              }
            ],
            teasers: [],
            Price: 36.75,
            ListPrice: 52.5,
            Tax: 0,
            taxPercentage: 0,
            spotPrice: 36.75,
            PriceWithoutDiscount: 52.5,
            RewardValue: 0,
            PriceValidUntil: "2023-12-28T20:12:01Z",
            AvailableQuantity: 10000,
            __typename: "Offer",
            Installments: [
              {
                Value: 6.12,
                InterestRate: 0,
                TotalValuePlusInterestRate: 36.75,
                NumberOfInstallments: 6,
                Name: "Visa 6 vezes sem juros",
                PaymentSystemName: "Visa",
                __typename: "Installment"
              }
            ]
          }
        }
      ],
      seller: {
        sellerId: "1",
        sellerName: "Avanti Desenvolvimento de Sistemas Ltda - ME Capital Social",
        sellerDefault: true,
        __typename: "Seller",
        commertialOffer: {
          discountHighlights: [
            {
              name: "30% cartão",
              __typename: "Discount"
            }
          ],
          teasers: [],
          Price: 36.75,
          ListPrice: 52.5,
          Tax: 0,
          taxPercentage: 0,
          spotPrice: 36.75,
          PriceWithoutDiscount: 52.5,
          RewardValue: 0,
          PriceValidUntil: "2023-12-28T20:12:01Z",
          AvailableQuantity: 10000,
          __typename: "Offer",
          Installments: [
            {
              Value: 6.12,
              InterestRate: 0,
              TotalValuePlusInterestRate: 36.75,
              NumberOfInstallments: 6,
              Name: "Visa 6 vezes sem juros",
              PaymentSystemName: "Visa",
              __typename: "Installment"
            }
          ]
        }
      },
      image: {
        cacheId: "155499",
        imageId: "155499",
        imageLabel: "",
        imageTag: "",
        imageUrl: "https://avantiimplantacao.vtexassets.com/arquivos/ids/155499-500-auto?v=1758113564&width=500&height=auto&aspect=true",
        imageText: "",
        __typename: "Image"
      }
    }
  },
  selectedItem: {
    itemId: "213",
    name: "Toalha Trou Angel Rosto - Branco - 48X90",
    nameComplete: "Toalha Trou Angel Rosto - Branco - 48X90",
    complementName: "",
    ean: "3456978",
    variations: [
      {
        name: "Cor",
        values: [
          "Vermelho"
        ],
        __typename: "Property"
      },
      {
        name: "Tamanho",
        values: [
          "P"
        ],
        __typename: "Property"
      },
      {
        name: "activeSubscriptions",
        values: [
          "assinatura2"
        ],
        __typename: "Property"
      }
    ],
    referenceId: [
      {
        Key: "RefId",
        Value: "88111",
        __typename: "Reference"
      }
    ],
    measurementUnit: "un",
    unitMultiplier: 1,
    images: [
      {
        cacheId: "155499",
        imageId: "155499",
        imageLabel: "",
        imageTag: "",
        imageUrl: "https://avantiimplantacao.vtexassets.com/arquivos/ids/155499/image-9915f727bff747c2a71a0da39af3c212.jpg?v=1758113564",
        imageText: "",
        __typename: "Image"
      }
    ],
    __typename: "SKU",
    sellers: [
      {
        sellerId: "1",
        sellerName: "Avanti Desenvolvimento de Sistemas Ltda - ME Capital Social",
        sellerDefault: true,
        __typename: "Seller",
        commertialOffer: {
          discountHighlights: [
            {
              name: "30% cartão",
              __typename: "Discount"
            }
          ],
          teasers: [],
          Price: 36.75,
          ListPrice: 52.5,
          Tax: 0,
          taxPercentage: 0,
          spotPrice: 36.75,
          PriceWithoutDiscount: 52.5,
          RewardValue: 0,
          PriceValidUntil: "2023-12-28T20:12:01Z",
          AvailableQuantity: 10000,
          __typename: "Offer",
          Installments: [
            {
              Value: 6.12,
              InterestRate: 0,
              TotalValuePlusInterestRate: 36.75,
              NumberOfInstallments: 6,
              Name: "Visa 6 vezes sem juros",
              PaymentSystemName: "Visa",
              __typename: "Installment"
            }
          ]
        }
      }
    ]
  },
  selectedQuantity: 1,
  skuSelector: {
    selectedImageVariationSKU: null,
    isVisible: false,
    areAllVariationsSelected: true
  },
  buyButton: {
    clicked: false
  },
  assemblyOptions: {
    items: {},
    inputValues: {},
    areGroupsValid: {}
  }
} as any as product_context_root