import {
  ListOfCollection,
  ListOfProductField,
  ListOfVariation,
  RefinedDataOnProductContext,
  schema_site_editor_default_linkField_filtered
} from 'remap-schema/_interfaces'

import {
  generateMockLink,
  generateMockParamCollection,
  generateMockRefinedDataOnProductContext,
  generateMockResult, normalizeString
} from './_mocks'

import { mock_refined_data_on_product_context } from "../remap-schema/mocks/refined-data"
import { FilterDefaultSchema } from "../../src/filter-default-schema/filter-default-schema"
import { mock_schema_default_container_generic_quadrant } from "../remap-schema/mocks/schema-site-editor-default"
import { BuildMatch } from "../remap-schema/mocks/filter"

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
  })

  describe('Matchs', () => {
    describe('theLinksPresentsInThisProductContextByProduct', () => {
      const resolver = 'theLinksPresentsInThisProductContextByProduct'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'productId'
      const propertieToHTMLMatchBy = 'product-attr'

      it('Should filter all links on linksByProductAttr and return collection if any match occurs ', () => {
        const mock_value_1 = '1'
        const mock_value_2 = '2'

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1 })

        const mock_links = [generateMockLink(mock_value_1, propertieTolinkOnProductContext), generateMockLink(mock_value_2, propertieTolinkOnProductContext)]
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
          [`data-custom--match-by-product-attr-value-${normalizeString(mock_value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value },
            {
              priority: '10',
              typeContent: 'image',
              isActive: false,
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

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value = '1'

        const mock_default_html_attributes = {
          'data-custom--match-by-product-attr-value-1': true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value })

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value = '1'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]
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

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext, mock_name)]
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

        const mock_links = [generateMockLink(mock_value_match, propertieTolinkOnProductContext)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_not_match })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        jest.spyOn(sut, resolver as any)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(null)
      })
    })

    describe('theLinksPresentsInThisProductContextByCategoryId', () => {
      const resolver = 'theLinksPresentsInThisProductContextByCategoryId'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'categoryId'
      const propertieToHTMLMatchBy = 'category-attr'

      it('Should filter all links on linksByProductAttr and return collection if any match occurs ', () => {
        const mock_value_1 = '1'
        const mock_value_2 = '2'

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1 })

        const mock_links = [generateMockLink(mock_value_1, propertieTolinkOnProductContext), generateMockLink(mock_value_2, propertieTolinkOnProductContext)]
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
          [`data-custom--match-by-${propertieToHTMLMatchBy}-value-${normalizeString(mock_value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value },
            {
              priority: '10',
              typeContent: 'image',
              isActive: false,
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

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value = '1'

        const mock_default_html_attributes = {
          [`data-custom--match-by-${propertieToHTMLMatchBy}-value-1`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value })

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value = '1'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]
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

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext, mock_name)]
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

        const mock_links = [generateMockLink(mock_value_match, propertieTolinkOnProductContext)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_not_match })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        jest.spyOn(sut, resolver as any)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(null)
      })
    })

    describe('theLinksPresentsInThisProductContextByBrand', () => {
      const resolver = 'theLinksPresentsInThisProductContextByBrand'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'brandId'
      const propertieToHTMLMatchBy = 'brand-attr'

      it('Should filter all links on linksByProductAttr and return collection if any match occurs ', () => {
        const mock_value_1: any = 1
        const mock_value_2: any = 2

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1 })

        const mock_links = [generateMockLink(mock_value_1, propertieTolinkOnProductContext), generateMockLink(mock_value_2, propertieTolinkOnProductContext)]
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
          [`data-custom--match-by-${propertieToHTMLMatchBy}-value-${normalizeString(mock_value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value },
            {
              priority: '10',
              typeContent: 'image',
              isActive: false,
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

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value: any = '1'

        const mock_default_html_attributes = {
          [`data-custom--match-by-${propertieToHTMLMatchBy}-value-1`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value })

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
        const mock_value: any = '1'

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext)]
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

        const mock_links = [generateMockLink(mock_value, propertieTolinkOnProductContext, mock_name)]
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

        const mock_links = [generateMockLink(mock_value_match, propertieTolinkOnProductContext)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_not_match })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        jest.spyOn(sut, resolver as any)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(null)
      })
    })

    describe('theLinksPresentsInThisProductContextByCollections', () => {
      const resolver = 'theLinksPresentsInThisProductContextByCollections'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'listOfCollections'
      const propertieToHTMLMatchBy = 'collection-attr'

      it('Should filter all links on linksByProductFieldAttr and return collection if any match occurs ', () => {
        const product_field_1: ListOfCollection = {
          name: 'product_field_1',
          id: '1'
        }
        const product_field_2: ListOfCollection = {
          name: 'product_field_2',
          id: '2'
        }

        const mock_result =
          generateMockResult(propertieToHTMLMatchBy,
            { unlimitedValuesById: [{ id: product_field_1.id, name: product_field_1.name }] })

        const mock_links = [
          generateMockLink(product_field_1.id, propertieTolinkOnProductContext)]

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
            [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value_2.id)}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.id, propertieTolinkOnProductContext),
          generateMockLink(mock_value_2.id, propertieTolinkOnProductContext)
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
              isActive: false,
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
          generateMockLink(mock_value_1.id, propertieTolinkOnProductContext)
        ]

        const mock_refined_data = generateMockRefinedDataOnProductContext({
          [propertieTolinkOnProductContext]: [
            mock_value_1
          ]
        })

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
          generateMockLink(mock_value_1.id, propertieTolinkOnProductContext)
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
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.id),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.id)
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

        const result = sut.filterCollection(mock_param_collection)

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
          generateMockLink(mock_value.name, propertieTolinkOnProductContext, mock_value.id)
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

    describe('theLinksPresentsInThisProductContextByProductField', () => {
      const resolver = 'theLinksPresentsInThisProductContextByProductField'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'listOfProductFields'
      const propertieToHTMLMatchBy = 'specification-attr'

      it('Should filter all links on linksByProductFieldAttr and return collection if any match occurs ', () => {
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
          generateMockLink(product_field_1.name, propertieTolinkOnProductContext, product_field_1.values[0]),
          generateMockLink(product_field_2.name, propertieTolinkOnProductContext, product_field_2.values[0])
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
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[1])
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
              isActive: false,
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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0])
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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0])
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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[1])
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

        const result = sut.filterCollection(mock_param_collection)

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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0])
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

    describe('theLinksPresentsInThisProductContextByVariations', () => {
      const resolver = 'theLinksPresentsInThisProductContextByVariations'
      const propertieTolinkOnProductContext: keyof RefinedDataOnProductContext = 'listOfVariations'
      const propertieToHTMLMatchBy = 'variation-attr'

      it('Should filter all links on linksByProductFieldAttr and return collection if any match occurs ', () => {
        const product_field_1: ListOfVariation = {
          name: 'product_field_1',
          values: ['any_value_1', 'any_value_2']
        }
        const product_field_2: ListOfVariation = {
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
          generateMockLink(product_field_1.name, propertieTolinkOnProductContext, product_field_1.values[0]),
          generateMockLink(product_field_2.name, propertieTolinkOnProductContext, product_field_2.values[0])
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
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
            [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true
          }
        }

        const mock_links = [
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[1])
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
              isActive: false,
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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0])
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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0])
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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[0]),
          generateMockLink(mock_value_2.name, propertieTolinkOnProductContext, mock_value_2.values[1])
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

        const result = sut.filterCollection(mock_param_collection)

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
          generateMockLink(mock_value_1.name, propertieTolinkOnProductContext, mock_value_1.values[0])
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