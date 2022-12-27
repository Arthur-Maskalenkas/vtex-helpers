import {
  mock_default_quadrant_base_to_filter_collections,
  mock_schema_default_root_app,
  patchs_to_match_refined_with_quadrant_on_filter
} from './mocks/schema-site-editor-default'
import { mock_refined_data_on_product_context } from './mocks/refined-data'
import { generateCollection, generateQuadrant, generateRefinedData } from './mocks/remap-schema'

import {
  ListOfVariation,
  RefinedDataOnProductContext,
  schema_site_editor_default_root_app_badge_custom,
  schema_site_editor_remapped_custom_quadrant
} from '../../src/remap-schema/_interfaces'
import { RemapSchema } from '../../src/remap-schema/remap-schema'
import { FilterDefaultSchema } from '../../src/filter-default-schema/filter-default-schema'
import { normalizeString } from '../filter-default-schema/_mocks/_default'

type SutTypes = {
  sut: RemapSchema
  FilterMock: FilterDefaultSchema
}

const makeSut = (schema: schema_site_editor_default_root_app_badge_custom | null, refinedDataOnroductContext: RefinedDataOnProductContext = mock_refined_data_on_product_context): SutTypes => {
  const FilterMock = new FilterDefaultSchema(refinedDataOnroductContext)
  const sut = new RemapSchema(schema, FilterMock)

  return {
    sut,
    FilterMock
  }
}

describe('Remap Schema', () => {
  describe('Filter Integration', () => {
    it('Should call Filter with valid collection on quadrant bottom', () => {
      const mock_schema_default = mock_schema_default_root_app()

      const { sut, FilterMock } = makeSut(mock_schema_default)
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')
      sut.remap()
      expect(spyFilter).toHaveBeenCalledWith(mock_schema_default.quadrantBottom.collection[0])
    })

    it('Should call Filter with valid collection on quadrant top left', () => {
      const mock_schema_default = mock_schema_default_root_app()

      const { sut, FilterMock } = makeSut(mock_schema_default)
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')
      sut.remap()
      expect(spyFilter).toHaveBeenCalledWith(mock_schema_default.quadrantTopLeft.collection[0])
    })

    it('Should call Filter with valid collection on quadrant top right', () => {
      const mock_schema_default = mock_schema_default_root_app()
      const { sut, FilterMock } = makeSut(mock_schema_default)
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')
      sut.remap()
      expect(spyFilter).toHaveBeenCalledWith(mock_schema_default.quadrantTopRight.collection[0])
    })

    it('Should call only on valid collection inside quadrants', () => {
      const { quadrantRight: { productId, categoryId } } = patchs_to_match_refined_with_quadrant_on_filter()

      const mock_current_quadrant_top_right = mock_default_quadrant_base_to_filter_collections('Quadrante - Direita', [
        productId.pathCurrentQuadrant
      ])

      const mock_current_quadrant_top_left = mock_default_quadrant_base_to_filter_collections('Quadrante - Esquerda', [
        categoryId.pathCurrentQuadrant
      ])

      const { sut, FilterMock } = makeSut({
        quadrantTopRight: mock_current_quadrant_top_right,
        quadrantTopLeft: mock_current_quadrant_top_left,
        quadrantBottom: null
      })
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')

      sut.remap()

      expect(spyFilter).toHaveBeenCalledWith(mock_current_quadrant_top_right.collection[0])
      expect(spyFilter).toHaveBeenCalledWith(mock_current_quadrant_top_left.collection[0])
      expect(spyFilter).toHaveBeenCalledTimes(2)
      expect(spyFilter).not.toHaveBeenCalledWith(null)
    })

    it('Should return collection if matched', () => {
      const mock_link_id_1 = '1'
      const mock_propertie_1 = 'productId'

      const mock_refined_data = generateRefinedData({
        productId: mock_link_id_1
      })

      const mock_collection_1 = generateCollection({
        title: 'mock-title',

        variant: 'variant-2',
        priority: '50',
        typeContent: 'image',
        isActive: false,
        items: [
          {
            __editorItemTitle: 'any_title',
            backgroundColor: 'any_color',
            color: 'any_color',
            text: 'any_text',
            fontWeight: 'any_weight',
            fontSize: 'any_size',
            borderRadius: 'any_radius',
            commonPropsBetweenContentAndImage: {
              width: 'any_width',
              height: 'any_height'
            }
          }
        ],
        linksContainer: [
          {
            linksByProduct: [
              {

                value: mock_link_id_1
              }
            ]
          }
        ]
      })

      const mock_quadrant = generateQuadrant({
        collections: [
          mock_collection_1
        ]
      })

      const { sut } = makeSut(mock_quadrant, mock_refined_data)

      const result = sut.remap()

      const quadrantoTopRight: schema_site_editor_remapped_custom_quadrant = result.quadrantTopRight

      expect(result.quadrantTopRight.listOfFlags.length).toBeGreaterThan(0)
    })

    it('Should return only collections matched', () => {
      const mock_valid_product_id = '1'
      const mock_invalid_product_id = '1000'

      const mock_valid_brand_id = 1
      const mock_invalid_brand_id = 1000

      const mock_valid_category_id = '1'
      const mock_invalid_category_id = '1000'

      const mock_valid_variation_1 = {
        name: 'mock-name-variation-1',
        values: ['mock-value-1']
      }

      const mock_valid_variation_2 = {
        name: 'mock-name-variation-2',
        values: ['mock-value-2']
      }

      const mock_invalid_variation = {
        name: 'mock-invalid-name-variation-3',
        values: ['mock-value-3']
      }

      const mock_specification_1 = {
        name: 'mock-name-specification-1',
        values: ['mock-value-1']
      }

      const mock_specification_2 = {
        name: 'mock-name-specification-2',
        values: ['mock-value-2']
      }

      const mock_invalid_specification = {
        name: 'mock-invalid-name-specification-3',
        values: ['mock-value-3']
      }

      const mock_valid_collection_1 = {
        name: 'mock-name-collection-1',
        id: '1'
      }

      const mock_valid_collection_2 = {
        name: 'mock-name-collection-2',
        id: '2'
      }

      const mock_invalid_collection = {
        name: 'mock-invalid-name-collection-3',
        id: '1000'
      }

      const mock_refined_data = generateRefinedData({
        productId: mock_valid_product_id,
        brandId: mock_valid_brand_id,
        categoryId: mock_valid_category_id,
        variations: [
          mock_valid_variation_1,
          mock_valid_variation_2
        ],
        productFields: [
          mock_specification_1,
          mock_specification_2
        ],
        collections: [
          mock_valid_collection_1,
          mock_valid_collection_2
        ]
      })

      const mock_valid_collection_by_collection_1 = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByCollection: [
              {

                value: mock_valid_collection_1.id
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_collection_2 = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByCollection: [
              {

                value: mock_valid_collection_2.id
              }
            ]
          }
        ]
      })

      const mock_invalid_collection_by_collection_2 = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByCollection: [
              {

                value: mock_invalid_collection.id
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_variation_1 = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByVariation: [
              {

                name: mock_valid_variation_1.name,
                value: mock_valid_variation_1.values[0]
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_variation_2 = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByVariation: [
              {

                name: mock_valid_variation_2.name,
                value: mock_valid_variation_2.values[0]
              }
            ]
          }
        ]
      })

      const mock_invalid_collection_by_variation = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByVariation: [
              {

                name: mock_invalid_variation.name,
                value: mock_invalid_variation.values[0]
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_specificaton_1 = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksBySpecification: [
              {

                name: mock_specification_1.name,
                value: mock_specification_1.values[0]
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_specificaton_2 = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksBySpecification: [
              {

                name: mock_specification_2.name,
                value: mock_specification_2.values[0]
              }
            ]
          }
        ]
      })

      const mock_invalid_collection_by_specificaton = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksBySpecification: [
              {

                name: mock_invalid_specification.name,
                value: mock_invalid_specification.values[0]
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_product_id = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByProduct: [
              {

                value: mock_valid_product_id
              }
            ]
          }
        ]
      })

      const mock_invalid_collection_by_product_id = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByProduct: [
              {

                value: mock_invalid_product_id
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_category_id = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByCategory: [
              {

                value: mock_valid_category_id
              }
            ]
          }
        ]
      })

      const mock_invalid_collection_by_category_id = generateCollection({
        title: 'mock-title-1',
        items: [],
        linksContainer: [
          {
            linksByCategory: [
              {

                value: mock_invalid_category_id
              }
            ]
          }
        ]
      })

      const mock_valid_collection_by_brand_id = generateCollection({
        title: 'mock-title-2',
        items: [],
        linksContainer: [
          {
            linksByBrand: [
              {

                value: mock_valid_brand_id
              }
            ]
          }
        ]
      })

      const mock_invalid_collection_by_brand_id = generateCollection({
        title: 'mock-title-2',
        items: [],
        linksContainer: [
          {
            linksByBrand: [
              {

                value: mock_invalid_brand_id
              }
            ]
          }
        ]
      })

      const mock_quadrant = generateQuadrant({
        collections: [
          mock_valid_collection_by_product_id,
          mock_valid_collection_by_category_id,
          mock_valid_collection_by_brand_id,

          mock_valid_collection_by_variation_1,
          mock_valid_collection_by_variation_2,

          mock_valid_collection_by_specificaton_1,
          mock_valid_collection_by_specificaton_2,

          mock_valid_collection_by_collection_1,
          mock_valid_collection_by_collection_2,

          mock_invalid_collection_by_category_id,
          mock_invalid_collection_by_collection_2,
          mock_invalid_collection_by_brand_id,
          mock_invalid_collection_by_variation,
          mock_invalid_collection_by_product_id,
          mock_invalid_collection_by_specificaton

        ]
      })

      const { sut } = makeSut(mock_quadrant, mock_refined_data)

      const result = sut.remap()

      const quadrantoTopRight: schema_site_editor_remapped_custom_quadrant = result.quadrantTopRight

      expect(result.quadrantTopRight.listOfFlags.length).toBe(9)
    })

    it('Should return html data from collecions matched', () => {
      const mock_variation_value: ListOfVariation = {
        name: 'product_field_1',
        values: ['any_value_1', 'any_value_2']
      }
      const mock_variation_priority = '10'
      const mock_variation_link_name = 'any_link_name'
      const mock_variation_type_content = 'image'
      const mock_variation_variant = 'variant-1'
      const propertieToHTMLMatchBy = 'variation-attr'

      const mock_variation_result_html = {
        [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_variation_value.name)}--value-${normalizeString(mock_variation_value.values[0])}`]: true
      }

      const mock_collection_variation = generateCollection({

        linksContainer: [{
          linksByVariation: [
            {

              name: mock_variation_value.name,
              value: mock_variation_value.values[0]
            }
          ]
        }]

      })

      const mock_refined_data = generateRefinedData({
        variations: [
          {
            name: mock_variation_value.name,
            values: mock_variation_value.values
          }
        ]
      })

      const mock_quadrant = generateQuadrant({
        collections: [
          mock_collection_variation
        ]
      })

      const { sut } = makeSut(mock_quadrant, mock_refined_data)

      const result = sut.remap()

      const quadrantoTopRight: schema_site_editor_remapped_custom_quadrant = result.quadrantTopRight

      expect(quadrantoTopRight.listOfFlags[0].HTMLAttributes).toMatchObject(mock_variation_result_html)
    })
  })

  it('Should return all objects null if schema is null', () => {
    const { sut } = makeSut(null)
    const result = sut.remap()
    expect(result).toStrictEqual({
      quadrantBottom: null,
      quadrantTopLeft: null,
      quadrantTopRight: null
    })
  })
  it('Should call remap only once', () => {
    const { sut } = makeSut(null)
    const remapSpy = jest.spyOn(sut, 'remap')
    sut.remap()
    expect(remapSpy).toHaveBeenCalledTimes(1)
  })
})