import { type ExternalModelCategory } from '../../domain/external/models/category.ts'

export interface ProtocolLoadAllCategoriesRepository {
  loadAll: () => ProtocolLoadAllCategoriesRepository.Result
}

export namespace ProtocolLoadAllCategoriesRepository {
  export type Result = Promise<ExternalModelCategory[]>
}