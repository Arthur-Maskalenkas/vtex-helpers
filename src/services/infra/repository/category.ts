import { type ProtocolRepositoryLoadAllCategories } from '../../data/protocols/repositoryLoadAllCategories.ts'
import {
  type ProtocolMapModelCategory
} from '../../data/protocols/mapModelCategory.ts'

export class RepositoryCategory implements
    ProtocolRepositoryLoadAllCategories,
    ProtocolMapModelCategory {
  map (externalCategory: ProtocolM  ModelCategory.Params): ProtocolMapModelCategory.Result {
    const { id, name, children = [    rl } = externalCategory

    return ({ name, id, children,     })
  }

  async loadAll (): Protoco  eposi  ryLoadAllCategories.Result {
    const result = await fetch('/a    atalog_system/pub/category/tree/3')

    const data = await result.json    
    if (!data) return []

    re     data
  }
}      