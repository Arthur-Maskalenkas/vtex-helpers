import { type ProtocolRepositoryLoadAllCategories } from '../../data/protocols/repositoryLoadAllCategories.ts'

export class RepositoryCategory implements ProtocolRepositoryLoadAllCategories {
  async loadAll (): ProtocolRepositoryLoadAllCategories.Result {
    const result = await fetch('/api/catalog_system/pub/category/tree/3')

    const data = await result.json()

    if (!data) return []

    return data
  }
}