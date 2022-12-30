import {
  generateMockLink,
  generateMockParamCollection,
  generateMockRefinedDataOnProductContext,
  generateMockResult, generateMockValue,
  normalizeString
} from './_mocks/_default'
import { mock_real_data_quadrant_right_1, mock_real_data_refined_1, mock_real_data_result_1 } from './_mocks/integration-mocks/data-1'
import { useMockReturns } from './use-mock'

import { mock_refined_data_on_product_context } from '../remap-schema/mocks/refined-data'
import { FilterDefaultSchema } from '../../src/filter-default-schema/filter-default-schema'
import { mock_schema_default_container_generic_quadrant } from '../remap-schema/mocks/schema-site-editor-default'
import { T_refined_data_keys } from '../../src/_interfaces/_schema-types'
import {
  DataRefined,
  FieldDataRefined,
  schema_site_editor_default_linkField_filtered
} from '../../src/_interfaces'

type SutTypes = {
  sut: FilterDefaultSchema
}

const makeSut = (refinedData: DataRefined | null = mock_refined_data_on_product_context): SutTypes => {
  const sut = new FilterDefaultSchema(refinedData)

  return {
    sut
  }
}

describe('Filter Default Schema', () => {
  // describe('default', () => {
  //   it('Should return null if refinedDataOnProductContext is null', () => {
  //     const { sut } = makeSut(null)
  //     const result = sut.filterCollection(mock_schema_default_container_generic_quadrant().collection[0])
  //     expect(result).toBe(null)
  //   })
  //
  //   it("Should return null if isActive is false", () => {
  //     const mock_value_1 = '1'
  //     const mock_value_2 = '2'
  //
  //     const mock_result = generateMockResult('product-attr', { value: mock_value_1 })
  //
  //     const mock_links = [generateMockLink(mock_value_1, "product"), generateMockLink(mock_value_2)]
  //     const mock_refined_data = generateMockRefinedDataOnProductContext({ product: mock_value_1 })
  //     const mock_param_collection = generateMockParamCollection("linksByProduct", mock_links, mock_result)
  //
  //     const { sut } = makeSut(mock_refined_data)
  //
  //     const result = sut.filterCollection(mock_param_collection)
  //
  //     expect(result).toEqual(mock_result)
  //   })
  // })
  //
  // describe('ingration with real data', () => {
  //   it('Should work well with real data', () => {
  //     const { sut } = makeSut(mock_real_data_refined_1)
  //
  //     const matchs = mock_real_data_quadrant_right_1.map(collection => {
  //       return sut.filterCollection(collection)
  //     })
  //
  //     expect(matchs).toStrictEqual(mock_real_data_result_1)
  //   })
  // })

  describe('Matchs', () => {
    describe('linksByProduct', () => {
      const resolver = 'linksByProduct'
      const propertieTolinkOnProductContext: T_refined_data_keys = 'product'
      const propertieToHTMLMatchBy = 'product-attr'

      it('Should filter all links and return collection if any match occurs ', () => {
        const mock_value_1 = generateMockValue<string>('1')
        const mock_value_2 = generateMockValue<string>('2')

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1.value })

        const mock_links = [generateMockLink(mock_value_1.value, propertieTolinkOnProductContext), generateMockLink(mock_value_2.value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_1 })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value = generateMockValue<string>('1')

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
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value.value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value.value },
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

        const mock_links = [generateMockLink(mock_value.value)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value = generateMockValue<string>('1')
        const mock_title_link_site_editor = 'any_title_link_site_editor'

        const mock_default_html_attributes = {
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-1`]: true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor}`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { nameLink: mock_title_link_site_editor, value: mock_value.value })

        const mock_links = [generateMockLink(mock_value.value, null, mock_title_link_site_editor)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)
        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver', () => {
        const mock_value = generateMockValue<string>('1')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value.value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should match only by value attribute', () => {
        const mock_value = generateMockValue<string>('1', 'default_product_1')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value.value,mock_value.name)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match by value not occurs', () => {
        const mock_value_match = generateMockValue<string>('1')
        const mock_value_not_match = generateMockValue<string>('2')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value_match.name)]
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
      const propertieTolinkOnProductContext: T_refined_data_keys = 'category'
      const propertieToHTMLMatchBy = 'category-attr'
      it('Should filter all links and return collection if any match occurs ', () => {
        const mock_value_1 = generateMockValue<string>('1')
        const mock_value_2 = generateMockValue<string>('2')

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1.value })

        const mock_links = [generateMockLink(mock_value_1.value, propertieTolinkOnProductContext), generateMockLink(mock_value_2.value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_1 })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value = generateMockValue<string>('1')

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
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value.value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value.value },
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

        const mock_links = [generateMockLink(mock_value.value)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value = generateMockValue<string>('1')
        const mock_title_link_site_editor = 'any_title_link_site_editor'

        const mock_default_html_attributes = {
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-1`]: true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor}`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { nameLink: mock_title_link_site_editor, value: mock_value.value })

        const mock_links = [generateMockLink(mock_value.value, null, mock_title_link_site_editor)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)
        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver', () => {
        const mock_value = generateMockValue<string>('1')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value.value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should match only by value attribute', () => {
        const mock_value = generateMockValue<string>('1', 'default_product_1')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value.value,mock_value.name)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match by value not occurs', () => {
        const mock_value_match = generateMockValue<string>('1')
        const mock_value_not_match = generateMockValue<string>('2')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value_match.name)]
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
      const propertieTolinkOnProductContext: T_refined_data_keys = 'brand'
      const propertieToHTMLMatchBy = 'brand-attr'

      it('Should filter all links and return collection if any match occurs ', () => {
        const mock_value_1 = generateMockValue<string>('1')
        const mock_value_2 = generateMockValue<string>('2')

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { value: mock_value_1.value })

        const mock_links = [generateMockLink(mock_value_1.value, propertieTolinkOnProductContext), generateMockLink(mock_value_2.value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_1 })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(mock_result)
      })

      it('Should return default HTML attributes on match', () => {
        const mock_value = generateMockValue<string>('1')

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
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value.value)}`]: true
        }

        const mock_result = {
          ...generateMockResult(
            propertieToHTMLMatchBy,
            { value: mock_value.value },
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

        const mock_links = [generateMockLink(mock_value.value)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)

        expect(result.HTMLMatch).toEqual(mock_result.HTMLMatch)
      })

      it('Should return HTML identifier of match on match', () => {
        const mock_value = generateMockValue<string>('1')
        const mock_title_link_site_editor = 'any_title_link_site_editor'

        const mock_default_html_attributes = {
          [`data-custom--match-by-${propertieToHTMLMatchBy}--value-1`]: true,
          [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor}`]: true
        }

        const mock_result = generateMockResult(propertieToHTMLMatchBy, { nameLink: mock_title_link_site_editor, value: mock_value.value })

        const mock_links = [generateMockLink(mock_value.value, null, mock_title_link_site_editor)]

        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })

        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const result = sut.filterCollection(mock_param_collection)
        expect(result.HTMLMatch).toMatchObject(mock_default_html_attributes)
      })

      it('Should call the resolver', () => {
        const mock_value = generateMockValue<string>('1')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value.value)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should match only by value attribute', () => {
        const mock_value = generateMockValue<string>('1', 'default_product_1')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value.value,mock_value.name)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        const privateMethodSpy = jest.spyOn(sut, resolver as any)

        sut.filterCollection(mock_param_collection)

        expect(privateMethodSpy).toBeCalled()
      })

      it('Should return null if any match by value not occurs', () => {
        const mock_value_match = generateMockValue<string>('1')
        const mock_value_not_match = generateMockValue<string>('2')

        const mock_result = generateMockResult(propertieToHTMLMatchBy)

        const mock_links = [generateMockLink(mock_value_match.name)]
        const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: mock_value_not_match })
        const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)

        const { sut } = makeSut(mock_refined_data)

        jest.spyOn(sut, resolver as any)

        const result = sut.filterCollection(mock_param_collection)

        expect(result).toEqual(null)
      })
    })
    //
    // describe('linksByCollection', () => {
    //   const resolver = 'linksByCollection'
    //   const propertieTolinkOnProductContext: T_refined_data_keys = 'collection'
    //   const propertieToHTMLMatchBy = 'collection-attr'
    //
    //   it('Should filter all links on linksBySpecificationAttr and return collection if any match occurs ', () => {
    //     const product_field_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: '1'
    //     }
    //
    //     const mock_result =
    //       generateMockResult(propertieToHTMLMatchBy,
    //         { unlimitedValuesById: [{ id: product_field_1.id, name: product_field_1.name }] })
    //
    //     const mock_links = [
    //       generateMockLink(product_field_1.id)]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({ [propertieTolinkOnProductContext]: [product_field_1] })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toEqual(mock_result)
    //   })
    //
    //   it('Should return HTML identifier of all matchs', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'mock-name-1',
    //       id: '1'
    //     }
    //
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'mock-name-2',
    //       id: '2'
    //     }
    //
    //     const mock_title_link_site_editor_1 = 'any_title_link_site_editor_1'
    //     const mock_title_link_site_editor_2 = 'any_title_link_site_editor_2'
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedValuesById: [
    //           mock_value_1,
    //           mock_value_2
    //         ]
    //       }),
    //
    //       // deve renderizar pelo id ou pelo nome. nunca pelos 2 ao mesmo tempo
    //       HTMLMatch: {
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value_1.id)}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value_2.id)}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_1}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_2}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.id, null, mock_title_link_site_editor_1),
    //       generateMockLink(mock_value_2.id, null, mock_title_link_site_editor_2)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1,
    //         mock_value_2
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result?.HTMLMatch).toMatchObject(mock_result.HTMLMatch)
    //   })
    //
    //   it('Should return default HTML attributes on match', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       id: '1'
    //     }
    //
    //     const mock_priority = '10'
    //     const mock_link_name = 'any_link_name'
    //     const mock_type_content = 'image'
    //     const mock_variant = 'variant-1'
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedValuesById: [
    //           {
    //             id: mock_value_1.id,
    //             name: mock_value_1.name
    //           }
    //         ]
    //       },
    //       {
    //
    //         priority: '10',
    //         typeContent: 'image',
    //         isActive: true,
    //         variant: mock_variant,
    //         __editorItemTitle: mock_link_name,
    //         items: [
    //           {
    //             __editorItemTitle: 'any_title',
    //             backgroundColor: 'any_color',
    //             color: 'any_color',
    //             text: 'any_text',
    //             fontWeight: 'any_weight',
    //             fontSize: 'any_size',
    //             borderRadius: 'any_radius',
    //             commonPropsBetweenContentAndImage: {
    //               width: 'any_width',
    //               height: 'any_height'
    //             }
    //           }
    //         ]
    //
    //       }
    //       ),
    //
    //       HTMLMatch: {
    //         [`data-default--type-content-${mock_type_content}`]: true,
    //         [`data-default--priority-value-${mock_priority}`]: true,
    //         [`data-default--link-name-${mock_link_name}`]: true,
    //         [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
    //         [`data-default--variant-value-${mock_variant}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(mock_value_1.id)}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.id)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1
    //       ]
    //     })
    //
    //     // reparar no que esta sendo enviado pelo refined
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result?.HTMLMatch).toEqual(mock_result.HTMLMatch)
    //   })
    //
    //   it('Should match only with name and value', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       id: '1'
    //     }
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedValuesById: [
    //           {
    //             id: mock_value_1.id,
    //             name: mock_value_1.name
    //           }
    //         ]
    //       })
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.id)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1
    //
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toMatchObject(mock_result)
    //   })
    //
    //   it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       id: '1'
    //     }
    //
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'product_field_1',
    //       id: '1'
    //     }
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             name: mock_value_1.name,
    //             value: mock_value_1.id
    //           },
    //           {
    //             name: mock_value_2.name,
    //             value: mock_value_2.id
    //           }
    //         ]
    //       }),
    //
    //       HTMLMatch: {
    //         [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.id)}`]: true,
    //         [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.id)}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_2.id, mock_value_2.name),
    //       generateMockLink(mock_value_2.id, mock_value_2.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1,
    //         mock_value_2,
    //         {
    //           name: 'any_name',
    //           id: '100000'
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //     const privateMethodSpy = jest.spyOn(sut, resolver as any)
    //
    //     sut.filterCollection(mock_param_collection)
    //
    //     expect(privateMethodSpy).toBeCalled()
    //   })
    //
    //   it('Should return null if any match by id not occurs', () => {
    //     const mock_value: FieldDataRefined = {
    //       name: 'product_field_1',
    //       id: '1'
    //     }
    //
    //     const invalid_id = '100000'
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedValuesById: [
    //           {
    //             name: mock_value.name,
    //             id: mock_value.id
    //           }
    //         ]
    //       })
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value.id, mock_value.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         { ...mock_value, id: invalid_id }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toBeNull()
    //   })
    // })
    //
    // describe('linksBySpecification', () => {
    //   const resolver = 'linksBySpecification'
    //   const propertieTolinkOnProductContext: T_refined_data_keys = 'specification'
    //   const propertieToHTMLMatchBy = 'specification-attr'
    //
    //   it('Should filter all links on linksBySpecificationAttr and return collection if any match occurs ', () => {
    //     const product_field_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //     const product_field_2: FieldDataRefined = {
    //       name: 'product_field_2',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //
    //     const mock_result = generateMockResult(propertieToHTMLMatchBy, {
    //       unlimitedvalue: [
    //         {
    //           value: product_field_1.values[0], name: product_field_1.name
    //         },
    //         {
    //           value: product_field_2.values[0], name: product_field_2.name
    //         }
    //       ]
    //     })
    //
    //     const mock_links = [
    //       generateMockLink(product_field_1.values[0], product_field_1.name),
    //       generateMockLink(product_field_2.values[0], product_field_2.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         {
    //           name: product_field_1.name,
    //           value: [product_field_1.values[0]]
    //         },
    //         {
    //           name: product_field_2.name,
    //           value: [product_field_2.values[0]]
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toEqual(mock_result)
    //   })
    //
    //   it('Should return HTML identifier of all matchs', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'product_field_2',
    //       value: ['any_value_1', 'any_value_2', 'any_value_3']
    //     }
    //
    //     const mock_title_link_site_editor_1 = 'any_title_link_site_editor_1'
    //     const mock_title_link_site_editor_2 = 'any_title_link_site_editor_2'
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             value: mock_value_1.values[0],
    //             name: mock_value_1.name
    //           },
    //           {
    //             value: mock_value_2.values[0],
    //             name: mock_value_2.name
    //           },
    //           {
    //             value: mock_value_2.values[1],
    //             name: mock_value_2.name
    //           }
    //         ]
    //       }),
    //       HTMLMatch: {
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_1}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_2}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name,mock_title_link_site_editor_1),
    //       generateMockLink(mock_value_2.values[0], mock_value_2.name,mock_title_link_site_editor_1),
    //       generateMockLink(mock_value_2.values[1], mock_value_2.name,mock_title_link_site_editor_2)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1,
    //         mock_value_2,
    //         {
    //           name: 'any_name',
    //           value: ['any_value']
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result.HTMLMatch).toMatchObject(mock_result.HTMLMatch)
    //   })
    //
    //   it('Should return default HTML attributes on match', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //
    //     const mock_priority = '10'
    //     const mock_link_name = 'any_link_name'
    //     const mock_type_content = 'image'
    //     const mock_variant = 'variant-1'
    //
    //     const mock_result = {
    //       ...generateMockResult(
    //         propertieToHTMLMatchBy, {
    //           unlimitedvalue: [
    //             {
    //               value: mock_value_1.values[0],
    //               name: mock_value_1.name
    //             }
    //           ]
    //         },
    //         {
    //           priority: '10',
    //           typeContent: 'image',
    //           isActive: true,
    //           variant: mock_variant,
    //           __editorItemTitle: mock_link_name,
    //           items: [
    //             {
    //               __editorItemTitle: 'any_title',
    //               backgroundColor: 'any_color',
    //               color: 'any_color',
    //               text: 'any_text',
    //               fontWeight: 'any_weight',
    //               fontSize: 'any_size',
    //               borderRadius: 'any_radius',
    //               commonPropsBetweenContentAndImage: {
    //                 width: 'any_width',
    //                 height: 'any_height'
    //               }
    //             }
    //           ]
    //
    //         }
    //       ),
    //
    //       HTMLMatch: {
    //         [`data-default--type-content-${mock_type_content}`]: true,
    //         [`data-default--priority-value-${mock_priority}`]: true,
    //         [`data-default--link-name-${mock_link_name}`]: true,
    //         [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
    //         [`data-default--variant-value-${mock_variant}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1
    //
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result?.HTMLMatch).toEqual(mock_result?.HTMLMatch)
    //   })
    //
    //   it('Should match only with name and value', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1']
    //     }
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             value: mock_value_1.values[0],
    //             name: mock_value_1.name
    //           }
    //         ]
    //       })
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1
    //
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toMatchObject(mock_result)
    //   })
    //
    //   it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'product_field_2',
    //       value: ['any_value_1', 'any_value_2', 'any_value_3']
    //     }
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             value: mock_value_1.values[0],
    //             name: mock_value_1.name
    //           },
    //           {
    //             value: mock_value_2.values[0],
    //             name: mock_value_2.name
    //           },
    //           {
    //             value: mock_value_2.values[1],
    //             name: mock_value_2.name
    //           }
    //         ]
    //       }),
    //
    //       HTMLMatch: {
    //         [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
    //         [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
    //         [`data-custom--match-by-specification-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name),
    //       generateMockLink(mock_value_2.values[0], mock_value_2.name),
    //       generateMockLink(mock_value_2.values[1], mock_value_2.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1,
    //         mock_value_2,
    //         {
    //           name: 'any_name',
    //           value: ['any_value']
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //     const privateMethodSpy = jest.spyOn(sut, resolver as any)
    //
    //     sut.filterCollection(mock_param_collection)
    //
    //     expect(privateMethodSpy).toBeCalled()
    //   })
    //
    //   it('Should return null if any match between name and values not occurs', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //
    //     const invalid_value = "invalid_value"
    //     const invalid_name = "invalid_name"
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             name: mock_value_1.name,
    //             value: mock_value_1.values[0]
    //           },
    //           {
    //             name: mock_value_2.name,
    //             value: mock_value_2.values[0]
    //           }
    //         ]
    //       })
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         {
    //           ...mock_value_1,
    //           value: [invalid_value]
    //         },
    //         {
    //           ...mock_value_2,
    //           name: invalid_name
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toBeNull()
    //   })
    // })
    //
    // describe('linksByVariation', () => {
    //   const resolver = 'linksByVariation'
    //   const propertieTolinkOnProductContext: T_refined_data_keys = 'variation'
    //   const propertieToHTMLMatchBy = 'variation-attr'
    //
    //   it('Should filter all links on linksBySpecificationAttr and return collection if any match occurs ', () => {
    //     const { mock_result,mock_links,mock_data,mock_refined_data, mock_param_collection } = useMockReturns({ resolver,propertieTolinkOnProductContext,propertieToHTMLMatchBy,options: { hasMoreOneMock: true } })
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toEqual(mock_result)
    //   })
    //
    //   it('Should return HTML identifier of all matchs', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'product_field_2',
    //       value: ['any_value_1', 'any_value_2', 'any_value_3']
    //     }
    //
    //     const mock_title_link_site_editor_1 = 'any_title_link_site_editor_1'
    //     const mock_title_link_site_editor_2 = 'any_title_link_site_editor_2'
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             value: mock_value_1.values[0],
    //             name: mock_value_1.name
    //           },
    //           {
    //             value: mock_value_2.values[0],
    //             name: mock_value_2.name
    //           },
    //           {
    //             value: mock_value_2.values[1],
    //             name: mock_value_2.name
    //           }
    //         ]
    //       }),
    //
    //       HTMLMatch: {
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_1}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}-site-editor--name-${mock_title_link_site_editor_2}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name,mock_title_link_site_editor_1),
    //       generateMockLink(mock_value_2.values[0], mock_value_2.name, mock_title_link_site_editor_2),
    //       generateMockLink(mock_value_2.values[1], mock_value_2.name, mock_title_link_site_editor_2)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1,
    //         mock_value_2,
    //         {
    //           name: 'any_name',
    //           value: ['any_value']
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result.HTMLMatch).toMatchObject(mock_result.HTMLMatch)
    //   })
    //
    //   it('Should return default HTML attributes on match', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //
    //     const mock_priority = '10'
    //     const mock_link_name = 'any_link_name'
    //     const mock_type_content = 'image'
    //     const mock_variant = 'variant-1'
    //
    //     const mock_result = {
    //       ...generateMockResult(
    //         propertieToHTMLMatchBy, {
    //           unlimitedvalue: [
    //             {
    //               value: mock_value_1.values[0],
    //               name: mock_value_1.name
    //             }
    //           ]
    //         },
    //         {
    //           priority: '10',
    //           typeContent: 'image',
    //           isActive: true,
    //           variant: mock_variant,
    //           __editorItemTitle: mock_link_name,
    //           items: [
    //             {
    //               __editorItemTitle: 'any_title',
    //               backgroundColor: 'any_color',
    //               color: 'any_color',
    //               text: 'any_text',
    //               fontWeight: 'any_weight',
    //               fontSize: 'any_size',
    //               borderRadius: 'any_radius',
    //               commonPropsBetweenContentAndImage: {
    //                 width: 'any_width',
    //                 height: 'any_height'
    //               }
    //             }
    //           ]
    //
    //         }
    //       ),
    //
    //       HTMLMatch: {
    //         [`data-default--type-content-${mock_type_content}`]: true,
    //         [`data-default--priority-value-${mock_priority}`]: true,
    //         [`data-default--link-name-${mock_link_name}`]: true,
    //         [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
    //         [`data-default--variant-value-${mock_variant}`]: true,
    //         [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1
    //
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result?.HTMLMatch).toEqual(mock_result?.HTMLMatch)
    //   })
    //
    //   it('Should match only with name and value', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1']
    //     }
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             value: mock_value_1.values[0],
    //             name: mock_value_1.name
    //           }
    //         ]
    //       })
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1
    //
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toEqual(mock_result)
    //   })
    //
    //   it('Should call the resolver of linksByProductAttr only if there is at least one link inside linksByProductAttr', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'product_field_2',
    //       value: ['any_value_1', 'any_value_2', 'any_value_3']
    //     }
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             value: mock_value_1.values[0],
    //             name: mock_value_1.name
    //           },
    //           {
    //             value: mock_value_2.values[0],
    //             name: mock_value_2.name
    //           },
    //           {
    //             value: mock_value_2.values[1],
    //             name: mock_value_2.name
    //           }
    //         ]
    //       }),
    //
    //       HTMLMatch: {
    //         [`data-custom--match-by-variation-attr--name-${normalizeString(mock_value_1.name)}--value-${normalizeString(mock_value_1.values[0])}`]: true,
    //         [`data-custom--match-by-variation-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[0])}`]: true,
    //         [`data-custom--match-by-variation-attr--name-${normalizeString(mock_value_2.name)}--value-${normalizeString(mock_value_2.values[1])}`]: true
    //       }
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name),
    //       generateMockLink(mock_value_2.values[0], mock_value_2.name),
    //       generateMockLink(mock_value_2.values[1], mock_value_2.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         mock_value_1,
    //         mock_value_2,
    //         {
    //           name: 'any_name',
    //           value: ['any_value']
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //     const privateMethodSpy = jest.spyOn(sut, resolver as any)
    //
    //     sut.filterCollection(mock_param_collection)
    //
    //     expect(privateMethodSpy).toBeCalled()
    //   })
    //
    //   it('Should return null if any match between name and values not occurs', () => {
    //     const mock_value_1: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //
    //     const mock_value_2: FieldDataRefined = {
    //       name: 'product_field_1',
    //       value: ['any_value_1', 'any_value_2']
    //     }
    //
    //     const invalid_value = "invalid_value"
    //     const invalid_name = "invalid_name"
    //
    //     const mock_result = {
    //       ...generateMockResult(propertieToHTMLMatchBy, {
    //         unlimitedvalue: [
    //           {
    //             name: mock_value_1.name,
    //             value: mock_value_1.values[0]
    //           },
    //           {
    //             name: mock_value_2.name,
    //             value: mock_value_2.values[0]
    //           }
    //         ]
    //       })
    //     }
    //
    //     const mock_links = [
    //       generateMockLink(mock_value_1.values[0], mock_value_1.name)
    //     ]
    //
    //     const mock_refined_data = generateMockRefinedDataOnProductContext({
    //       [propertieTolinkOnProductContext]: [
    //         {
    //           ...mock_value_1,
    //           value: [invalid_value]
    //         },
    //         {
    //           ...mock_value_2,
    //           name: invalid_name
    //         }
    //       ]
    //     })
    //
    //     const mock_param_collection = generateMockParamCollection(resolver, mock_links, mock_result)
    //
    //     const { sut } = makeSut(mock_refined_data)
    //
    //     const result = sut.filterCollection(mock_param_collection)
    //
    //     expect(result).toBeNull()
    //   })
    // })
  })
})