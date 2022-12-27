import {
  RefinedDataOnProductContext,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_container_generic_quadrant
} from 'remap-schema/_interfaces'

import { mock_default_quadrant_base_to_filter_collections } from './schema-site-editor-default'

export interface BuildMatchProps {
  quadrant?: Array<Partial<schema_site_editor_default_collection_flags>>
  result?: Partial<schema_site_editor_default_collection_flags>
  refinedData?: Partial<RefinedDataOnProductContext>
}

export const BuildMatch = ({
  refinedData = {
    brandId: 1,
    categoryId: '1',
    listOfCollections: [],
    listOfProductFields: [],
    listOfVariations: [],
    productId: '1'
  },
  quadrant = [{
    isActive: true,
    items: [],
    priority: "1",
    typeContent: 'createContent',
    variant: 'variant-default',
    __editorItemTitle: 'Container Coleção 1'
  }],
  result = {
    isActive: true,
    items: [],
    priority: "1",
    typeContent: 'createContent',
    variant: 'variant-default',
    __editorItemTitle: 'Container Coleção 1',
    _screen_config_links: []
  }
}: BuildMatchProps) => {
  const mock_refinedData: RefinedDataOnProductContext = {
    brandId: refinedData.brandId,
    categoryId: refinedData.categoryId,
    productId: refinedData.productId,
    listOfVariations: refinedData.listOfVariations,
    listOfCollections: refinedData.listOfCollections,
    listOfProductFields: refinedData.listOfProductFields
  }

  const mock_quadrant: schema_site_editor_default_container_generic_quadrant = mock_default_quadrant_base_to_filter_collections(
    'Quadrante - Direita',
    quadrant.map(item => ({
      ...item
    } as schema_site_editor_default_collection_flags))
  )

  const mock_result: schema_site_editor_default_collection_flags = {
    ...result
  } as schema_site_editor_default_collection_flags

  return {
    mock_refinedData,
    mock_quadrant,
    mock_result
  }
}