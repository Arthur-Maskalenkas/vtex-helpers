import {
  RefinedDataOnProductContext,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext,
  schema_site_editor_default_linkField,
  schema_site_editor_default_linkField_filtered
} from '../../src/remap-schema/_interfaces'

export const normalizeString = (text?: string): string => {
  if (!text) return
  const preValue = String(text).replace(/-/g, ' ')

  return preValue?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s-]+/g, '-').toLowerCase()
}

export const generateHTMLResult = (propertieToHTMLMatchBy: string, value: string, name?: string) => {
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
    name?: string
    value?: string
    unlimitedValues?: Array<{
      name?: string
      value?: string
    }>

    unlimitedValuesById?: Array<{
      name?: string
      id?: string
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
    [`data-default--type-content-${result.typeContent}`]: true,
    [`data-default--priority-value-${result.priority}`]: true,
    [`data-default--match-occurs-by-${propertieToHTMLMatchBy}`]: true,
    [`data-default--variant-value-${result.variant}`]: true,
    [`data-default--link-name-${normalizeString(result.__editorItemTitle)}`]: true,
    ...!!valueToMatch?.name && { [`data-custom--match-by-${propertieToHTMLMatchBy}-name-${valueToMatch?.name ?? 1}`]: true },
    ...!!valueToMatch?.value && { [`data-custom--match-by-${propertieToHTMLMatchBy}-value-${valueToMatch?.value ?? 1}`]: true },
    ...valueToMatch?.unlimitedValues?.length > 0 && valueToMatch?.unlimitedValues?.reduce((acc, current) => {
      return {
        ...acc,
        [`data-custom--match-by-${propertieToHTMLMatchBy}--name-${normalizeString(current?.name ?? 'default-name')}--value-${normalizeString(current?.value ?? '1')}`]: true

      }
    }, {}),
    ...valueToMatch?.unlimitedValuesById?.length > 0 && valueToMatch?.unlimitedValuesById?.reduce((acc, current) => {
      return {
        ...acc,
        [`data-custom--match-by-${propertieToHTMLMatchBy}--value-${normalizeString(current?.id ?? '1')}`]: true
      }
    }, {})

  }
})

export const generateMockLink = (__editorItemTitle: string, propertieToLinkOnCtx: keyof RefinedDataOnProductContext, extraCampToFilter_1?: string): schema_site_editor_default_linkField => ({
  __editorItemTitle,
  extraCampToFilter_1,
  propertieToLinkOnCtx
})

export const generateMockParamCollection = (
  resolver: keyof Omit<schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext, '__editorItemTitle'>,
  links: schema_site_editor_default_linkField[],
  mockResult: schema_site_editor_default_linkField_filtered): schema_site_editor_default_collection_flags => ({
  ...mockResult,
  _containerConfigsOfLinksPresentsOnProductContext: [{
    [resolver]: links
  }]
})

export const generateMockRefinedDataOnProductContext = ({
  brandId = 1,
  categoryId = '1',
  listOfCollections = [],
  listOfProductFields = [],
  listOfVariations = [],
  productId = '1'
}: RefinedDataOnProductContext): RefinedDataOnProductContext => ({
  brandId,
  categoryId,
  productId,
  listOfVariations,
  listOfCollections,
  listOfProductFields
})