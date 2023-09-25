import { type InternalModelProduct } from '../internal/models/product.ts'



export interface IUseCaseLoadProducts {
		load: (params: IUseCaseLoadProducts.Params) => IUseCaseLoadProducts.Result
}

export namespace IUseCaseLoadProducts {
		export type Result = Promise<InternalModelProduct[]>

		export type Params = string
}