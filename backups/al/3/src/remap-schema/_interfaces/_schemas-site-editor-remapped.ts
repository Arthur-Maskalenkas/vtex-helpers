import {
  schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext,
  schema_site_editor_default_priorirty_config_container
} from "./_schemas-site-editor-default"

export type schema_site_editor_remapped_quadrants = "quadrantTopLeft" | "quadrantTopRight" | "quadrantBottom"

export interface schema_site_editor_remapped_root_custom_app_badge_custom {
  quadrantBottom?: schema_site_editor_remapped_custom_quadrant
  quadrantTopRight?: schema_site_editor_remapped_custom_quadrant
  quadrantTopLeft?: schema_site_editor_remapped_custom_quadrant
}

export interface schema_site_editor_remapped_custom_quadrant {
  dataHTMLOnContainerFlag: any
  listOfFlags?: schema_site_editor_remapped_custom_flag[]
  priorityConfigContainer: schema_site_editor_default_priorirty_config_container
  name: string
  hasCollection: boolean
}

export interface schema_site_editor_remapped_custom_flag {
  currentCollection: schema_site_editor_remapped_collection_flags
  quadrantOwner: string
  priority: number
  id?: number
  HTMLAttributes?: any
  badgesStyles?: any
}

export interface schema_site_editor_remapped_QuadrantStyles {
  __editorItemTitle: string
  horizontalDistance: string
  verticalDistance: string
  positionFlow?: "leftToRight" | "rightToLeft" | "center"
}

export interface schema_site_editor_remapped_collection_flags {
  typeContent: 'image' | 'createContent'
  variant?: 'variant-default' | 'variant-1' | 'variant-2' | 'variant-3'
  styles: schema_site_editor_remapped_option_image | schema_site_editor_remapped_option_content
}

// se opção selecionada:imagem
export interface schema_site_editor_remapped_option_image {
  src: string
  alt: string
  commonStyles: schema_site_editor_remapped_common_image_content
}

// se opção selecionada:criar conteúdo
export interface schema_site_editor_remapped_option_content {
  "__editorItemTitle"?: string
  text?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  backgroundColor?: string
  borderRadius?: string
  commonStyles?: schema_site_editor_remapped_common_image_content
}

export interface schema_site_editor_remapped_common_image_content {
  width: string
  height: string
}