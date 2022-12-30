import { GetRefinedDataComposite } from '../../src/get-refined-data/get-refined-data-composite'
import { GetBasicField } from '../../src/get-refined-data/get-basic-field'
import { get_mock, mock_product_context } from '../refined-data/_mocks/default'
import { GetCollectionField } from '../../src/get-refined-data/get-collection-field'
import { GetVariationField } from '../../src/get-refined-data/get-variation-field'
import { GetSpecificationField } from '../../src/get-refined-data/get-specification-field'

type SutTypes = {
  sut: GetRefinedDataComposite
}

const makeSut = (): SutTypes => {
  const getBrandField = new GetBasicField('brand')
  const getCategoryField = new GetBasicField('category')
  const getProductField = new GetBasicField('product')
  const getSellerField = new GetBasicField('seller')
  const getSpecificationField = new GetSpecificationField('specification')
  const getVariationField = new GetVariationField('variation')
  const getCollectionField = new GetCollectionField('collection')

  const sut = new GetRefinedDataComposite([
    getBrandField,
    getCategoryField,
    getProductField,
    getSellerField,
    getSpecificationField,
    getVariationField,
    getCollectionField,
    pickPriceData
  ])

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
      collection: get_mock().collection
    }

    const result = sut.get(mock_product_context)

    expect(result).toStrictEqual(result_mock)
  })
})