import { type ExternalModelCategory } from '../../domain/external/models/category.ts'

export interface ProtocolRepositoryLoadAllCategories {
  loadAll: () => ProtocolRepositoryLoadAllCategories.Result
}

export namespace ProtocolRepositoryLoadAllCategories {
  export type Result = Promise<ExternalModelCategory[]>
}