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
    it('should call repository correctly', async () => {
      const repository = new BuilderRepositoryLoadAllCategories()
        .build()

      const { sut } = makeSut({ repository })

      await sut.loadAll()

      expect(repository.loadAll).toHaveBeenCalledTimes(1)
    })

    it('should call mapperModelCategory correctly', async () => {
      const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
        .build()

      const { sut } = makeSut({ mapperModelCategory })

      await sut.loadAll()
      // @ts-expect-error
      const lastCall = mapperModelCategory.map.mock.lastCall[0][0]

      expect(mapperModelCategory.map).toHaveBeenCalledTimes(1)
      expect(lastCall).toMatchInlineSnapshot(`
        {
          "MetaTagDescription": "metaTagDescription.0",
          "Title": "title.0",
          "children": [],
          "hasChildren": false,
          "id": 0,
          "name": "name.0",
          "url": "url.0",
        }
      `)
    })

    it('should not call mapperModelCategory if repository returns null', async () => {
      const repository = new BuilderRepositoryLoadAllCategories()
        .withNull()
        .build()

      const mapperModelCategory = new BuilderMapperExternalModelCategoryToInternalModelCategory()
        .build()

      const { sut } = makeSut({ repository, mapperModelCategory })

      await sut.loadAll()

      expect(mapperModelCategory.map).toHaveBeenCalledTimes(0)
    })
  })
})