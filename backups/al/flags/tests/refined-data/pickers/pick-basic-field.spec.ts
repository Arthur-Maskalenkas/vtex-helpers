import { get_mock, mock_product_context } from '../_mocks/default'
import { PickBasicField } from '../../../src/refined-data'

type SutTypes = {
  sut: PickBasicField
}

const makeSut = (): SutTypes => {
  const sut = new PickBasicField('brand')

  return {
    sut
  }
}

describe('GetBasicField', () => {
  it('Should return null if input is null', () => {
    const { sut } = makeSut()

    const result = sut.pick(null,'summary')

    expect(result).toEqual(null)
  })

  it('Should return null if value is not found', () => {
    const { sut } = makeSut()

    const result = sut.pick({ ...mock_product_context, product: { ...mock_product_context.product, brandId: null } },'summary')

    expect(result).toEqual(null)
  })

  it('Should return data if data is found', () => {
    const { sut } = makeSut()

    const result = sut.pick(mock_product_context, 'summary')

    expect(result).toEqual(get_mock().brand)
  })
})