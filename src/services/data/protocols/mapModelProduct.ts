import { type InternalModelProduct } from '../../domain/internal/models/product.ts'
import { type ExternalModelProduct } from '../../domain/external/models/product.ts'



export interface ProtocolMapModelProduct {
		map: (params: ProtocolMapModelProduct.Params) => ProtocolMapModelProduct.Result
}

export namespace ProtocolMapModelProduct {
		export type ResultModel = InternalModelProduct
		export type ResultListModel = InternalModelProduct[]

		export type Result = ResultModel | ResultListModel

		export type ParamModel = ExternalModelProduct
		export type ParamListModel = ExternalModelProduct[]

		export type Params = ParamModel | ParamListModel
}