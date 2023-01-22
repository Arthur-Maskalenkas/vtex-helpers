import { PickPromotionDiscountField } from '../../../src/refined-data/pickers/pick-promotion-discount-field'
import { mock_product_context } from '../_mocks/default'
import { product_context_root } from '../../../src/_interfaces/product-context/custom_context'

type SutTypes = {
  sut: PickPromotionDiscountField
}

const makeSut = (): SutTypes => {
  const sut = new PickPromotionDiscountField('promotionDiscount')

  return {
    sut
  }
}

const makeMockProductContext = (typename: string, priceWithoutDiscount: number, price: number): product_context_root => {
  return {
    product: {
      items: [{
        sellers: [{
          commertialOffer: {
            discountHighlights: [{
              name: 'any_promotion_name',
              __typename: typename
            }],
            PriceWithoutDiscount: priceWithoutDiscount,
            Price: price
          }
        }]
      }]
    }
  } as product_context_root
}

describe('Pick Promotion Discount Field', () => {
  it('Should return null if typename is not \'discount\'', () => {
    const { sut } = makeSut()

    const mock_product_context = makeMockProductContext('invalid_type_name', 100, 90)

    const result = sut.pick(mock_product_context,'summary')

    expect(result).toEqual(null)
  })

  it('Should return null if price and priceWithoutDiscount are equal', () => {
    const { sut } = makeSut()

    const mock_product_context = makeMockProductContext('Discount', 100, 100)

    const result = sut.pick(mock_product_context,'summary')

    expect(result).toEqual(null)
  })

  it('Should return data if typename is \'discount\' and price and priceWithoutDiscount are not equal', () => {
    const { sut } = makeSut()

    const mock_product_context = makeMockProductContext('Discount', 100, 90)

    const result = sut.pick(mock_product_context,'summary')

    expect(result).toEqual({ value: 'any_promotion_name' })
  })
})