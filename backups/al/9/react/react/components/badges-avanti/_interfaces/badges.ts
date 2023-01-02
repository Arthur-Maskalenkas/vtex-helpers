import { QuadrantOwner } from "../../../context-global/_interfaces"
import { remapped_schema_collection_flags } from "../../../context-global/_interfaces/_schemas-mapped";

export type HighlightType = 'collection' | 'promotion' | 'teaser'

export interface Filter {
  type: 'hide' | 'show'
  highlightNames: string[]
}

export interface Highlight {
  id?: string
  name: string
}

export type BadgesAvantiProps = {
  filter?: Filter
  type?: HighlightType
} & ContentRenderProps

export type ContentRenderProps = {
  link?: string
  message: string
  markers?: string[]
  blockClass?: string
  value: { type: HighlightType, highlight: Highlight }
  collectionInCustomContextGlobal: remapped_schema_collection_flags
  quadrantOwner: QuadrantOwner
  HTMLAttributes: any
  badgesStyles?: any
}

export type RefinedDataOnProductContext = {
  brandId?: number
  categoryId?: string
  productId?: string
  listOfCollections?: ListOfCollection[]
  listOfVariations?: ListOfVariation[]
  listOfProductFields?: ListOfProductField[]
}

export interface ListOfCollection {
  id: string
  name: string
}

export interface ListOfVariation {
  name: string
  values: string[]
}

export interface ListOfProductField {
  name: string
  values: string[]
}

