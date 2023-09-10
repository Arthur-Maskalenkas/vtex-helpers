import { RepositoryProduct } from '../../../../src/services/infra/repository/product.ts'
import { expect, it, describe, beforeEach } from 'vitest'
import {
  BuilderParamsProtocolMapperSearchParams
} from '../mocks/builders/repositories/product/ProtocolMapperSearchParams.ts'
import {
  BuilderParamsProtocolMapperExternalModelProductToProductModel
} from '../mocks/builders/repositories/product/ProtocolMapperExternalModelProductToProductModel.ts'
import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../../../src/services/data/protocols/MapperExternalModelProductToProductModel.ts'

const makeSut = () => {
  const sut = new RepositoryProduct()
  return {
    sut
  }
}

describe(RepositoryProduct.name, () => {
  // before each, create a new instance of sut
  let sut: RepositoryProduct

  beforeEach(() => {
    const newSut = makeSut()

    vi.resetAllMocks()

    sut = newSut.sut
  })

  describe(RepositoryProduct.prototype.map.name, () => {
    it('should return a object with string param received', () => {
      const params = new BuilderParamsProtocolMapperSearchParams()
        .appendParam()
        .build()

      const result = sut.map(params)
      const expected = {
        'attr-0': {
          'key-0': 'value-0'
        }
      }

      console.log('aqui', result)

      expect(result).toStrictEqual(expected)
    })

    it('should append key and value in same parent if exist', () => {
      const params = new BuilderParamsProtocolMapperSearchParams()
        .appendParam()
        .appendParam(0)
        .build()

      const { sut } = makeSut()

      const result = sut.map(params)

      const expected = {
        'attr-0': {
          'key-0': 'value-0',
          'key-1': 'value-1'
        }
      }
      expect(result).toStrictEqual(expected)
    })

    it('should not append in object if key or value is not provided ou are invalid', () => {
      const params = new BuilderParamsProtocolMapperSearchParams()
        .appendParam()
        .appendInvalidParam()
        .build()

      const { sut } = makeSut()

      const result = sut.map(params)

      const expected = {
        'attr-0': {
          'key-0': 'value-0'
        }
      }

      expect(result).toStrictEqual(expected)
    })
  })

  describe(RepositoryProduct.prototype.normalizeModelProduct.name, () => {
    describe('prices', () => {
      it('should remap product price correctly when have discount', () => {
        const currentPrice = 129.99
        const oldPrice = 189.99

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPrice)
          .withListPrice(oldPrice)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku

        expect(result.currentPrice).toBe(currentPrice)
        expect(result.oldPrice).toBe(oldPrice)
      })

      it('should return oldPrice with null value when not have a  difference with currentPrice', () => {
        const currentPrice = 189.99

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPrice)
          .withListPrice(currentPrice)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku

        expect(result.oldPrice).toBeNull()
        expect(result.currentPrice).toBe(currentPrice)
      })

      it('should return oldPrice with null value when Listprice is undefined', () => {
        const currentPrice = 189.99

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPrice)
          .withListPrice(undefined as any)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku

        expect(result.oldPrice).toBeNull()
        expect(result.currentPrice).toBe(currentPrice)
      })

      it('should follow same rules on list of sku', () => {
        const currentPriceOtherSku = 200.00
        const oldPriceOtherSku = 150.00

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPriceOtherSku, 1)
          .withListPrice(oldPriceOtherSku, 1)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.skus[0]

        expect(result.currentPrice).toBe(currentPriceOtherSku)
        expect(result.oldPrice).toBe(oldPriceOtherSku)
      })
    })

    describe('specifications', () => {
      it('should return a list of specifications', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendSpecification()
          .appendSpecification()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.specifications

        const expected = [
          { name: 'item-0', value: 'value-0', url: '/value-0?map=productClusterIds' },
          { name: 'item-1', value: 'value-1', url: '/value-1?map=productClusterIds' }
        ]

        expect(result).toStrictEqual(expected)
      })

      it('should return a empty list when not have specifications on list', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withEmptySpecifications()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.specifications

        const expected = []

        expect(result).toStrictEqual(expected)
      })

      it('should return a empty list when specification list is undefined', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withUndefinedSpecifications()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.specifications

        const expected = []

        expect(result).toStrictEqual(expected)
      })
    })

    describe('categories', () => {
      it('should return a list of categories', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendCategorie('/infantil/', '/10/')
          .appendCategorie('/infantil/brinquedos/', '/10/11/')
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.categories

        const expected = [
          {
            name: 'infantil',
            id: '10',
            url: '/infantil'
          },

          {
            name: 'infantil/brinquedos',
            id: '10/11',
            url: '/infantil/brinquedos'
          }
        ]

        expect(result).toStrictEqual(expected)
      })

      it('should return a list with all parents and patch', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendCategorie('/infantil/', '/10/')
          .appendCategorie('/infantil/brinquedos/', '/10/11/')

          .appendCategorie('/camisetas/', '/20/')
          .appendCategorie('/camisetas/verão/', '/20/21/')
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.categories

        const expected = [
          {
            name: 'infantil',
            id: '10',
            url: '/infantil'
          },

          {
            name: 'infantil/brinquedos',
            id: '10/11',
            url: '/infantil/brinquedos'
          },

          {
            name: 'camisetas',
            id: '20',
            url: '/camisetas'
          },

          {
            name: 'camisetas/verão',
            id: '20/21',
            url: '/camisetas/verão'
          }
        ]

        expect(result).toStrictEqual(expected)
      })
    })
  })
})