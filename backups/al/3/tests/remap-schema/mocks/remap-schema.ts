import {
  ListOfCollection, ListOfProductField, ListOfVariation,
  RefinedDataOnProductContext,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_container_generic_quadrant,
  schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext,
  schema_site_editor_default_option_content,
  schema_site_editor_default_option_image,
  schema_site_editor_default_quadrant_editor_title,
  schema_site_editor_default_quadrant_name,
  schema_site_editor_default_root_app_badge_custom
} from 'remap-schema/_interfaces'

export interface GenerateQuadrant {
  quadrantName?: schema_site_editor_default_quadrant_editor_title
  quadrant?: schema_site_editor_default_quadrant_name
  horizontalDistance?: string
  verticalDistance?: string
  positionFlow?: 'center' | 'left' | 'right'
  isInverted?: boolean
  prioritySystemOnQuadrant?: 'priorityByList' | 'priorityByPosition'
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
  [quadrant]: {
    _positioningContainer: [{
      horizontalDistance,
      verticalDistance,
      __editorItemTitle: quadrantName,
      positionFlow
    }],

    _priorityConfigContainer: [{
      isInverted,
      __editorItemTitle: quadrantName,
      prioritySystemOnQuadrant
    }],

    __editorItemTitle: quadrantName,
    collection: collections
  } as schema_site_editor_default_container_generic_quadrant
})

export interface CollectionMocked {
  title?: string
  variant?: 'variant-default' | 'variant-1' | 'variant-2' | 'variant-3'
  priority?: string
  isActive?: boolean
  propertieToLinkOnCtx?: keyof RefinedDataOnProductContext
  typeContent?: "image" | "createContent"
  items?: schema_site_editor_default_option_image[] | schema_site_editor_default_option_content[]
  linksContainer: schema_site_editor_default_containerConfigsOfLinksPresentsOnProductContext[]
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
  _containerConfigsOfLinksPresentsOnProductContext: linksContainer,
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