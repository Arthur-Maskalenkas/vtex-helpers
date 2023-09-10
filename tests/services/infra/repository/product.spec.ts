import { RepositoryProduct } from '../../../../src/services/infra/repository/product.ts'
import { expect, it, describe } from 'vitest'
import {
  BuilderParamsProtocolMapperSearchParams
} from '../mocks/builders/repositories/product/ProtocolMapperSearchParams.ts'

const makeSut = () => {
  const sut = new RepositoryProduct()
  return {
    sut
  }
}

describe(RepositoryProduct.name, () => {
  describe(RepositoryProduct.prototype.map.name, () => {
    it('should return a object with string param received', () => {
      const { sut } = makeSut()
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
})