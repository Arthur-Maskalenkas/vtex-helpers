import { type InternalModelCategory } from '../../domain/internal/models/category.ts'
import { type ExternalModelCategory } from '../../domain/external/models/category.ts'



export interface ProtocolMapModelCategory {
		map: (externalCategory: ProtocolMapModelCategory.Params) => ProtocolMapModelCategory.Result
}

export namespace ProtocolMapModelCategory {

		export type ResultModel = InternalModelCategory
		export type ResultListModel = InternalModelCategory[]

		export type ParamModel = ExternalModelCategory
		export type ParamListModel = ExternalModelCategory[]

		export type Result = Promise<ResultListModel>
		export type Params = ParamListModel
}