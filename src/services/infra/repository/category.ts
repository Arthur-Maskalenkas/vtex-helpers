import { type ProtocolRepositoryLoadAllCategories } from '../../data/protocols/repositoryLoadAllCategories.ts'
import {
  type ProtocolMapModelCategory
} from '../../data/protocols/mapModelCategory.ts'

export class RepositoryCategory implements
    ProtocolRepositoryLoadAllCategories,
    ProtocolMapModelCategory {
  map (externalCategory: ProtocolMapModelCategory.Params): ProtocolMapModelCategory.Result {
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