import { UseCaseLoadAllCategories } from '../../../../../src/services/data/useCases/loadAllCategories.ts'
import {
  BuilderMapperExternalModelCategoryToInternalModelCategory,
  BuilderRepositoryLoadAllCategories
} from './builders.ts'
import { describe } from 'vitest'

const makeSut = (
  {
    repository = new BuilderRepositoryLoadAllCategories().build(),
    mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory().build()
  }:
  {
    repository?: any
    mapperModelCategory?: any
  } = {}
) => {
  const sut = new UseCaseLoadAllCategories(
    repository,
    mapperModelCategory
  )

  return {
    sut
  }
}

describe(UseCaseLoadAllCategories.name, () => {
  describe(UseCaseLoadAllCategories.prototype.loadAll.name, () => {
    describe('repository', () => {
      it('should call repository', async () => {
        const repository = new BuilderRepositoryLoadAllCategories()
          .build()

        const { sut } = makeSut({ repository })

        await sut.loadAll()

        expect(repository.loadAll).toHaveBeenCalledTimes(1)
      })
    })

    describe('mapper', () => {
      it('should call mapper', async () => {
        const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
          .build()

        const { sut } = makeSut({ mapperModelCategory })

        await sut.loadAll()

        expect(mapperModelCategory.map).toHaveBeenCalledTimes(1)
      })

      it('should call mapper with categories returns', async () => {
        const repository = new BuilderRepositoryLoadAllCategories()
          .withChildrens()
          .build()

        const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
          .build()

        const { sut } = makeSut({ repository, mapperModelCategory })

        await sut.loadAll()

        expect(mapperModelCategory.map).toHaveBeenCalledTimes(2)

        // expected
      })

      it('should call mapper with depth categories returns', async () => {
        const repository = new BuilderRepositoryLoadAllCategories()
          .withDepthChildrens()
          .build()

        const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
          .build()

        const { sut } = makeSut({ repository, mapperModelCategory })

        await sut.loadAll()

        expect(mapperModelCategory.map).toHaveBeenCalledTimes(3)
      })
    })
  })
})