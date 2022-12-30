import { GetRefinedData } from './protocols/get-refined-data'

import { product_context_root } from '../_interfaces/product-context/custom_context'
import { DataRefined } from '../_interfaces'
import { T_refined_data_keys } from '../_interfaces/_schema-types'

export class GetSpecificationField implements GetRefinedData {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {}

  get (input: product_context_root, context: 'summary' | 'pdp' = 'summary'): DataRefined {
    if (!input) {
      return null
    }

    const data = input?.product?.specificationGroups
      ?.filter(specification => specification.name !== 'allSpecifications')
      ?.map(group => group?.specifications
        ?.map(spec => ({
          name: spec?.name,
          value: spec?.values,
          refGroup: group?.name
        })))
      ?.flat()

    if (!data || data.length === 0) {
      return null
    }

    return data as any
  }
}