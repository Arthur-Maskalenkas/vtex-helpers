import { DataRefined } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'
import { T_refined_data_keys } from '../../_interfaces/_schema-types'

export interface GetRefinedData {
  attribute?: T_refined_data_keys
  get: (input: product_context_root) => DataRefined | null
}

// export interface FieldValidation<T extends T_refined_data_keys> {
//   field: string
//   validate: (data: any) => DataRefined[T]
// }

// class Teste implements FieldValidation<'brand'> {
//   clear (data: any): DataRefined['brand'] {
//     return ['das']
//   }
// }