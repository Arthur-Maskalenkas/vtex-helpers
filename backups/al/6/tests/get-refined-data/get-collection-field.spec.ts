import { GetBasicField } from '../../src/get-refined-data/get-basic-field'
import { get_mock, mock_product_context } from '../refined-data/_mocks/default'
import { GetVariationField } from '../../src/get-refined-data/get-variation-field'
import { GetCollectionField } from '../../src/get-refined-data/get-collection-field'

type SutTypes = {
  sut: GetVariationField
}

const makeSut = (): SutTypes => {
  const sut = new GetCollectionField('collection')

  return {
    sut
  }
}

describe('GetBasicListField', () => {
  it('Should return null if name and value is not found', () => {
    const { sut } = makeSut()

    const result = sut.get(null)

    expect(result).toEqual(null)
  })

  it('Should return data refined if data is found', () => {
    const { sut } = makeSut()

    const result = sut.get(mock_product_context, 'summary')

    expect(result).toEqual(get_mock().collection)
  })
})