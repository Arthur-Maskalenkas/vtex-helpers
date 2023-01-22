import { PPicker } from '../protocols'
import { FieldDataRefined, T_contexts_data, T_refined_data_keys } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export class PickSpecificationField implements PPicker {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {
  }

  pick (input: product_context_root, context: T_contexts_data): FieldDataRefined[] | FieldDataRefined | null {
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

    return data
  }
}