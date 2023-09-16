import { type InternalModelCategory } from '../../domain/internal/models/category.ts'
import { type ExternalModelCategory } from '../../domain/external/models/category.ts'

export interface ProtocolMapModelCategory {
  map: (externalCategory: ProtocolMapModelCategory.Params) => ProtocolMapModelCategory.Result
}

export namespace ProtocolMapModelCategory {
  export type Result = InternalModelCategory
  export type Params = ExternalModelCategory
}