import { mock_product_context_1 } from './_mocks/mock_product_context'

import {
  PickBasicField,
  PickCollectionField,
  PickPriceField,
  PickSpecificationField,
  PickVariationField,
  RefinedData,
  RefinedDataBuilder
} from '../../src/refined-data'
import { PickPromotionDiscountField } from '../../src/refined-data/pickers/pick-promotion-discount-field'

jest.mock('../../src/refined-data/refined-data')

type SutTypes = {
  sut: RefinedDataBuilder
}

const makeSut = (): SutTypes => {
  const sut = new RefinedDataBuilder()

  return {
    sut
  }
}

describe('GetRefinedDataComposite', () => {
  it('Should create a GetRefinedDataComposite with all values on build', () => {
    const { sut } = makeSut()

    sut
      .pickBrandField()
      .pickCategory()
      .pickProductField()
      .pickSellerField()
      .pickCollectionField()
      .pickSpecificationField()
      .pickVariationField()
      .pickPriceField()
      .pickPromotionDiscountField()
      .build()

    expect(RefinedData).toHaveBeenCalledWith([
      new PickBasicField('brand'),
      new PickBasicField('category'),
      new PickBasicField('product'),
      new PickBasicField('seller'),
      new PickCollectionField('collection'),
      new PickSpecificationField('specification'),
      new PickVariationField('variation'),
      new PickPriceField('price'),
      new PickPromotionDiscountField('promotionDiscount')
    ], 'summary')
  })
})