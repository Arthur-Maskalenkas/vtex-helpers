import { type IUseCaseLoadProduct } from '../../domain/useCases/loadProduct.ts'
import { type ProtocolMapModelProduct } from '../protocols/mapModelProduct.ts'
import { IUseCaseLoadProducts } from "../../domain/useCases/loadProducts.ts";
import { ProtocolRepositoryLoadProducts } from "../protocols/repositoryLoadProducts.ts";
import { ProtocolMapSearchProductParams } from "../protocols/mapSearchProductParams.ts";



export class UsecaseLoadProducts implements IUseCaseLoadProducts {
		constructor(
				private readonly repositoryProduct: ProtocolRepositoryLoadProducts,
				private readonly mapModelProduct: ProtocolMapModelProduct,
				private readonly mapParams: ProtocolMapSearchProductParams
		) {
		}

		async load(params: IUseCaseLoadProduct.Params): IUseCaseLoadProducts.Result {
				this.mapParams.map(params)
				return params as any
		}
}