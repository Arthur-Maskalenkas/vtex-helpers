import { get_mock, mock_product_context } from '../_mocks/default'
import { PickCollectionField } from '../../../src/refined-data'

type SutTypes = {
  sut: PickCollectionField
}

const makeSut = (): SutTypes => {
  const sut = new PickCollectionField('collection')

  return {
    sut
  }
}

describe('GetBasicListField', () => {
  it('Should return null if input is null', () => {
    const { sut } = makeSut()

    const result = sut.pick(null,'summary')

    expect(result).toEqual(null)
  })

  it('Should return data if data is found', () => {
    const { sut } = makeSut()

    const result = sut.pick(mock_product_context, 'summary')

    expect(result).toEqual(get_mock().collection)
  })
})