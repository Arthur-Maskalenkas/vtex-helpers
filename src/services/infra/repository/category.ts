import { type ProtocolRepositoryLoadAllCategories } from '../../data/protocols/repositoryLoadAllCategories.ts'
import {
  type ProtocolMapperExternalModelCategoryToInternalModelCategory
} from '../../data/protocols/mapperExternalModelCategoryToInternalModelCategory.ts'

export class RepositoryCategory implements
    ProtocolRepositoryLoadAllCategories,
    ProtocolMapperExternalModelCategoryToInternalModelCategory {
  map (externalCategory: ProtocolMapperExternalModelCategoryToInternalModelCategory.Params): ProtocolMapperExternalModelCategoryToInternalModelCategory.Result {
    const { id, name, children = [], url } = externalCategory

    return ({ name, id, children, url })
  }

  async loadAll (): ProtocolRepositoryLoadAllCategories.Result {
    const result = await fetch('/api/catalog_system/pub/category/tree/3')

    const data = await result.json()

    if (!data) return []

    return data
  }
}