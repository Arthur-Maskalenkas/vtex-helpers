import { type InternalModelProduct } from '../internal/models/product.ts'



export interface IUseCaseLoadProduct {
		load: (params: IUseCaseLoadProduct.Params) => IUseCaseLoadProduct.Result
}

export namespace IUseCaseLoadProduct {
		export type Result = Promise<InternalModelProduct | null>

		export type Params = string
}