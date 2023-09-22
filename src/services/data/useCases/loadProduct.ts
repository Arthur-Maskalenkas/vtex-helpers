import { type IUseCaseLoadProduct } from '../../domain/useCases/loadProduct.ts'
import { type ProtocolRepositoryLoadProduct } from '../protocols/repositoryLoadProduct.ts'
import { type ProtocolMapModelProduct } from '../protocols/mapModelProduct.ts'



export class UsecaseLoadProduct implements IUseCaseLoadProduct {
		constructor(
					private readonly repositoryProduct: ProtocolRepositoryLoadProduct,
					private readonly mapModelProduct: ProtocolMapModelProduct
		) {
		}

		async load(params: IUseCaseLoadProduct.Params): IUseCaseLoadProduct.Result {
				const product = await this.repositoryProduct.load(params)

				if (!product) return null

				const internalProduct = this.mapModelProduct.map(product)

				return internalProduct
		}
}