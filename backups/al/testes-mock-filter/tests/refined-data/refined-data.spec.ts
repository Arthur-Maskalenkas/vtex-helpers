import { RefinedData } from '../../src/refined-data/refined-data'
import { PickBasicField } from '../../src/refined-data/pickers/pick-basic-field'
import { get_mock, mock_product_context } from '../refined-data/_mocks/default'
import { PickCollectionField } from '../../src/refined-data/pickers/pick-collection-field'
import { PickVariationField } from '../../src/refined-data/pickers/pick-variation-field'
import { PickSpecificationField } from '../../src/refined-data/pickers/pick-specification-field'
import { PickPriceField } from '../../src/refined-data/pickers/pick-price-field'

type SutTypes = {
  sut: RefinedData
}

const makeSut = (): SutTypes => {
  const pickBrandField = new PickBasicField('brand')
  const pickCategoryField = new PickBasicField('category')
  const pickProductField = new PickBasicField('product')
  const pickSellerField = new PickBasicField('seller')
  const pickSpecificationField = new PickSpecificationField('specification')
  const pickVariationField = new PickVariationField('variation')
  const pickCollectionField = new PickCollectionField('collection')
  const pickPriceField = new PickPriceField('price')

  const sut = new RefinedData([
    pickBrandField,
    pickCategoryField,
    pickProductField,
    pickSellerField,
    pickSpecificationField,
    pickVariationField,
    pickCollectionField,
    pickPriceField
  ],'summary')

  return {
    sut
  }
}

describe('GetRefinedDataComposite', () => {
  it('Should return all data if any data is found', () => {
    const { sut } = makeSut()

    const result_mock = {
      brand: get_mock().brand,
      category: get_mock().category,
      product: get_mock().product,
      seller: get_mock().seller,
      specification: get_mock().specification,
      variation: get_mock().variation,
      collection: get_mock().collection,
      price: get_mock().price
    }

    const result = sut.get(mock_product_context)

    expect(result).toStrictEqual(result_mock)
  })
})