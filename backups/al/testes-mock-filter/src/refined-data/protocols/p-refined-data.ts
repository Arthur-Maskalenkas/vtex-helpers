import { DataRefined } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export interface PRefinedData {
  get: (input: product_context_root) => DataRefined | null
}