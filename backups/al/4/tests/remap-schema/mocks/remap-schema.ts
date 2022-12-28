import {
  ListOfCollection,
  ListOfProductField,
  ListOfVariation,
  RefinedDataOnProductContext,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_option_content,
  schema_site_editor_default_option_image,
  schema_site_editor_default_root_app_badge_custom,
  schema_site_editor_default_screen_config_links
} from 'remap-schema/_interfaces'

import {
  T_schema_position_flow,
  T_schema_priority,
  T_schema_quadrant_name,
  T_schema_quadrant_title
} from '../../../src/remap-schema/_interfaces/_schema-types'

export interface GenerateQuadrant {
  quadrantName?: T_schema_quadrant_name
  quadrant?: T_schema_quadrant_title
  horizontalDistance?: string
  verticalDistance?: string
  positionFlow?: T_schema_position_flow
  isInverted?: boolean
  prioritySystemOnQuadrant?: T_schema_priority
  collections?: schema_site_editor_default_collection_flags[]
}

export const generateQuadrant = ({
  quadrantName = 'Quadrante - Direita',
  quadrant = 'quadrantTopRight',
  collections = [],
  horizontalDistance = '0px',
  verticalDistance = '0px',
  positionFlow = 'center',
  isInverted = false,
  prioritySystemOnQuadrant = 'priorityByList'
}: GenerateQuadrant): schema_site_editor_default_root_app_badge_custom => ({
  quadrantTopRight: [{
    _screen_config_position: [{
      horizontalDistance,
      verticalDistance,
      __editorItemTitle: quadrantName,
      positionFlow
    }],

    _screen_config_priority: [{
      isInverted,
      __editorItemTitle: quadrantName,
      prioritySystemOnQuadrant
    }],

    __editorItemTitle: quadrantName,
    collection: collections
  }]
})

export interface CollectionMocked {
  title?: string
  variant?: 'variant-default' | 'variant-1' | 'variant-2' | 'variant-3'
  priority?: string
  isActive?: boolean
  propertieToLinkOnCtx?: keyof RefinedDataOnProductContext
  typeContent?: "image" | "createContent"
  items?: schema_site_editor_default_option_image[] | schema_site_editor_default_option_content[]
  linksContainer: schema_site_editor_default_screen_config_links[]
}

export const generateCollection = ({
  isActive = true,
  priority = '1',
  title = 'Collection Name',
  typeContent = 'createContent',
  linksContainer = [],
  variant = 'variant-default',
  items = [{
    alt: 'alt',
    src: 'src',
    backgroundColor: '#FFFFFF',
    borderRadius: '0',
    color: '#000000',
    fontWeight: '400',
    fontSize: '16',
    text: 'text',
    __editorItemTitle: 'Configurações',
    commonPropsBetweenContentAndImage: {
      height: '100',
      width: '100'
    }
  } as schema_site_editor_default_option_content]
}: CollectionMocked): schema_site_editor_default_collection_flags => ({
  isActive,
  priority,
  typeContent,
  __editorItemTitle: title,
  variant,
  _screen_config_links: linksContainer,
  items: [...items]
})

export interface RefinedDataMocked {
  brandId?: number
  productId?: string
  categoryId?: string

  collections?: ListOfCollection[]
  variations?: ListOfVariation[]
  productFields?: ListOfProductField[]
}

export const generateRefinedData = ({
  brandId = 1,
  productId = '1',
  categoryId = '1',
  productFields = [],
  variations = [],
  collections = []
}: RefinedDataMocked): RefinedDataOnProductContext => ({
  brandId: 1,
  categoryId: '1',
  productId: '1',
  listOfCollections: collections,
  listOfProductFields: productFields,
  listOfVariations: variations
})