import { T_refined_data_keys } from '../../_interfaces/_schema-types'
import { DataRefined } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export interface Validation {
  validate: (fieldName: T_refined_data_keys, input: product_context_root) => DataRefined | null
}