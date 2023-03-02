import { get_mock, mock_product_context } from '../_mocks/default'
import { PickPriceField } from '../../../src/refined-data'

type SutTypes = {
  sut: PickPriceField
}

const makeSut = (): SutTypes => {
  const sut = new PickPriceField('price')

  return {
    sut
  }
}

describe('GetPriceField', () => {
  it('Should return null if input is null', () => {
    const { sut } = makeSut()

    const result = sut.pick(null,'summary')

    expect(result).toEqual(null)
  })

  it('Should return data if data is found', () => {
    const { sut } = makeSut()

    const result = sut.pick(mock_product_context, 'summary')

    expect(result).toEqual(get_mock().price)
  })
})