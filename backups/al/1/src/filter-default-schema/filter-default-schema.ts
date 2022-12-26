import { FilterListAttributesCtxReturn } from 'remap-schema/utils'

import {
  RefinedDataOnProductContext,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext,
  schema_site_editor_default_linkField,
  schema_site_editor_default_linkField_filtered,
  schema_site_editor_default_linkField_matched
} from '../../src/remap-schema/_interfaces'

const GenerateHTMLKey = (key: string, isDefault = true): string => (`data-${isDefault ? 'default--' : 'custom--'}${key}`)

const switchImprovement = (value: keyof schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext): string => {
  switch (value) {
    case 'theLinksPresentsInThisProductContextByProduct':
      return 'product-attr'
    case 'theLinksPresentsInThisProductContextByProductField':
      return 'specification-attr'
    case 'theLinksPresentsInThisProductContextByCollections':
      return 'collection-attr'
    case 'theLinksPresentsInThisProductContextByBrand':
      return 'brand-attr'
    case 'theLinksPresentsInThisProductContextByCategoryId':
      return 'category-attr'
    case 'theLinksPresentsInThisProductContextByVariations':
      return 'variation-attr'
    default:
      return value
  }
}

export const normalizeString = (text?: string): string => {
  if (!text) return
  const preValue = String(text).replace(/-/g, ' ')

  return preValue?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s-]+/g, '-').toLowerCase()
}

const compare = (value?: any): string => {
  if (!value) {
    return ''
  }

  return String(value)?.toString()?.toLowerCase()
}
export class FilterDefaultSchema {
  constructor(
    private readonly refinedDataOnProductContext: RefinedDataOnProductContext,
    private readonly showLogs?: boolean
  ) { }

  private theLinksPresentsInThisProductContextByProduct(link: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const match =
      link?.find(currentLink => compare(currentLink?.__editorItemTitle) === compare(this.refinedDataOnProductContext?.productId))

    if (!match) return null

    return {
      HTMLMatch: {
        [GenerateHTMLKey(`match-by-product-attr-value-${match.__editorItemTitle}`, false)]: true
      }
    }
  }

  private theLinksPresentsInThisProductContextByBrand(link: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const match =
      link?.find(currentLink => compare(currentLink?.__editorItemTitle) === compare(this.refinedDataOnProductContext?.brandId))

    if (!match) return null

    return {
      HTMLMatch: {
        [GenerateHTMLKey(`match-by-brand-attr-value-${match.__editorItemTitle}`, false)]: true
      }
    }
  }

  private theLinksPresentsInThisProductContextByCategoryId(link: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const match =
      link?.find(currentLink => compare(currentLink?.__editorItemTitle) === compare(this.refinedDataOnProductContext?.categoryId))

    if (!match) return null

    return {
      HTMLMatch: {
        [GenerateHTMLKey(`match-by-category-attr-value-${match.__editorItemTitle}`, false)]: true
      }
    }
  }


  private theLinksPresentsInThisProductContextByCollections(links: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const listOfMatchs = links.filter(link => {
      const refinedDataOnProductCtx = this.refinedDataOnProductContext?.listOfCollections

      const match = refinedDataOnProductCtx
        ?.find(refinedData => {
          return compare(refinedData?.id) === compare(link?.__editorItemTitle)
        })

      if (!match) return false

      return true
    })

    if (listOfMatchs.length === 0) return null

    const listOfMatchsRemapped = listOfMatchs?.reduce((acc, current) => {
      return {
        ...acc,
        [GenerateHTMLKey(`match-by-collection-attr--value-${current?.__editorItemTitle}`, false)]: true
      }
    }, {})

    return {
      HTMLMatch: listOfMatchsRemapped
    }
  }

  private theLinksPresentsInThisProductContextByProductField(links: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const listOfMatchs = links?.filter(link => {
      const refinedDataOnProductCtx = this.refinedDataOnProductContext?.listOfProductFields

      const matchName = refinedDataOnProductCtx
        ?.find(refinedData => {
          return compare(refinedData?.name) === compare(link?.__editorItemTitle)
        })

      const matchValue = matchName?.values?.find(value => compare(value) === compare(link?.extraCampToFilter_1))

      return Boolean(!!matchValue && !!matchName)
    })

    if (listOfMatchs.length === 0) return null

    const listOfMatchsRemapped = listOfMatchs?.reduce((acc, current) => {
      return {
        ...acc,
        [GenerateHTMLKey(`match-by-specification-attr--name-${current?.__editorItemTitle}--value-${current?.extraCampToFilter_1}`, false)]: true
      }
    }, {})

    return {
      HTMLMatch: listOfMatchsRemapped
    }
  }

  private theLinksPresentsInThisProductContextByVariations(links: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const listOfMatchs = links?.filter(link => {
      const refinedDataOnProductCtx = this.refinedDataOnProductContext?.listOfVariations

      const matchName = refinedDataOnProductCtx
        ?.find(refinedData => {
          return compare(refinedData?.name) === compare(link?.__editorItemTitle)
        })

      const matchValue = matchName?.values?.find(value => compare(value) === compare(link?.extraCampToFilter_1))

      return Boolean(!!matchValue && !!matchName)
    })

    if (listOfMatchs.length === 0) return null

    const listOfMatchsRemapped = listOfMatchs?.reduce((acc, current) => {
      return {
        ...acc,
        [GenerateHTMLKey(`match-by-variation-attr--name-${current?.__editorItemTitle}--value-${current?.extraCampToFilter_1}`, false)]: true
      }
    }, {})

    return {
      HTMLMatch: listOfMatchsRemapped
    }
  }

  public filterCollection(collection: schema_site_editor_default_collection_flags, showLogs: boolean = false): schema_site_editor_default_linkField_filtered | null {
    if (!this.refinedDataOnProductContext || !collection) return null

    const { _containerConfigsOfLinksPresentsOnProductContext, ...currentCollectionData } = collection

    const linksInsideThisCollection = collection._containerConfigsOfLinksPresentsOnProductContext?.[0]

    const linksFiltereds = Object.keys(linksInsideThisCollection).map((key: keyof schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext) => {
      const currentLink = linksInsideThisCollection[key]

      if (!currentLink || !Array.isArray(currentLink) || currentLink?.length === 0 || key === '__editorItemTitle') return null

      if (typeof this?.[key] !== 'function') return null

      const matchLinkOnRefined = this?.[key](currentLink)

      if (!matchLinkOnRefined) return null

      return {
        ...matchLinkOnRefined.HTMLMatch,
        [GenerateHTMLKey(`match-occurs-by-${switchImprovement(key)}`)]: true
      }
    })

    if (linksFiltereds?.length === 0 || linksFiltereds?.every(link => link === null)) return null

    const {
      __editorItemTitle = '',
      priority = '0',
      typeContent = 'createContent',
      variant = 'variant-1'
    } = collection

    return {
      ...currentCollectionData,
      HTMLMatch: {
        ...linksFiltereds[0],
        [GenerateHTMLKey(`priority-value-${priority}`)]: true,
        [GenerateHTMLKey(`type-content-${typeContent}`)]: true,
        [GenerateHTMLKey(`link-name-${normalizeString(collection.__editorItemTitle)}`)]: true,
        [GenerateHTMLKey(`variant-value-${variant}`)]: true
      }
    }
  }
}