import { RefinedDataOnProductContext, schema_site_editor_default_linkField } from "./_interfaces"

const compare = (value?: any): string => {
  if (!value) {
    return ''
  }

  return String(value)?.toString()?.toLowerCase()
}

export const filterAttributeCtx = (linkList: schema_site_editor_default_linkField[], refinedDataOnProductCtx: RefinedDataOnProductContext): schema_site_editor_default_linkField | null => {
  const match =
linkList?.find((link) => {
  const {
    __editorItemTitle,
    propertieToLinkOnCtx

  } = link

  return compare(__editorItemTitle) === compare(refinedDataOnProductCtx[propertieToLinkOnCtx])
})

  if (!match) return null

  return match
}

export type FilterListAttributesCtx = keyof Pick<RefinedDataOnProductContext, 'listOfCollections' | 'listOfProductFields' | 'listOfVariations'>

export type FilterListAttributesCtxReturn = { name: string, values: string[], id: string }

export const filterListAttributesCtx =
(linkProp: schema_site_editor_default_linkField[],
  refinedDataOnProductContext: RefinedDataOnProductContext,
  propertieToCompare: FilterListAttributesCtx
): schema_site_editor_default_linkField[] | null => {
  const matchs: schema_site_editor_default_linkField[] | null = linkProp?.filter(link => {
    const refinedDataOnProductCtx = refinedDataOnProductContext?.[propertieToCompare] as FilterListAttributesCtxReturn[]

    const isListOfCollections = propertieToCompare === 'listOfCollections'
    const propToCompare = isListOfCollections
      ? 'id'
      : 'name'

    const matchName = refinedDataOnProductCtx?.find(refinedData => {
      return compare(refinedData?.[propToCompare]) === compare(link?.__editorItemTitle)
    })

    if (isListOfCollections) {
      return Boolean(matchName)
    }

    const matchValueByName = matchName?.values?.find(value => compare(value) === compare(link?.extraCampToFilter_1))

    return Boolean(!!matchValueByName && !!matchName)
  })

  return matchs
}