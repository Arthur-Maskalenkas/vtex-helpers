import { BuilderBase } from '../../builderBase.ts'
import {
  type ProtocolRepositoryLoadAllCategories
} from '../../../../../src/services/data/protocols/repositoryLoadAllCategories.ts'
import { faker } from '@faker-js/faker'
import { type ExternalModelCategory } from '../../../../../src/services/domain/external/models/category.ts'
import {
  type ProtocolMapModelCategory
} from '../../../../../src/services/data/protocols/mapModelCategory.ts'
import { type InternalModelCategory } from '../../../../../src/services/domain/internal/models/category.ts'

const makeExternalModelCategory = (index = 0): ExternalModelCategory => ({
  hasChildren: false,
  children: [],
  name: `name.${index}`,
  url: `url.${index}`,
  Title: `title.${index}`,
  id: index,
  MetaTagDescription: `metaTagDescription.${index}`
})

const makeInternalModelCategory = (index = 0): InternalModelCategory => ({
  url: `url.${index}`,
  name: `name.${index}`,
  id: index,
  children: []
})

export class BuilderRepositoryLoadAllCategories
  extends BuilderBase<ProtocolRepositoryLoadAllCategories, ProtocolRepositoryLoadAllCategories.Result> {
  constructor () {
    super(
      {
        loadAll: async () => Promise.resolve([makeExternalModelCategory(0)])
      },
      'loadAll'
    )
  }

  withChildren (): BuilderRepositoryLoadAllCategories {
    this.fnSpy.mockResolvedValue([makeExternalModelCategory(0)])

    return this
  }

  withDepthChildrens (): BuilderRepositoryLoadAllCategories {
    const category = {
      ...makeExternalModelCategory(0),
      hasChildren: true,
      children: [
        {
          ...makeExternalModelCategory(1),
          hasChildren: true,
          children: [
            makeExternalModelCategory(2)
          ]
        }
      ]
    }

    this.fnSpy.mockResolvedValue([category])

    return this
  }

  withChildrens (): BuilderRepositoryLoadAllCategories {
    const children0 = makeExternalModelCategory(0)
    const children1 = makeExternalModelCategory(1)

    const category = [
      children0,
      children1
    ]

    this.fnSpy.mockResolvedValue(category)

    return this
  }
}

export class BuilderMapperExternalModelCategoryToInternalModelCategory
  extends BuilderBase<ProtocolMapModelCategory, ProtocolMapModelCategory.Result> {
  constructor () {
    super(
      { map: () => makeInternalModelCategory(0) },
      'map'
    )
  }
}