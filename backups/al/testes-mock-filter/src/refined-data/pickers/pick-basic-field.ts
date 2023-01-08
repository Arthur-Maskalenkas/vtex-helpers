import { PPicker } from '../protocols'
import { FieldDataRefined, T_contexts_data, T_refined_data_keys } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'
import { basicFieldPaths } from '../helpers'

export class PickBasicField implements PPicker {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {
  }

  pick (input: product_context_root, context: T_contexts_data): FieldDataRefined[] | FieldDataRefined | null {
    if (!input) {
      return null
    }

    const data = basicFieldPaths(this.attribute, input)

    if (!data || Boolean(!data?.value)) {
      return null
    }

    return data
  }
}