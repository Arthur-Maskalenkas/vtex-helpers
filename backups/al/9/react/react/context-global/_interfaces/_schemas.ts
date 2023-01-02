//
// ** Valores que estão chegando do site editor **
//
import { RefinedDataOnProductContext } from "../../components/badges-avanti/_interfaces";
import { QuadrantStyles } from "./_schemas-mapped";

export type schema_containerConfigsOfLinksPresentsOnProductContext = {
  __editorItemTitle: string
  theLinksPresentsInThisProductContextByProduct: schema_linkField[]
  theLinksPresentsInThisProductContextByCollections: schema_linkField[]
  theLinksPresentsInThisProductContextByProductField: schema_linkField[]
  theLinksPresentsInThisProductContextByVariations: schema_linkField[]
  theLinksPresentsInThisProductContextByCategoryId: schema_linkField[]
  theLinksPresentsInThisProductContextByBrand: schema_linkField[]
}

export type schema_linkField = {
  __editorItemTitle: string
  priority: string
  propertieToLinkOnCtx: keyof RefinedDataOnProductContext
  extraCampToFilter_1?: string
}

export interface schema_root_app_badge_custom {
  quadrantBottom?: schema_container_generic_quadrant
  quadrantTopRight?: schema_container_generic_quadrant
  quadrantTopLeft?: schema_container_generic_quadrant
}

export type schema_priorirty_config_container = {
  prioritySystemOnQuadrant: 'priorityByList' | 'priorityByField'
  isInverted: boolean
}

export interface schema_container_generic_quadrant {
  __editorItemTitle: string
  _positioningContainer: [QuadrantStyles]
  _priorityConfigContainer: [schema_priorirty_config_container]
  collection?: schema_collection_flags[]
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_ROOT = {
  schemaAppBadgeCustom: schema_flags_custom[]
}


export interface schema_flags_custom {
  __editorItemTitle: string
  quadrantBottom: schema_container_bottom_quadrant[]
  quadrantTopRight: schema_container_generic_quadrant[]
  quadrantTopLeft: schema_container_generic_quadrant[]
}

export interface schema_container_bottom_quadrant extends schema_container_generic_quadrant {
  positionFlow?: "leftToRight" | "rightToLeft" | "center"
}

export interface schema_collection_flags {
  __editorItemTitle: string
  typeContent: 'image' | 'createContent'
  variant?: 'variant-default' | 'variant-1' | 'variant-2' | 'variant-3'
  isActive: boolean
  id: number
  priority: number
  _containerConfigsOfLinksPresentsOnProductContext: schema_containerConfigsOfLinksPresentsOnProductContext[]
  items: schema_option_image[] | schema_option_content[]
}

// se opção selecionada:imagem
export interface schema_option_image {
  src: string
  alt: string
  commonPropsBetweenContentAndImage: schema_common_image_content
}

// se opção selecionada:criar conteúdo
export interface schema_option_content {
  "__editorItemTitle": string
  text: string
  fontSize: string
  fontWeight: string
  color: string
  backgroundColor: string
  borderRadius: string
  commonPropsBetweenContentAndImage: schema_common_image_content
}

// propriedades comuns para imagem e conteúdo customizados
export interface schema_common_image_content {
  width: string
  height: string
}
