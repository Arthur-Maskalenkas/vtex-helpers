import { type InternalModelProduct } from '../internal/models/product.ts'



export interface IUseCaseLoadProducts {
		load: (params: IUseCaseLoadProducts.Params) => IUseCaseLoadProducts.Result
}

export namespace IUseCaseLoadProducts {
		export type Result = Promise<InternalModelProduct[] | null>

		export type Params = string
}