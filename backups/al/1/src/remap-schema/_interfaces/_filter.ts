import {
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_linkField, TypeContent
} from './_schemas-site-editor-default'

export interface ListFilteredItems {
  quadrantBottom?: schema_filter_collection_flags[]
  quadrantTopRight?: schema_filter_collection_flags[]
  quadrantTopLeft?: schema_filter_collection_flags[]
}

export interface schema_filter_collection_flags extends schema_site_editor_default_collection_flags {
  matchListLinkAttributes?: {
    matchListLinksOnProductField: schema_site_editor_default_linkField[] | null
    matchListLinksOnCollections: schema_site_editor_default_linkField[] | null
    matchListLinksOnVariations: schema_site_editor_default_linkField[] | null
  }
  matchLinksAttributes?: {
    matchLinkOnCategoryId: schema_site_editor_default_linkField | null
    matchLinkOnBrandId: schema_site_editor_default_linkField | null
    matchLinkOnProductId: schema_site_editor_default_linkField | null
  }
}

// novo

export type PropertiesToLinkOnCtx = 'listOfVariations' | 'categoryId' | 'brandId' | 'productId' | 'ListOfCollections' | 'ListOfProductFields'

type RemappedDataHTMLAttributes<Attribute> = {
  [Property in keyof Attribute as `data-${string & Property}`]: Attribute[Property]
}

interface MatchsWithOneAttributesHTMLAttributes {
  [`match-brand-id`]?: string
  [`match-category-id`]?: string
  [`match-product-id`]?: string
  [`match-collection-id`]?: string

  [`match-brand-name`]?: string
  [`match-category-name`]?: string
  [`match-product-name`]?: string
  [`match-collection-name`]?: string
}

interface MatchsWithTwoAttributesHTMLAttributes {
  [`match-variation-value`]?: string
  [`match-specification-value`]?: string

  [`match-variation-name`]?: string
  [`match-specification-name`]?: string
}

interface HTMLAttributes extends MatchsWithOneAttributesHTMLAttributes, MatchsWithTwoAttributesHTMLAttributes {
  [`priority`]: string
  [`typeContent`]: TypeContent
  [`link-match-by`]: string
}

export type schema_site_editor_default_linkField_filtered = {
  HTMLMatch?: any
} & Omit<schema_site_editor_default_collection_flags, "_containerConfigsOfLinksPresentsOnProductContext">

export type schema_site_editor_default_linkField_matched = {
  HTMLMatch: Object
}