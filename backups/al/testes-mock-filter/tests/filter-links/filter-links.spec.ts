import { FilterLinks } from '../../src/filter-links/filter-links'
import { MatchByCollection } from '../../src/filter-links/matchers/match-by-collection'
import { MatchByProduct } from '../../src/filter-links/matchers/match-by-product'
import { DataRefined, schema_site_editor_default_collection_flags } from '../../src/_interfaces'
import { MatchBySpecification } from '../../src/filter-links/matchers/match-by-specification'

type SutTypes = {
  sut: FilterLinks
}

const makeSut = (refinedData: DataRefined = {}): SutTypes => {
  const matchByCollection = new MatchByCollection()
  const matchByProduct = new MatchByProduct()
  const matchBySpecification = new MatchBySpecification()

  const sut = new FilterLinks([matchByCollection, matchByProduct, matchBySpecification],refinedData)

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
          name: 'collection_match_name_2',
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
          value: ['variation_match_value_1','specification_match_value_2']
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
          linksByCollection: [
            {
              name: 'collection_match_name_1',
              value: 'collection_match_value_1'
            },
            {
              name: 'collection_match_name_1',
              value: 'collection_match_value_1'
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
        "data-custom--match-by-collection-attr--value-collection_match_value_1": true,
        "data-default--link-name-flag-title": true,
        "data-default--match-occurs-by-collection-attr": true,
        "data-default--match-occurs-by-product-attr": true,
        "data-default--priority-value-0": true,
        "data-default--type-content-image": true,
        "data-default--variant-value-variant-3": true
      }
    }

    expect(result.HTMLMatch).toStrictEqual(mock_result.HTMLMatch)
  })
})