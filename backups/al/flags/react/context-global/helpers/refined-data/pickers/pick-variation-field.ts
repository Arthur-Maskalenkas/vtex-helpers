import { PPicker } from '../protocols'
import { FieldDataRefined,  T_refined_data_keys } from '../../../_interfaces'
import { product_context_root } from '../../../_interfaces/product-context/custom_context'

export class PickVariationField implements PPicker {
  constructor(
    readonly attribute: T_refined_data_keys
  ) {
  }

  pick(input: product_context_root): FieldDataRefined[] | FieldDataRefined | null {
    if (!input) {
      return null
    }

    const data = input?.selectedItem?.variations
      ?.map(variation => ({
        name: variation?.name,
        value: variation?.values
      }))

    if (!data || data.length === 0) {
      return null
    }

    return data
  }
}
