import { get_mock, mock_product_context } from '../_mocks/default'
import { PickSpecificationField } from '../../../src/refined-data'

type SutTypes = {
  sut: PickSpecificationField
}

const makeSut = (): SutTypes => {
  const sut = new PickSpecificationField('specification')

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

    expect(result).toEqual(get_mock().specification)
  })
})