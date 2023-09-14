import { type ProtocolLoadAllCategoriesRepository } from '../../data/protocols/loadAllCategoriesRepository.ts'

export class RepositoryCategory implements ProtocolLoadAllCategoriesRepository {
  async loadAll (): ProtocolLoadAllCategoriesRepository.Result {
    const result = await fetch('/api/catalog_system/pub/category/tree/3')

    const data = await result.json()

    if (!data) return []

    return data
  }
}