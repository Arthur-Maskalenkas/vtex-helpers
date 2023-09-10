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
  })
})