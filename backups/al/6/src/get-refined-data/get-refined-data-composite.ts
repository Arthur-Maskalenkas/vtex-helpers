import { GetRefinedData } from './protocols/get-refined-data'

import { product_context_root } from '../_interfaces/product-context/custom_context'
import { DataRefined } from '../_interfaces'

export class GetRefinedDataComposite implements GetRefinedData {
  constructor (
    private readonly dataRefined: GetRefinedData[]
  ) { }

  get (input: product_context_root): DataRefined {
    const data = this?.dataRefined?.reduce((acc, field) => {
      const value = field?.get(input)

      return { ...acc, [field?.attribute]: value }
    },{})

    return data as DataRefined
  }
}