import { type InternalModelCategory } from '../internal/models/category.ts'

export interface IUseCaseLoadAllCategories {
  loadAll: () => IUseCaseLoadAllCategories.Result
}

export namespace IUseCaseLoadAllCategories {
  export type Result = Promise<InternalModelCategory[]>
}