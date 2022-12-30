import {
  DataRefined, FieldDataRefined,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_linkField,
  schema_site_editor_default_linkField_filtered,
  schema_site_editor_default_screen_config_links
} from '../../../src/_interfaces'

export const normalizeString = (text?: string): string => {
  if (!text) return
  const preValue = String(text).replace(/-/g, ' ')

  return preValue?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s-]+/g, '-').toLowerCase()
}

export const generateHTMLResult = (propertieToHTMLMatchBy: string, value: string, name?: string): Object => {
  let result = {}

  if (name) {
    result = { [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(name ?? 'default-name')}--value-${normalizeString(value)}`]: true }
  }

  if (!name) {
    result = { [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(value)}`]: true }
  }

  return result
}

export const generateMockResult = (
  propertieToHTMLMatchBy: string,
  valueToMatch?: {
    nameLink?: string
    name?: string
    value?: string
    unlimitedValues?: Array<{
      name?: string
      value?: string
    }>
  },

  result: schema_site_editor_default_linkField_filtered = {
    isActive: true,
    items: [],
    priority: "1",
    typeContent: 'createContent',
    variant: 'variant-default',
    __editorItemTitle: 'Container Coleção 1'
  }): schema_site_editor_default_linkField_filtered => ({
  ...result,
  HTMLMatch: {
    [`data-default--type-content-${result.typeContent.replace(/([A-Z])/g, '-$1').toLowerCase()}`]: true,
    [`data-default--priority-value-${result.priority}`]: true,
    ...(!!valueToMatch?.nameLink && { [`match-by-${propertieToHTMLMatchBy}-site-editor--name-${valueToMatch?.nameLink}`]: true }),
    [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
    [`data-default--variant-value-${result.variant}`]: true,
    [`data-default--link-name-${normalizeString(result.__editorItemTitle)}`]: true,
    ...!!valueToMatch?.name && { [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${valueToMatch?.name ?? 1}`]: true },
    ...!!valueToMatch?.value && { [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${valueToMatch?.value ?? 1}`]: true },
    ...valueToMatch?.unlimitedValues?.length > 0 && valueToMatch?.unlimitedValues?.reduce((acc, current) => {
      return {
        ...acc,
        [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(current?.name ?? 'default-name')}--value-${normalizeString(current?.value ?? '1')}`]: true
      }
    }, {})
  }
})

export const generateMockLink = (value: string, name?: string, __editorItemTitle?: string): schema_site_editor_default_linkField => ({
  name,
  value,
  __editorItemTitle
})

export const generateMockParamCollection = (
  resolver: keyof Omit<schema_site_editor_default_screen_config_links, '__editorItemTitle'>,
  links: schema_site_editor_default_linkField[],
  mockResult: schema_site_editor_default_linkField_filtered): schema_site_editor_default_collection_flags => ({
  ...mockResult,
  _screen_config_links: [{
    [resolver]: links
  }]
})

export const generateMockRefinedDataOnProductContext = ({
  brand = { value: '1' },
  category = { value: '1' },
  collection = [],
  specification = [],
  variation = [],
  product = { value: '1' }
}: DataRefined): DataRefined => ({
  brand,
  category,
  product,
  variation,
  collection,
  specification
})

//

export const generateMockValue = <T = string[] | string>(value: T,name?: string): FieldDataRefined<T> => ({
  value,
  name
})