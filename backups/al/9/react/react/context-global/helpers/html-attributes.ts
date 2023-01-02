import { ListFilteredItems, schema_filter_collection_flags } from "./filter"

const normalizeString = (text?: string) => {
  if (!text) return
  const preValue = String(text).replace(/-/g, ' ')

  return preValue?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s-]+/g, '-').toLowerCase()
}



export const remapQuadrantTopRight = (currentCollection: schema_filter_collection_flags, schema: ListFilteredItems) => {
  return schema?.quadrantTopRight
    ?.find(item => item.__editorItemTitle === currentCollection.__editorItemTitle)
    ?.matchListLinkAttributes?.matchListLinksOnCollections?.reduce((acc, collection) => {
      return {
        ...acc,
        [`data-match-product-field-id-${normalizeString(collection.__editorItemTitle)}}`]: true
      }
    }, {})
}
