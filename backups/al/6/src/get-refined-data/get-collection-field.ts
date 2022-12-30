import { GetRefinedData } from './protocols/get-refined-data'

import { product_context_root } from '../_interfaces/product-context/custom_context'
import { DataRefined } from '../_interfaces'
import { T_refined_data_keys } from '../_interfaces/_schema-types'

export class GetCollectionField implements GetRefinedData {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {}

  get (input: product_context_root, context: 'summary' | 'pdp' = 'summary'): DataRefined {
    if (!input) {
      return null
    }

    const data = input?.product?.clusterHighlights?.map((collection) => ({
      name: collection?.name,
      value: collection?.id
    }))

    if (!data || data.length === 0) {
      return null
    }

    return data as any
  }
}