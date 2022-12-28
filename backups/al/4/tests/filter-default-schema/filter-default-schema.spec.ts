import {
  ListOfCollection,
  ListOfProductField,
  ListOfVariation,
  RefinedDataOnProductContext
} from 'remap-schema/_interfaces'

import {
  generateMockLink,
  generateMockParamCollection,
  generateMockRefinedDataOnProductContext,
  generateMockResult,
  normalizeString
} from './_mocks/_default'
import { mock_real_data_quadrant_right_1, mock_real_data_refined_1, mock_real_data_result_1 } from './_mocks/integration-mocks/data-1'
import { useMockReturns } from './use-mock'

import { mock_refined_data_on_product_context } from '../remap-schema/mocks/refined-data'
import { FilterDefaultSchema } from '../../src/filter-default-schema/filter-default-schema'
import { mock_schema_default_container_generic_quadrant } from '../remap-schema/mocks/schema-site-editor-default'

type SutTypes = {
  sut: FilterDefaultSchema
}

const makeSut = (refinedData: RefinedDataOnProductContext | null = mock_refined_data_on_product_context): SutTypes => {
  const sut = new FilterDefaultSchema(refinedData)

  return {
    sut
  }
}

describe('Filter Default Schema', () => {
  describe('default', () => {
    it('Should return null if refinedDataOnProductContext is null', () => {
      const { sut } = makeSut(null)
      const result = sut.filterCollection(mock_schema_default_container_generic_quadrant().collection[0])
      expect(result).toBe(null)
    })

    it("Should return null if isActive is false", () => {
      const mock_value_1 = '1'
      const mock_value_2 = '2'

      const mock_result = generateMockResult('product-attr', { value: mock_value_1 })

      const mock_links = [generateMockLink(mock_value_1, "productId"), generateMockLink(mock_value_2)]
      const mock_refined_data = generateMockRefinedDataOnProductContext({ productId: mock_value_1 })
      const mock_param_collection = generateMockParamCollection("linksByProduct", mock_links, mock_result)

      const { sut } = makeSut(mock_refined_data)

      const result = sut.filterCollection(mock_param_collection)

      expect(result).toEqual(mock_result)
    })
  })

  describe('ingration with real data', () => {
    it('Should work well with real data', () => {
      const { sut } = makeSut(mock_real_data_refined_1)

      const matchs = mock_real_data_quadrant_right_1.map(collection => {
        return sut.filterCollection(collection)
      })

      expect(matchs).toStrictEqual(mock_real_data_result_1)
    })
  })

  describe('Matchs', () => {
    describe('linksByProduct', () => {
      const resolver = 'linksByProduct'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'productId'
      const propertieToHTMLMatchBy = 'product-attr'

      it('Should filter all links on linksByProductAttr and return collection if any match occurs ', () => {
        const mock_value_1 = '1'
        const mock_value_2 = '2'

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1 })

        const mock_links = [generateMockLink(mock_value_1, propertieTolinkOnProductContext), generateMockLink(mock_value_2)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_1 })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value = '1'

        const mock_priority = '10'
        const mock_link_name = 'any_link_name'
        const mock_type_content = 'image'
        const mock_variant = 'variant-1'

        const mock_default_html_attributes = {
          [`data-default--type-content-${mock_type_content}`]: true,
          [`data-default--priority-value-${mock_priority}`]: true,
          [`data-default--link-name-${mock_link_name}`]: true,
          [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
          [`data-default--variant-value-${mock_variant}`]: true,
          [`data-custom--match-by-product-attr--value-${normalizeString(mock_value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value },
            {
              priority: '10',
              typeContent: 'image',
              isActive: true,
              variant: mock_variant,
              __editorItemTitle: mock_link_name,
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
              ]

            }
          ),
          HTMLMatch: {
            ...mock_default_html_attributes
          }
        }

        const mock_links = [generateMockLink(mock_value)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value = '1'
        const mock_title_link_site_editor = 'any_title_link_site_editor'

        const mock_default_html_attributes = {
          'data-custom--match-by-product-attr--value-1': true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor}`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { nameLink: mock_title_link_site_editor, value: mock_value })

        const mock_links = [generateMockLink(mock_value, null, mock_title_link_site_editor)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value = '1'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should match only by id attribute', () => {
        const mock_value = '1'
        const mock_name = 'any_name'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value, mock_name)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match by id not occurs', () => {
        const mock_value_match = '1'
        const mock_value_not_match = '1000'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value_match)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_not_match })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        jest.spyOn(sut, resolver as any)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(null)
      })
    })

    describe('linksByCategory', () => {
      const resolver = 'linksByCategory'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'categoryId'
      const propertieToHTMLMatchBy = 'category-attr'

      it('Should filter all links on linksByProductAttr and return collection if any match occurs ', () => {
        const mock_value_1 = '1'
        const mock_value_2 = '2'

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1 })

        const mock_links = [generateMockLink(mock_value_1, propertieTolinkOnProductContext), generateMockLink(mock_value_2)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_1 })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value = '1'

        const mock_priority = '10'
        const mock_link_name = 'any_link_name'
        const mock_type_content = 'image'
        const mock_variant = 'variant-1'

        const mock_default_html_attributes = {
          [`data-default--type-content-${mock_type_content}`]: true,
          [`data-default--priority-value-${mock_priority}`]: true,
          [`data-default--link-name-${mock_link_name}`]: true,
          [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
          [`data-default--variant-value-${mock_variant}`]: true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value },
            {
              priority: '10',
              typeContent: 'image',
              isActive: true,
              variant: mock_variant,
              __editorItemTitle: mock_link_name,
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
              ]

            }
          ),
          HTMLMatch: {
            ...mock_default_html_attributes
          }
        }

        const mock_links = [generateMockLink(mock_value)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value = '1'
        const mock_title_link_site_editor = 'any_title_link_site_editor'

        const mock_default_html_attributes = {
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-1`]: true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor}`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { nameLink: mock_title_link_site_editor, value: mock_value })

        const mock_links = [generateMockLink(mock_value,null,mock_title_link_site_editor)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value = '1'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should match only by id attribute', () => {
        const mock_value = '1'
        const mock_name = 'any_name'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value, mock_name)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match by id not occurs', () => {
        const mock_value_match = '1'
        const mock_value_not_match = '1000'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value_match)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_not_match })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        jest.spyOn(sut, resolver as any)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(null)
      })
    })

    describe('linksByBrand', () => {
      const resolver = 'linksByBrand'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'brandId'
      const propertieToHTMLMatchBy = 'brand-attr'

      it('Should filter all links on linksByProductAttr and return collection if any match occurs ', () => {
        const mock_value_1: any = 1
        const mock_value_2: any = 2

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1 })

        const mock_links = [generateMockLink(mock_value_1, propertieTolinkOnProductContext), generateMockLink(mock_value_2)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_1 })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value: any = '1'

        const mock_priority = '10'
        const mock_link_name = 'any_link_name'
        const mock_type_content = 'image'
        const mock_variant = 'variant-1'

        const mock_default_html_attributes = {
          [`data-default--type-content-${mock_type_content}`]: true,
          [`data-default--priority-value-${mock_priority}`]: true,
          [`data-default--link-name-${mock_link_name}`]: true,
          [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
          [`data-default--variant-value-${mock_variant}`]: true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value },
            {
              priority: '10',
              typeContent: 'image',
              isActive: true,
              variant: mock_variant,
              __editorItemTitle: mock_link_name,
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
              ]

            }
          ),
          HTMLMatch: {
            ...mock_default_html_attributes
          }
        }

        const mock_links = [generateMockLink(mock_value)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })
      it('Should return HTML identifier of match on match', () => {
        const mock_value: any = '1'
        const mock_title_link_site_editor = 'any_title_link_site_editor'

        const mock_default_html_attributes = {
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-1`]: true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor}`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { nameLink: mock_title_link_site_editor, value: mock_value })

        const mock_links = [generateMockLink(mock_value, null, mock_title_link_site_editor)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value: any = '1'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should match only by id attribute', () => {
        const mock_value: any = '1'
        const mock_name = 'any_name'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value, mock_name)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match by id not occurs', () => {
        const mock_value_match: any = '1'
        const mock_value_not_match: any = '1000'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value_match)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_not_match })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        jest.spyOn(sut, resolver as any)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(null)
      })
    })

    describe('linksByCollection', () => {
      const resolver = 'linksByCollection'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'listOfCollections'
      const propertieToHTMLMatchBy = 'collection-attr'

      it('Should filter all links on linksBySpecificationAttr and return collection if any match occurs ', () => {
        const product_field_1: ListOfCollection = {
          name: 'product_field_1',
          id: '1'
        }

        const mock_result =
          generateMockResult(propertieToHTMLMatchBy,
            { unlimitedValuesById: [{ id: product_field_1.id, name: product_field_1.name }] })

        const mock_links = [
          generateMockLink(product_field_1.id)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: [product_field_1] })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return HTML identifier of all matchs', () => {
        const mock_value_1: ListOfCollection = {
          name: 'mock-name-1',
          id: '1'
        }

        const mock_value_2: ListOfCollection = {
          name: 'mock-name-2',
          id: '2'
        }

        const mock_title_link_site_editor_1 = 'any_title_link_site_editor_1'
        const mock_title_link_site_editor_2 = 'any_title_link_site_editor_2'

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValuesById: [
              mock_value_1,
              mock_value_2
            ]
          }),

          // deve renderizar pelo id ou pelo nome. nunca pelos 2 ao mesmo tempo
          HTMLMatch: {
            [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value_1.id)}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value_2.id)}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_1}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_2}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.id, null, mock_title_link_site_editor_1),
          generateMockLink(mock_value_2.id, null, mock_title_link_site_editor_2)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1,
            mock_value_2
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result?.HTMLMatch).toMatchObject(mock_result.HTMLMatch)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value_1: ListOfCollection = {
          name: 'product_field_1',
          id: '1'
        }

        const mock_priority = '10'
        const mock_link_name = 'any_link_name'
        const mock_type_content = 'image'
        const mock_variant = 'variant-1'

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValuesById: [
              {
                id: mock_value_1.id,
                name: mock_value_1.name
              }
            ]
          },
          {

            priority: '10',
            typeContent: 'image',
            isActive: true,
            variant: mock_variant,
            __editorItemTitle: mock_link_name,
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
            ]

          }
          ),

          HTMLMatch: {
            [`data-default--type-content-${mock_type_content}`]: true,
            [`data-default--priority-value-${mock_priority}`]: true,
            [`data-default--link-name-${mock_link_name}`]: true,
            [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
            [`data-default--variant-value-${mock_variant}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value_1.id)}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.id)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1
          ]
        })

        // reparar no que esta sendo enviado pelo refined
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result?.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should match only with name and value', () => {
        const mock_value_1: ListOfCollection = {
          name: 'product_field_1',
          id: '1'
        }

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValuesById: [
              {
                id: mock_value_1.id,
                name: mock_value_1.name
              }
            ]
          })
        }

        const mock_links = [
          generateMockLink(mock_value_1.id)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1

          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toMatchObject(mock_result)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value_1: ListOfCollection = {
          name: 'product_field_1',
          id: '1'
        }

        const mock_value_2: ListOfCollection = {
          name: 'product_field_1',
          id: '1'
        }

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                name: mock_value_1.name,
                value: mock_value_1.id
              },
              {
                name: mock_value_2.name,
                value: mock_value_2.id
              }
            ]
          }),

          HTMLMatch: {
            [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.id)}`]: true,
            [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.id)}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_2.id, mock_value_2.name),
          generateMockLink(mock_value_2.id, mock_value_2.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1,
            mock_value_2,
            {
              name: 'any_name',
              id: '100000'
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)
        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match by id not occurs', () => {
        const mock_value: ListOfCollection = {
          name: 'product_field_1',
          id: '1'
        }

        const invalid_id = '100000'

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValuesById: [
              {
                name: mock_value.name,
                id: mock_value.id
              }
            ]
          })
        }

        const mock_links = [
          generateMockLink(mock_value.id, mock_value.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            { ...mock_value, id: invalid_id }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toBeNull()
      })
    })

    describe('linksBySpecification', () => {
      const resolver = 'linksBySpecification'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'listOfProductFields'
      const propertieToHTMLMatchBy = 'specification-attr'

      it('Should filter all links on linksBySpecificationAttr and return collection if any match occurs ', () => {
        const product_field_1: ListOfProductField = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }
        const product_field_2: ListOfProductField = {
          name: 'product_field_2',
          values: ['any_value_1', 'any_value_2']
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, {
          unlimitedValues: [
            {
              value: product_field_1.values[0], name: product_field_1.name
            },
            {
              value: product_field_2.values[0], name: product_field_2.name
            }
          ]
        })

        const mock_links = [
          generateMockLink(product_field_1.values[0], product_field_1.name),
          generateMockLink(product_field_2.values[0], product_field_2.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            {
              name: product_field_1.name,
              values: [product_field_1.values[0]]
            },
            {
              name: product_field_2.name,
              values: [product_field_2.values[0]]
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return HTML identifier of all matchs', () => {
        const mock_value_1: ListOfProductField = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }
        const mock_value_2: ListOfProductField = {
          name: 'product_field_2',
          values: ['any_value_1', 'any_value_2', 'any_value_3']
        }

        const mock_title_link_site_editor_1 = 'any_title_link_site_editor_1'
        const mock_title_link_site_editor_2 = 'any_title_link_site_editor_2'

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                value: mock_value_1.values[0],
                name: mock_value_1.name
              },
              {
                value: mock_value_2.values[0],
                name: mock_value_2.name
              },
              {
                value: mock_value_2.values[1],
                name: mock_value_2.name
              }
            ]
          }),
          HTMLMatch: {
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_1}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_2}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name,mock_title_link_site_editor_1),
          generateMockLink(mock_value_2.values[0], mock_value_2.name,mock_title_link_site_editor_1),
          generateMockLink(mock_value_2.values[1], mock_value_2.name,mock_title_link_site_editor_2)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1,
            mock_value_2,
            {
              name: 'any_name',
              values: ['any_value']
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_result.HTMLMatch)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value_1: ListOfProductField = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }

        const mock_priority = '10'
        const mock_link_name = 'any_link_name'
        const mock_type_content = 'image'
        const mock_variant = 'variant-1'

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy, {
              unlimitedValues: [
                {
                  value: mock_value_1.values[0],
                  name: mock_value_1.name
                }
              ]
            },
            {
              priority: '10',
              typeContent: 'image',
              isActive: true,
              variant: mock_variant,
              __editorItemTitle: mock_link_name,
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
              ]

            }
          ),

          HTMLMatch: {
            [`data-default--type-content-${mock_type_content}`]: true,
            [`data-default--priority-value-${mock_priority}`]: true,
            [`data-default--link-name-${mock_link_name}`]: true,
            [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
            [`data-default--variant-value-${mock_variant}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1

          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result?.HTMLMatch).toEqual(mock_result?.HTMLMatch)
      })

      it('Should match only with name and value', () => {
        const mock_value_1: ListOfProductField = {
          name: 'product_field_1',
          values: ['any_value_1']
        }

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                value: mock_value_1.values[0],
                name: mock_value_1.name
              }
            ]
          })
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1

          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toMatchObject(mock_result)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value_1: ListOfProductField = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }
        const mock_value_2: ListOfProductField = {
          name: 'product_field_2',
          values: ['any_value_1', 'any_value_2', 'any_value_3']
        }

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                value: mock_value_1.values[0],
                name: mock_value_1.name
              },
              {
                value: mock_value_2.values[0],
                name: mock_value_2.name
              },
              {
                value: mock_value_2.values[1],
                name: mock_value_2.name
              }
            ]
          }),

          HTMLMatch: {
            [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
            [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
            [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name),
          generateMockLink(mock_value_2.values[0], mock_value_2.name),
          generateMockLink(mock_value_2.values[1], mock_value_2.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1,
            mock_value_2,
            {
              name: 'any_name',
              values: ['any_value']
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)
        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match between name and values not occurs', () => {
        const mock_value_1: ListOfProductField = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }

        const mock_value_2: ListOfProductField = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }

        const invalid_value = "invalid_value"
        const invalid_name = "invalid_name"

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                name: mock_value_1.name,
                value: mock_value_1.values[0]
              },
              {
                name: mock_value_2.name,
                value: mock_value_2.values[0]
              }
            ]
          })
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            {
              ...mock_value_1,
              values: [invalid_value]
            },
            {
              ...mock_value_2,
              name: invalid_name
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toBeNull()
      })
    })

    describe('linksByVariation', () => {
      const resolver = 'linksByVariation'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'listOfVariations'
      const propertieToHTMLMatchBy = 'variation-attr'

      it('Should filter all links on linksBySpecificationAttr and return collection if any match occurs ', () => {
        const { mock_result,mock_links,mock_data,mock_refined_data, mock_param_collection } = useMockReturns({ resolver,propertieTolinkOnProductContext,propertieToHTMLMatchBy,options: { hasMoreOneMock: true } })

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return HTML identifier of all matchs', () => {
        const mock_value_1: ListOfVariation = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }
        const mock_value_2: ListOfVariation = {
          name: 'product_field_2',
          values: ['any_value_1', 'any_value_2', 'any_value_3']
        }

        const mock_title_link_site_editor_1 = 'any_title_link_site_editor_1'
        const mock_title_link_site_editor_2 = 'any_title_link_site_editor_2'

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                value: mock_value_1.values[0],
                name: mock_value_1.name
              },
              {
                value: mock_value_2.values[0],
                name: mock_value_2.name
              },
              {
                value: mock_value_2.values[1],
                name: mock_value_2.name
              }
            ]
          }),

          HTMLMatch: {
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_1}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_2}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name,mock_title_link_site_editor_1),
          generateMockLink(mock_value_2.values[0], mock_value_2.name, mock_title_link_site_editor_2),
          generateMockLink(mock_value_2.values[1], mock_value_2.name, mock_title_link_site_editor_2)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1,
            mock_value_2,
            {
              name: 'any_name',
              values: ['any_value']
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_result.HTMLMatch)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value_1: ListOfVariation = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }

        const mock_priority = '10'
        const mock_link_name = 'any_link_name'
        const mock_type_content = 'image'
        const mock_variant = 'variant-1'

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy, {
              unlimitedValues: [
                {
                  value: mock_value_1.values[0],
                  name: mock_value_1.name
                }
              ]
            },
            {
              priority: '10',
              typeContent: 'image',
              isActive: true,
              variant: mock_variant,
              __editorItemTitle: mock_link_name,
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
              ]

            }
          ),

          HTMLMatch: {
            [`data-default--type-content-${mock_type_content}`]: true,
            [`data-default--priority-value-${mock_priority}`]: true,
            [`data-default--link-name-${mock_link_name}`]: true,
            [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
            [`data-default--variant-value-${mock_variant}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1

          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result?.HTMLMatch).toEqual(mock_result?.HTMLMatch)
      })

      it('Should match only with name and value', () => {
        const mock_value_1: ListOfVariation = {
          name: 'product_field_1',
          values: ['any_value_1']
        }

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                value: mock_value_1.values[0],
                name: mock_value_1.name
              }
            ]
          })
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1

          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value_1: ListOfVariation = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }
        const mock_value_2: ListOfVariation = {
          name: 'product_field_2',
          values: ['any_value_1', 'any_value_2', 'any_value_3']
        }

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                value: mock_value_1.values[0],
                name: mock_value_1.name
              },
              {
                value: mock_value_2.values[0],
                name: mock_value_2.name
              },
              {
                value: mock_value_2.values[1],
                name: mock_value_2.name
              }
            ]
          }),

          HTMLMatch: {
            [`data-custom--match-by-variation-attr--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
            [`data-custom--match-by-variation-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
            [`data-custom--match-by-variation-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name),
          generateMockLink(mock_value_2.values[0], mock_value_2.name),
          generateMockLink(mock_value_2.values[1], mock_value_2.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1,
            mock_value_2,
            {
              name: 'any_name',
              values: ['any_value']
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)
        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match between name and values not occurs', () => {
        const mock_value_1: ListOfVariation = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }

        const mock_value_2: ListOfVariation = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }

        const invalid_value = "invalid_value"
        const invalid_name = "invalid_name"

        const mock_result = {
          ...generateMockResult(propertieToHTMLMatchBy, {
            unlimitedValues: [
              {
                name: mock_value_1.name,
                value: mock_value_1.values[0]
              },
              {
                name: mock_value_2.name,
                value: mock_value_2.values[0]
              }
            ]
          })
        }

        const mock_links = [
          generateMockLink(mock_value_1.values[0], mock_value_1.name)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            {
              ...mock_value_1,
              values: [invalid_value]
            },
            {
              ...mock_value_2,
              name: invalid_name
            }
          ]
        })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toBeNull()
      })
    })
  })
})