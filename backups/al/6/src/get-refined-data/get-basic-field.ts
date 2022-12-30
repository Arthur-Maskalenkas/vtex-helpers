import { GetRefinedData } from './protocols/get-refined-data'
import { basicFieldPaths } from './helpers'

import { product_context_root } from '../_interfaces/product-context/custom_context'
import { DataRefined } from '../_interfaces'
import { T_refined_data_keys } from '../_interfaces/_schema-types'

export class GetBasicField implements GetRefinedData {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {}

  get (input: product_context_root, context: 'summary' | 'pdp' = 'summary'): DataRefined {
    if (!input) {
      return null
    }

    const data = basicFieldPaths(this.attribute, input)

    if (!data || Boolean(!data?.value)) {
      return null
    }

    return data as any
  }
}