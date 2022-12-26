//
// ** Valores que estão chegando do site editor **
//
import { schema_site_editor_remapped_QuadrantStyles } from "./_schemas-site-editor-remapped"
import { RefinedDataOnProductContext } from "./_refined-data-on-product-context"

export type schema_site_editor_default_quadrant_editor_title = 'Quadrante - inferior' | 'Quadrante - Esquerda' | 'Quadrante - Direita'

export type schema_site_editor_default_quadrant_name = 'quadrantTopLeft' | 'quadrantTopRight' | 'quadrantBottom'

export type schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext = {
  __editorItemTitle?: string
  theLinksPresentsInThisProductContextByProduct?: schema_site_editor_default_linkField[]
  theLinksPresentsInThisProductContextByCollections?: schema_site_editor_default_linkField[]
  theLinksPresentsInThisProductContextByProductField?: schema_site_editor_default_linkField[]
  theLinksPresentsInThisProductContextByVariations?: schema_site_editor_default_linkField[]
  theLinksPresentsInThisProductContextByCategoryId?: schema_site_editor_default_linkField[]
  theLinksPresentsInThisProductContextByBrand?: schema_site_editor_default_linkField[]
}

export type schema_site_editor_default_linkField = {
  __editorItemTitle?: number | string
  "_"?: string
  propertieToLinkOnCtx: keyof RefinedDataOnProductContext
  extraCampToFilter_1?: string
}

export interface schema_site_editor_default_root_app_badge_custom {
  quadrantBottom?: schema_site_editor_default_container_generic_quadrant
  quadrantTopRight?: schema_site_editor_default_container_generic_quadrant
  quadrantTopLeft?: schema_site_editor_default_container_generic_quadrant
}

export type schema_site_editor_default_priorirty_config_container = {
  "_"?: string
  "_2"?: string
  __editorItemTitle?: string
  prioritySystemOnQuadrant: 'priorityByList' | 'priorityByField'
  isInverted: boolean
}

export interface schema_site_editor_default_container_generic_quadrant {
  __editorItemTitle?: string
  _positioningContainer: [schema_site_editor_remapped_QuadrantStyles]
  _priorityConfigContainer: [schema_site_editor_default_priorirty_config_container]
  collection?: schema_site_editor_default_collection_flags[]
}

export type schema_site_editor_default_root = {
  schemaAppFlagCustom: schema_site_editor_default_flags_custom[]
}

export interface schema_site_editor_default_flags_custom {
  __editorItemTitle?: string
  quadrantBottom?: schema_site_editor_default_container_bottom_quadrant[]
  quadrantTopRight?: schema_site_editor_default_container_generic_quadrant[]
  quadrantTopLeft?: schema_site_editor_default_container_generic_quadrant[]
}

export interface schema_site_editor_default_container_bottom_quadrant extends schema_site_editor_default_container_generic_quadrant {
  positionFlow?: "leftToRight" | "rightToLeft" | "center"
}

export type TypeContent = 'image' | 'createContent'

export interface schema_site_editor_default_collection_flags {
  __editorItemTitle?: string
  typeContent: 'image' | 'createContent'
  variant?: 'variant-default' | 'variant-1' | 'variant-2' | 'variant-3'
  isActive: boolean
  priority: string
  _containerConfigsOfLinksPresentsOnProductContext: schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext[]
  items: schema_site_editor_default_option_image[] | schema_site_editor_default_option_content[]
}

// se opção selecionada:imagem
export interface schema_site_editor_default_option_image {
  src: string
  alt: string
  commonPropsBetweenContentAndImage: schema_site_editor_default_common_image_content
}

// se opção selecionada:criar conteúdo
export interface schema_site_editor_default_option_content {
  "__editorItemTitle"?: string
  text?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  backgroundColor?: string
  borderRadius?: string
  commonPropsBetweenContentAndImage?: schema_site_editor_default_common_image_content
}

// propriedades comuns para imagem e conteúdo customizados
export interface schema_site_editor_default_common_image_content {
  width: string
  height: string
}