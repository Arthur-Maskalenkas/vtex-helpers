import { PPicker } from '../protocols'
import { FieldDataRefined, FieldDiscountDataRefined, T_contexts_data, T_refined_data_keys } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export class PickPriceField implements PPicker {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {
  }

  pick (input: product_context_root, context: T_contexts_data): FieldDataRefined[] | FieldDataRefined | FieldDiscountDataRefined | null {
    if (!input) {
      return null
    }

    const pricesAvaliables = input?.product?.priceRange

    const formatDiscount = (value: number | string): number => {
      const convert = Number(value)

      if (Number.isNaN(convert)) {
        return 0
      }

      const formatted = convert.toFixed(2)

      return parseFloat(formatted)
    }

    const sellingPrice = Number(pricesAvaliables?.sellingPrice.highPrice)
    const listPrice = Number(pricesAvaliables?.listPrice.highPrice)

    const data = {
      listPrice,
      sellingPrice,
      discountInValue: formatDiscount(listPrice - sellingPrice),
      discountInPercentage: formatDiscount(((listPrice - sellingPrice) / listPrice) * 100)
    } as FieldDiscountDataRefined

    if (!data.listPrice && !data.sellingPrice) {
      return null
    }

    return data
  }
}