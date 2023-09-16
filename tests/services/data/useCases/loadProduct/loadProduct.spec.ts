import {
  BuilderMapperExternalModelProductToInternalModelProduct,
  BuilderRepositoryLoadProduct
} from './builders.ts'
import { describe } from 'vitest'
import { UsecaseLoadProduct } from '../../../../../src/services/data/useCases/loadProduct.ts'
import { BuilderRepositoryLoadAllCategories } from '../loadAllCategories/builders.ts'

const makeSut = (
  {
    repository = new BuilderRepositoryLoadProduct().build(),
    mapperModelProduct = new BuilderMapperExternalModelProductToInternalModelProduct().build()
  }:
  {
    repository?: any
    mapperModelProduct?: any
  } = {}
) => {
  const sut = new UsecaseLoadProduct(
    repository,
    mapperModelProduct
  )

  return {
    sut
  }
}

describe(UsecaseLoadProduct.name, () => {
  describe(UsecaseLoadProduct.prototype.load.name, () => {
    describe('repository', () => {
      it('should call repository', async () => {
        const repository = new BuilderRepositoryLoadProduct()
          .build()

        const { sut } = makeSut({ repository })

        await sut.load('0')

        expect(repository.load).toHaveBeenCalledTimes(1)
        expect(repository.load).toHaveBeenCalledWith('0')
      })

      it('should return null if repository returns null', async () => {
        const repository = new BuilderRepositoryLoadProduct()
          .withNull()
          .build()

        const { sut } = makeSut({ repository })

        const response = await sut.load('0')

        expect(response).toBeNull()
      })
    })

    describe('mapper', () => {
      it('should call mapper', async () => {
        const repository = new BuilderRepositoryLoadProduct()
          .build()
        const mapperModelProduct = new BuilderMapperExternalModelProductToInternalModelProduct()
          .build()

        const { sut } = makeSut({ mapperModelProduct })

        await sut.load('0')

        expect(mapperModelProduct.map).toHaveBeenCalledTimes(1)
        expect(mapperModelProduct.map).toHaveBeenCalledWith({ productId: 0 })
      })
    })

    it('should return mapped product', async () => {
      const repository = new BuilderRepositoryLoadProduct()
        .build()
      const mapperModelProduct = new BuilderMapperExternalModelProductToInternalModelProduct()
        .build()

      const { sut } = makeSut({ mapperModelProduct })

      const product = await sut.load('0')

      expect(product).toStrictEqual({
        api: [],
        currentProduct: {
          id: 0
        }
      })
    })
  })
})