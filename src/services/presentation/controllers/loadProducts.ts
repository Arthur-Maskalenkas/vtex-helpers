import { type ProtocolController } from '../protocols/controller.ts'
import { type IUseCaseLoadProducts } from '../../domain/useCases/loadProducts.ts'



export class ControllerLoadProducts implements ProtocolController {
		constructor(
				private readonly usecaseLoadProducts: IUseCaseLoadProducts
		) {
		}

		public async handle<R = IUseCaseLoadProducts.Result, P = string>(params: P): Promise<R> {
				try {
						const products = await this.usecaseLoadProducts.load(params as string)

						return products as R
				} catch (error) {
						console.error(error)
						return [] as R
				}
		}
}