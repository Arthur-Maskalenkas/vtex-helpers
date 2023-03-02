import { get_mock, mock_product_context } from '../_mocks/default'
import { PickCollectionField } from '../../../src/refined-data'
import { mock_product_context_2 } from '../_mocks/mock_product_context'

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

  it('Should return data if data is found 2', () => {
    const { sut } = makeSut()

    const result = sut.pick(mock_product_context_2, 'summary')


    expect(result).toEqual([
      {
        "value": "178",
        "name": "Outlet"
      },
      {
        "value": "325",
        "name": "Vitrine Subca - Ofertas para casa toda"
      },
      {
        "value": "326",
        "name": "Vitrine Busca - Móveis mais buscados"
      },
      {
        "value": "327",
        "name": "Vitrine PDP - O que todo mundo está de olho"
      },
      {
        "value": "328",
        "name": "Vitrine Pg de erro - Oiie! Já viu essas novidades? "
      },
      {
        "value": "335",
        "name": "Pronta-Entrega"
      },
      {
        "value": "354",
        "name": "Até R$400"
      }
    ])


  })
})