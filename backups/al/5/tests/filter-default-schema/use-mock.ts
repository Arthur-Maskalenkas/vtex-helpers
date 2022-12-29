import { normalizeString } from './_mocks/_default'

import {
  RefinedDataOnProductContext, schema_site_editor_default_collection_flags,
  schema_site_editor_default_linkField,
  schema_site_editor_default_linkField_filtered
} from '../../src/remap-schema/_interfaces'
import { T_refined_data_keys, T_resolver_links } from '../../src/remap-schema/_interfaces/_schema-types'

type Options = {
  hasMoreOneMock?: boolean
  renderWithTitle?: boolean
  eachMockHasMoreOneValue?: boolean
}

type UseMockReturnProps = {
  options?: Options
  propertieTolinkOnProductContext: T_refined_data_keys
  resolver: T_resolver_links
  propertieToHTMLMatchBy: string
}

type UseMockReturn = {
  mock_refined_data: RefinedDataOnProductContext
  mock_links: schema_site_editor_default_linkField[]
  mock_result: schema_site_editor_default_linkField_filtered
  mock_data: Array<{ name: string, values: string[] }>
  mock_param_collection: schema_site_editor_default_collection_flags
}

export const useMockReturns = ({
  options: {
    hasMoreOneMock = false,
    eachMockHasMoreOneValue = false,
    renderWithTitle = false
  },
  resolver,
  propertieToHTMLMatchBy,
  propertieTolinkOnProductContext
}: UseMockReturnProps): UseMockReturn => {
  const generateProductData = (variant: '1' | '2'): { name: string, values: string[] } => ({
    name: `title_product_${variant}`,
    ...eachMockHasMoreOneValue ? { values: ['attr_product_1', 'attr_product_2'] } : { values: ['attr_product_1'] }
  })

  const productData: Array<{ name: string, values: string[] }> =
    hasMoreOneMock
      ? [generateProductData('1'), generateProductData('2')]
      : [generateProductData('1')]

  const generateMockResult = (): schema_site_editor_default_linkField_filtered => {
    const mock_result_partial_data: Omit<schema_site_editor_default_linkField_filtered, 'HTMLMatch'> = {
      isActive: true,
      priority: '0',
      variant: 'variant-default',
      typeContent: 'createContent',
      __editorItemTitle: 'Container Coleção 1',
      items: []
    }

    const { priority,typeContent,__editorItemTitle,items,variant,isActive } = mock_result_partial_data

    return {
      ...mock_result_partial_data,
      HTMLMatch: {
        [`data-default--type-content-${typeContent.replace(/([A-Z])/g, '-$1').toLowerCase()}`]: true,
        [`data-default--priority-value-${priority}`]: true,
        [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
        [`data-default--variant-value-${variant}`]: true,
        [`data-default--link-name-${normalizeString(__editorItemTitle)}`]: true,
        ...productData.reduce((acc, {
          values,
          name
        }) => {
          values.forEach((value) => {
            acc[`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(name ?? 'default-name')}--value-${normalizeString(value ?? '1')}`] = true
          })
          return acc
        }, {})
      }
    }
  }

  const mock_result = generateMockResult()

  const mock_links: schema_site_editor_default_linkField[] = productData
    .map(({ name, values }) => ({
      name,
      value: values[0]
    }))

  const mock_refined_data = {
    [propertieTolinkOnProductContext]: mock_links.map(({ name, value }) => ({
      name,
      values: [value]
    }))
  }

  const mock_param_collection: schema_site_editor_default_collection_flags = {
    ...mock_result,
    _screen_config_links: [{
      [resolver]: mock_links
    }]
  }

  return {
    mock_links,
    mock_result,
    mock_data: [
      { name: productData[0].name, values: productData[0].values },
      { name: productData[1].name, values: productData[1].values }
    ],
    mock_refined_data,
    mock_param_collection
  }
}