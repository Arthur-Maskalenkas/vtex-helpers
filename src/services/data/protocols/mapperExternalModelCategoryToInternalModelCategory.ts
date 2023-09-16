import { type InternalModelCategory } from '../../domain/internal/models/category.ts'
import { type ExternalModelCategory } from '../../domain/external/models/category.ts'

export interface ProtocolMapperExternalModelCategoryToInternalModelCategory {
  map: (externalCategory: ProtocolMapperExternalModelCategoryToInternalModelCategory.Params) => ProtocolMapperExternalModelCategoryToInternalModelCategory.Result
}

export namespace ProtocolMapperExternalModelCategoryToInternalModelCategory {
  export type Result = InternalModelCategory
  export type Params = ExternalModelCategory
}