import { UseCaseLoadAllCategories } from '../../../../../src/services/data/useCases/loadAllCategories.ts'
import {
  BuilderMapperExternalModelCategoryToInternalModelCategory,
  BuilderRepositoryLoadAllCategories
} from './builders.ts'

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
    it('should call repository', async () => {
      const repository = new BuilderRepositoryLoadAllCategories()
        .build()

      const { sut } = makeSut({ repository })

      await sut.loadAll()

      expect(repository.loadAll).toHaveBeenCalledTimes(1)
    })

    it('sHould call mapper', async () => {
      const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
        .build()

      const { sut } = makeSut({ mapperModelCategory })

      await sut.loadAll()

      expect(mapperModelCategory.map).toHaveBeenCalledTimes(1)
    })
    it('should call repository with correctly values', async () => {
      const repository = new BuilderRepositoryLoadAllCategories()
        .build()

      const { sut } = makeSut({ repository })

      await sut.loadAll()

      expect(repository.loadAll).toHaveBeenCalledWith()
    })

    it('should call mapper with categories return', async () => {
      const repository = new BuilderRepositoryLoadAllCategories()
        .withChildren()
        .build()

      const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
        .build()

      const { sut } = makeSut({ repository, mapperModelCategory })

      await sut.loadAll()

      expect(mapperModelCategory.map).toHaveBeenCalledTimes(1)

      expect(mapperModelCategory.map).toHaveBeenCalledWith({
        hasChildren: false,
        children: [],
        name: 'name.0',
        url: 'url.0',
        Title: 'title.0',
        id: 0,
        MetaTagDescription: 'metaTagDescription.0'
      })
    })

    it('should call mapper with categories returns', async () => {
      const repository = new BuilderRepositoryLoadAllCategories()
        .withChildrens()
        .build()

      const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
        .build()

      const children0 = {
        hasChildren: false,
        children: [],
        name: 'name.1',
        url: 'url.1',
        Title: 'title.1',
        id: 1,
        MetaTagDescription: 'metaTagDescription.1'
      }

      const children1 = {
        hasChildren: false,
        children: [],
        name: 'name.2',
        url: 'url.2',
        Title: 'title.2',
        id: 2,
        MetaTagDescription: 'metaTagDescription.2'
      }

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