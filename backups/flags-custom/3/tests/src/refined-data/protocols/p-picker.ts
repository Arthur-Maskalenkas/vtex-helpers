import { FieldDataRefined, FieldDiscountDataRefined, T_contexts_data, T_refined_data_keys } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export interface PPicker {
  attribute: T_refined_data_keys
  pick: (input: product_context_root, context: T_contexts_data) => FieldDataRefined[] | FieldDataRefined | FieldDiscountDataRefined | null
}