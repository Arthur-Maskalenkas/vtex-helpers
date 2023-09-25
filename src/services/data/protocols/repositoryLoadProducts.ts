import { type ExternalModelProduct } from '../../domain/external/models/product.ts'



export interface ProtocolRepositoryLoadProducts {
		search: (params: ProtocolRepositoryLoadProducts.Params) => ProtocolRepositoryLoadProducts.Result
}

export namespace ProtocolRepositoryLoadProducts {
		export type Result = Promise<ExternalModelProduct[]>

		export type Params = string
}