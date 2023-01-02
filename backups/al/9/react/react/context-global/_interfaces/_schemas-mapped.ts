import { Highlight } from "../../components/badges-avanti/_interfaces";
import { schema_containerConfigsOfLinksPresentsOnProductContext, schema_priorirty_config_container } from "./_schemas";


export type Quadrants = "quadrantTopLeft" | "quadrantTopRight" | "quadrantBottom"

export interface schema_root_custom_app_badge_custom {
  quadrantBottom?: schema_custom_quadrant
  quadrantTopRight?: schema_custom_quadrant
  quadrantTopLeft?: schema_custom_quadrant
}


export interface schema_custom_quadrant {
  groupStyles: QuadrantStyles
  contentList?: schema_custom_flag[]
  hasCollection: boolean
  priorityConfigContainer: schema_priorirty_config_container
  name: string
}

export type HTMLAttributes = {
  [`data-priority`]: string
  [`data-match-brand-id`]: string
  [`data-match-category-id`]: string
  [`data-match-product-id`]: string

  [`data-match-list-collection`]: string
  [`data-match-list-variation`]: string
  [`data-match-list-product-field`]: string
}



export interface schema_custom_flag {
  highlight: Highlight
  currentCollection: remapped_schema_collection_flags
  quadrantOwner: QuadrantOwner
  priority: number
  id?: number
  HTMLAttributes?: any
  badgesStyles?: any
}

export type QuadrantOwner = {
  name: string
}

export interface QuadrantStyles {
  horizontalDistance: string
  verticalDistance: string
  positionFlow?: "leftToRight" | "rightToLeft" | "center"
}



export interface remapped_schema_collection_flags {
  typeContent: 'image' | 'createContent'
  variant?: 'variant-default' | 'variant-1' | 'variant-2' | 'variant-3'
  id: number
  containerLinkField?: schema_containerConfigsOfLinksPresentsOnProductContext
  styles: remapped_schema_option_image | remapped_schema_option_content
}

// se opção selecionada:imagem
export interface remapped_schema_option_image {
  src: string
  alt: string
  commonStyles: remapped_schema_common_image_content
}

// se opção selecionada:criar conteúdo
export interface remapped_schema_option_content {
  "__editorItemTitle": string
  text: string
  fontSize: string
  fontWeight: string
  color: string
  backgroundColor: string
  borderRadius: string
  commonStyles: remapped_schema_common_image_content
}

export interface remapped_schema_common_image_content {
  width: string
  height: string
}


export interface schema_custom_product_filds_for_filter {
  theLinksPresentsInThisProductContextByProduct: schema_custom_linkField[]
  theLinksPresentsInThisProductContextByCollections: schema_custom_linkField[]
  theLinksPresentsInThisProductContextByProductField: schema_custom_linkField[]
  theLinksPresentsInThisProductContextByVariations: schema_custom_linkField[]
  theLinksPresentsInThisProductContextByCategoryId: schema_custom_linkField[]
}

export interface schema_custom_linkField {
  valueLink: string
  priority: string
}
