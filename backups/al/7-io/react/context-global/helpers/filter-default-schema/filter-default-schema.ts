import {
  RefinedDataOnProductContext,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_linkField,
  schema_site_editor_default_linkField_filtered,
  schema_site_editor_default_linkField_matched,
  schema_site_editor_default_screen_config_links,
  T_schema_links_to_filter
} from '../../_interfaces'

export const GenerateHTMLKey = (key: string, isDefault = true): string => `data-${isDefault ? 'default--' : 'custom--'}${normalizeString(key, isDefault)}`

const switchImprovement = (value: T_schema_links_to_filter): string => {
  switch (value) {
    case 'linksByProduct':
      return 'product-attr'
    case 'linksBySpecification':
      return 'specification-attr'
    case 'linksByCollection':
      return 'collection-attr'
    case 'linksByBrand':
      return 'brand-attr'
    case 'linksByCategory':
      return 'category-attr'
    case 'linksByVariation':
      return 'variation-attr'
    default:
      return value
  }
}

export const normalizeString = (text?: string, isDefault = true): string => {
  if (!text) return ''
  const preValue = String(text).replace(/-/g, ' ')

  const format =
    preValue
      ?.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/([A-Z])/g, '-$1')
      .replace(/[\s-]+/g, '-')
      .toLowerCase()

  if (!isDefault) {
    return format
      .replace(/-name/g, '--name')
      .replace(/-value/g, '--value')
  }

  return format
}

const compare = (value?: string | number): string => {
  if (!value) {
    return ''
  }

  return String(value)?.toString()?.toLowerCase()
}
export class FilterDefaultSchema {
  constructor(
    private readonly refinedDataOnProductContext: RefinedDataOnProductContext
  ) { }

  private linksByProduct(link: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const match =
      link?.find(currentLink => compare(currentLink?.value) === compare(this.refinedDataOnProductContext?.productId))

    if (!match) return null

    return {
      HTMLMatch: {
        [GenerateHTMLKey(`match-by-product-attr-value-${match.value}`, false)]: true,
        ...(match.__editorItemTitle ? { [GenerateHTMLKey(`match-by-product-attr-site-editor--name-${match?.__editorItemTitle}`, false)]: true } : {})
      }
    }
  }

  private linksByBrand(link: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const match =
      link?.find(currentLink => compare(currentLink?.value) === compare(this.refinedDataOnProductContext?.brandId))

    if (!match) return null

    return {
      HTMLMatch: {
        [GenerateHTMLKey(`match-by-brand-attr-value-${match.value}`, false)]: true,
        ...(match.__editorItemTitle ? { [GenerateHTMLKey(`match-by-brand-attr-site-editor--name-${match?.__editorItemTitle}`, false)]: true } : {})
      }
    }
  }

  private linksByCategory(link: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const match =
      link?.find(currentLink => compare(currentLink?.value) === compare(this.refinedDataOnProductContext?.categoryId))

    if (!match) return null

    return {
      HTMLMatch: {
        [GenerateHTMLKey(`match-by-category-attr-value-${match.value}`, false)]: true,
        ...(match?.__editorItemTitle ? { [GenerateHTMLKey(`match-by-category-attr-site-editor--name-${match?.__editorItemTitle}`, false)]: true } : {})
      }
    }
  }

  private linksByCollection(links: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const listOfMatchs = links.filter(link => {
      const refinedDataOnProductCtx = this.refinedDataOnProductContext?.listOfCollections

      const match = refinedDataOnProductCtx
        ?.find(refinedData => {
          return compare(refinedData?.id) === compare(link?.value)
        })

      if (!match) return false

      return true
    })

    if (listOfMatchs.length === 0) return null

    const listOfMatchsRemapped = listOfMatchs?.reduce((acc, current) => {
      return {
        ...acc,
        [GenerateHTMLKey(`match-by-collection-attr--value-${current?.value}`, false)]: true,
        ...(current.__editorItemTitle ? { [GenerateHTMLKey(`match-by-collection-attr-site-editor--name-${current?.__editorItemTitle}`, false)]: true } : {})
      }
    }, {})

    return {
      HTMLMatch: listOfMatchsRemapped
    }
  }

  private linksBySpecification(links: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const listOfMatchs = links?.filter(link => {
      const refinedDataOnProductCtx = this.refinedDataOnProductContext?.listOfProductFields

      const matchName = refinedDataOnProductCtx
        ?.find(refinedData => {
          return compare(refinedData?.name) === compare(link?.name)
        })

      const matchValue = matchName?.values?.find(value => compare(value) === compare(link?.value))

      return Boolean(!!matchValue && !!matchName)
    })

    if (listOfMatchs.length === 0) return null

    const listOfMatchsRemapped = listOfMatchs?.reduce((acc, current) => {
      return {
        ...acc,
        [GenerateHTMLKey(`match-by-specification-attr--name-${current?.name}--value-${current?.value}`, false)]: true,
        ...(current.__editorItemTitle ? { [GenerateHTMLKey(`match-by-specification-attr-site-editor--name-${current?.__editorItemTitle}`, false)]: true } : {})
      }
    }, {})

    return {
      HTMLMatch: listOfMatchsRemapped
    }
  }

  private linksByVariation(links: schema_site_editor_default_linkField[]): schema_site_editor_default_linkField_matched | null {
    const listOfMatchs = links?.filter(link => {
      const refinedDataOnProductCtx = this.refinedDataOnProductContext?.listOfVariations

      const matchName = refinedDataOnProductCtx
        ?.find(refinedData => {
          return compare(refinedData?.name) === compare(link?.name)
        })

      const matchValue = matchName?.values?.find(value => compare(value) === compare(link?.value))

      return Boolean(!!matchValue && !!matchName)
    })

    if (listOfMatchs.length === 0) return null

    const listOfMatchsRemapped = listOfMatchs?.reduce((acc, current) => {
      return {
        ...acc,
        [GenerateHTMLKey(`match-by-variation-attr--name-${current?.name}--value-${current?.value}`, false)]: true,
        ...(current.__editorItemTitle ? { [GenerateHTMLKey(`match-by-variation-attr-site-editor--name-${current?.__editorItemTitle}`, false)]: true } : {})
      }
    }, {})

    return {
      HTMLMatch: listOfMatchsRemapped
    }
  }

  public filterCollection(collection: schema_site_editor_default_collection_flags): schema_site_editor_default_linkField_filtered | null {
    if (!this.refinedDataOnProductContext || !collection || !collection.isActive) return null

    const { _screen_config_links = [], ...currentCollectionData } = collection

    const linksInsideThisCollection = collection?._screen_config_links?.[0]

    if (!linksInsideThisCollection) return null

    const linksFiltereds = (Object?.keys(linksInsideThisCollection) as any)
      ?.reduce((acc: any, key: keyof Omit<schema_site_editor_default_screen_config_links, '__editorItemTitle'>) => {
        const currentLink = linksInsideThisCollection?.[key]

        if (!currentLink || !Array.isArray(currentLink) || currentLink?.length === 0 || typeof this?.[key] !== 'function') return null


        const matchLinkOnRefined = this?.[key](currentLink)
        if (!matchLinkOnRefined) return null

        return {
          ...acc,
          ...matchLinkOnRefined.HTMLMatch,
          [GenerateHTMLKey(`match-occurs-by-${switchImprovement(key as T_schema_links_to_filter)}`)]: true
        }
      }, {})

    if (!linksFiltereds) return null

    const {
      priority = '0',
      typeContent = 'createContent',
      variant = 'variant-1'
    } = collection

    return {
      ...currentCollectionData,
      HTMLMatch: {
        ...linksFiltereds,
        [GenerateHTMLKey(`priority-value-${priority}`)]: true,
        [GenerateHTMLKey(`type-content-${typeContent}`)]: true,
        [GenerateHTMLKey(`link-name-${collection.__editorItemTitle}`)]: true,
        [GenerateHTMLKey(`variant-value-${variant}`)]: true
      }
    }
  }
}
