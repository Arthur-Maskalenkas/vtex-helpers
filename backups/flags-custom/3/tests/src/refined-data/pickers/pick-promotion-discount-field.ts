import { PPicker } from '../protocols'
import { FieldDataRefined, FieldDiscountDataRefined, T_contexts_data, T_refined_data_keys } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export class PickPromotionDiscountField implements PPicker {
  constructor (
    readonly attribute: T_refined_data_keys
  ) {
  }

  pick (input: product_context_root, context: T_contexts_data): FieldDataRefined[] | FieldDataRefined | FieldDiscountDataRefined | null {
    const {
      Price = null,
      PriceWithoutDiscount = null,
      discountHighlights = null
    } = input?.product?.items?.[0]?.sellers?.[0]?.commertialOffer
    const promotionTypeDiscount = discountHighlights?.find(promo => promo.__typename === 'Discount')

    if (!promotionTypeDiscount || PriceWithoutDiscount === Price) {
      return null
    }

    return {
      value: promotionTypeDiscount.name
    }
  }
}