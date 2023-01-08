import {
  PickBasicField,
  PickCollectionField,
  PickPriceField,
  PickSpecificationField,
  PickVariationField,
  RefinedData,
  RefinedDataBuilder
} from '../../src/refined-data'

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
      .build()

    expect(RefinedData).toHaveBeenCalledWith([
      new PickBasicField('brand'),
      new PickBasicField('category'),
      new PickBasicField('product'),
      new PickBasicField('seller'),
      new PickCollectionField('collection'),
      new PickSpecificationField('specification'),
      new PickVariationField('variation'),
      new PickPriceField('price')
    ],'summary')
  })
})