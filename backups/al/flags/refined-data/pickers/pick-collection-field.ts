import { PPicker } from '../protocols'
import { FieldDataRefined, T_contexts_data, T_refined_data_keys } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export class PickCollectionField implements PPicker {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {
  }

  pick (input: product_context_root, context: T_contexts_data): FieldDataRefined[] | FieldDataRefined | null {
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

    return data
  }
}