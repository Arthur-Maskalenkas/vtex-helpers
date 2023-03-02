import { FilterLinks } from '../../src/filter-links/filter-links'
import { MatchByCollection } from '../../src/filter-links/matchers/match-by-collection'
import { MatchByProduct } from '../../src/filter-links/matchers/match-by-product'
import {
  DataRefined,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_option_content
} from '../../src/_interfaces'
import { MatchBySpecification } from '../../src/filter-links/matchers/match-by-specification'
import { MatchByBrand, MatchByCategory, MatchByVariation } from '../../src/filter-links'
import { TextReplacer } from '../../src/text-replacer/text-replacer'

type SutTypes = {
  sut: FilterLinks
}

const makeSut = (refinedData: DataRefined = {}): SutTypes => {
  const matchByCollection = new MatchByCollection()
  const matchBySpecification = new MatchBySpecification()
  const matchByVariation = new MatchByVariation()

  const matchByProduct = new MatchByProduct()
  const matchByCategory = new MatchByCategory()
  const matchByBrand = new MatchByBrand()

  const textReplacer = new TextReplacer()

  const sut = new FilterLinks([matchByCollection, matchByProduct, matchBySpecification,matchByVariation,matchByCategory,matchByBrand],refinedData,textReplacer)

  return {
    sut
  }
}

describe('FilterLinks', () => {
  it('Should return all HTML default and data matcheds', () => {
    const mock_refined_data: DataRefined = {
      product: {
        name: 'product_match_name_1',
        value: 'product_match_value_1'
      },

      brand: {
        name: 'brand_match_name_1',
        value: 'brand_match_value_1'
      },

      category: {
        name: 'category_match_name_1',
        value: 'category_match_value_1'
      },

      collection: [
        {
          name: 'collection_match_name_1',
          value: 'collection_match_value_1'
        },
        {
          name: 'collection_match_name_1',
          value: 'collection_match_value_2'
        }
      ],

      specification: [
        {
          name: 'specification_match_name_1',
          value: ['specification_match_value_1','specification_match_value_2']
        }
      ],

      variation: [
        {
          name: 'variation_match_name_1',
          value: ['variation_match_value_1','variation_match_value_2']
        }
      ]

    }

    const mock_link: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByProduct: [
            {
              value: 'product_match_value_1'
            }
          ],

          linksByCategory: [
            {
              value: 'category_match_value_1'
            }
          ],

          linksByBrand: [
            {
              value: 'brand_match_value_1'
            }
          ],

          linksByCollection: [
            {
              name: 'collection_match_name_1',
              value: 'collection_match_value_1'
            },
            {
              name: 'collection_match_name_1',
              value: 'collection_match_value_2'
            }
          ],

          linksBySpecification: [
            {
              name: 'specification_match_name_1',
              value: 'specification_match_value_1'
            },

            {
              name: 'specification_match_name_1',
              value: 'specification_match_value_2'
            }
          ],

          linksByVariation: [
            {
              name: 'variation_match_name_1',
              value: 'variation_match_value_1'
            },

            {
              name: 'variation_match_name_1',
              value: 'variation_match_value_2'
            }
          ]
        }
      ]
    }

    const { sut } = makeSut(mock_refined_data)
    const result = sut.filter(mock_link)

    const mock_result = {
      HTMLMatch: {
        "data-custom--match-by-product-attr--value-product_match_value_1": true,

        "data-custom--match-by-brand-attr--value-brand_match_value_1": true,

        "data-custom--match-by-category-attr--value-category_match_value_1": true,

        "data-custom--match-by-collection-attr--value-collection_match_value_1": true,
        "data-custom--match-by-collection-attr--value-collection_match_value_2": true,

        "data-custom--match-by-specification-attr--name-specification_match_name_1--value-specification_match_value_1": true,
        "data-custom--match-by-specification-attr--name-specification_match_name_1--value-specification_match_value_2": true,

        "data-custom--match-by-variation-attr--name-variation_match_name_1--value-variation_match_value_1": true,
        "data-custom--match-by-variation-attr--name-variation_match_name_1--value-variation_match_value_2": true,

        "data-default--link-name-flag-title": true,

        "data-default--match-occurs-by-product-attr": true,
        "data-default--match-occurs-by-brand-attr": true,
        "data-default--match-occurs-by-category-attr": true,
        "data-default--match-occurs-by-collection-attr": true,
        "data-default--match-occurs-by-specification-attr": true,
        "data-default--match-occurs-by-variation-attr": true,

        "data-default--priority-value-0": true,
        "data-default--type-content-image": true,
        "data-default--variant-value-variant-3": true
      }
    }

    expect(result.HTMLMatch).toStrictEqual(mock_result.HTMLMatch)
  })

  it('Should return only flags with props "isActive:true', () => {
    const mock_refined_data: DataRefined = {
      product: {
        name: 'product_match_name_1',
        value: 'product_match_value_1'
      },

      brand: {
        name: 'brand_match_name_1',
        value: 'brand_match_value_1'
      },

      category: {
        name: 'category_match_name_1',
        value: 'category_match_value_1'
      }
    }

    const mock_link_match_product: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByProduct: [
            {
              value: 'product_match_value_1'
            }
          ]
        }
      ]
    }

    const mock_link_not_match_brand: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: false,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByBrand: [
            {
              value: 'brand_match_value_1'
            }
          ]
        }
      ]
    }

    const mock_link_match_category: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByCategory: [
            {
              value: 'category_match_value_1'
            }
          ]
        }
      ]
    }

    const listOfLinks = [mock_link_match_category,mock_link_not_match_brand,mock_link_match_product]

    const { sut } = makeSut(mock_refined_data)

    const result = listOfLinks.map((link) => (sut.filter(link))).filter(Boolean)

    expect(result.length).toBe(2)
  })

  it('Should return only matched flags', () => {
    const mock_refined_data: DataRefined = {
      product: {
        name: 'product_match_name_1',
        value: 'product_match_value_1'
      },

      brand: {
        name: 'brand_match_name_1',
        value: 'brand_match_value_1'
      },

      category: {
        name: 'category_match_name_1',
        value: 'category_match_value_1'
      }
    }

    const mock_link_match_product: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-1',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByProduct: [
            {
              value: 'product_match_value_1'
            }
          ]
        }
      ]
    }

    const mock_link_not_match_brand: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-2',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByBrand: [
            {
              value: 'brand_not_match_value_1'
            }
          ]
        }
      ]
    }

    const mock_link_match_category: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByCategory: [
            {
              value: 'category_match_value_1'
            }
          ]
        }
      ]
    }

    const listOfLinks = [mock_link_match_category,mock_link_not_match_brand,mock_link_match_product]

    const { sut } = makeSut(mock_refined_data)

    const result = listOfLinks.map((link) => (sut.filter(link))).filter(Boolean)

    expect(result.length).toBe(2)
  })

  it('Should return match if option "withoutLink" is active' , () => {
    const mock_refined_data: DataRefined = {
      product: {
        name: 'product_match_name_1',
        value: 'product_match_value_1'
      },

      brand: {
        name: 'brand_match_name_1',
        value: 'brand_match_value_1'
      },

      category: {
        name: 'category_match_name_1',
        value: 'category_match_value_1'
      }
    }

    const mock_link: schema_site_editor_default_collection_flags = {
      __editorItemTitle: "teste 2",
      isActive: true,
      priority: "0",
      _screen_config_links: [
        {}
      ],
      typeContent: "createContent",
      withoutLink: true,
      items: [
        {
          text: "Black Friday",
          fontWeight: "400",
          fontSize: "12px",
          color: "#FFFFFF",
          backgroundColor: "#000000",
          commonPropsBetweenContentAndImage: {
            width: "auto",
            height: "auto"
          }
        }
      ]
    }

    const { sut } = makeSut(mock_refined_data)

    const result = sut.filter(mock_link)

    expect(result?.HTMLMatch).toEqual({
      "data-default--match-occurs-by-option-without-link": true,
      "data-custom--match-by-without-link-option-site-editor--name-teste-2": true,
      "data-default--priority-value-0": true,
      "data-default--type-content-create-content": true,
      "data-default--link-name-teste-2": true
    })
  })

  it('Should return null if any match not occurs', () => {
    const mock_refined_data: DataRefined = {
      product: {
        name: 'product_match_name_1',
        value: 'product_match_value_1'
      },

      brand: {
        name: 'brand_match_name_1',
        value: 'brand_match_value_1'
      },

      category: {
        name: 'category_match_name_1',
        value: 'category_match_value_1'
      }
    }

    const mock_link_match_product: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByProduct: [
            {
              value: 'product_not_match_value_1'
            }
          ]
        }
      ]
    }

    const mock_link_not_match_brand: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByBrand: [
            {
              value: 'brand_not_match_value_1'
            }
          ]
        }
      ]
    }

    const mock_link_match_category: schema_site_editor_default_collection_flags = {
      typeContent: 'image',
      isActive: true,
      variant: 'variant-3',
      priority: '0',
      items: [],
      __editorItemTitle: 'flag title',
      _screen_config_links: [
        {
          linksByCategory: [
            {
              value: 'category_not_match_value_1'
            }
          ]
        }
      ]
    }

    const listOfLinks = [mock_link_match_category,mock_link_not_match_brand,mock_link_match_product]

    const { sut } = makeSut(mock_refined_data)

    const result = listOfLinks.map((link) => (sut.filter(link))).filter(Boolean)

    expect(result).toEqual([])
  })

  describe('text replacer integration', () => {
    it('Should not return link if type is content and text replacer return null', () => {
      const mock_refined_data: DataRefined = {
        product: {
          value: '26'
        },

        price: {
          listPrice: 26.79
        }
      }

      const mock_link_text: schema_site_editor_default_collection_flags = {
        isActive: true,
        priority: "0",
        _screen_config_links: [
          {
            linksByProduct: [
              {
                __editorItemTitle: "Item",
                value: 26
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            text: "sellingPrice=> {sellingPrice}"
          }
        ]
      }

      const { sut } = makeSut(mock_refined_data)

      const result = sut.filter(mock_link_text)

      expect(result).toBeNull()
    })

    it('Should replace {discountInPercentage}', () => {
      const mock_refined_data: DataRefined = {
        product: {
          value: '26'
        },

        price: {
          discountInPercentage: 26.79
        }
      }

      const mock_link_text: schema_site_editor_default_collection_flags = {
        isActive: true,
        priority: "0",
        _screen_config_links: [
          {
            linksByProduct: [
              {
                __editorItemTitle: "Item",
                value: 26
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            text: "desconto em porcentagem: {discountInPercentage}"
          }
        ]
      }

      const { sut } = makeSut(mock_refined_data)

      const result = sut.filter(mock_link_text)

      expect((result.items as schema_site_editor_default_option_content[])?.[0]?.text).toBe('desconto em porcentagem: 26')
    })

    it('Should replace {discountInValue}', () => {
      const mock_refined_data: DataRefined = {
        product: {
          value: '26'
        },

        price: {
          discountInValue: 13.52
        }
      }

      const mock_link_text: schema_site_editor_default_collection_flags = {
        isActive: true,
        priority: "0",
        _screen_config_links: [
          {
            linksByProduct: [
              {
                __editorItemTitle: "Item",
                value: 26
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            text: "desconto em value: {discountInValue}"
          }
        ]
      }

      const { sut } = makeSut(mock_refined_data)

      const result = sut.filter(mock_link_text)

      expect((result.items as schema_site_editor_default_option_content[])?.[0]?.text).toBe('desconto em value: 13.52')
    })

    it('Should replace {listPrice}', () => {
      const mock_refined_data: DataRefined = {
        product: {
          value: '26'
        },

        price: {
          listPrice: 50.47
        }
      }

      const mock_link_text: schema_site_editor_default_collection_flags = {
        isActive: true,
        priority: "0",
        _screen_config_links: [
          {
            linksByProduct: [
              {
                __editorItemTitle: "Item",
                value: 26
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            text: "valor em list price: {listPrice}"
          }
        ]
      }

      const { sut } = makeSut(mock_refined_data)

      const result = sut.filter(mock_link_text)

      expect((result.items as schema_site_editor_default_option_content[])?.[0]?.text).toBe('valor em list price: 50.47')
    })

    it('Should replace {sellingPrice}', () => {
      const mock_refined_data: DataRefined = {
        product: {
          value: '26'
        },

        price: {
          sellingPrice: 36.95

        }
      }

      const mock_link_text: schema_site_editor_default_collection_flags = {
        isActive: true,
        priority: "0",
        _screen_config_links: [
          {
            linksByProduct: [
              {
                __editorItemTitle: "Item",
                value: 26
              }
            ]
          }
        ],
        typeContent: "createContent",
        items: [
          {
            text: "selling price: {sellingPrice}"
          }
        ]
      }

      const { sut } = makeSut(mock_refined_data)

      const result = sut.filter(mock_link_text)

      expect((result.items as schema_site_editor_default_option_content[])?.[0]?.text).toBe('selling price: 36.95')
    })
  })
})