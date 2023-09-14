import { type ExternalModelCategory } from '../../domain/models/external/category.ts'

export interface ProtocolLoadAllCategoriesRepository {
  loadAll: () => ProtocolLoadAllCategoriesRepository.Result
}

export namespace ProtocolLoadAllCategoriesRepository {
  export type Result = Promise<ExternalModelCategory[]>
}