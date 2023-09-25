import { type ProtocolController } from '../protocols/controller.ts'
import { type IUsecaseMapSearchPageParams } from '../../domain/useCases/mapSearchPageParams.ts'



export class ControllerSearchPageParams implements ProtocolController {
		constructor(
				private readonly readonlyIUsecaseMapSearchPageParams: IUsecaseMapSearchPageParams
		) {
		}

		public async handle<R = IUsecaseMapSearchPageParams.Result, P = string>(params: P): Promise<R> {
				try {
						return this.readonlyIUsecaseMapSearchPageParams.map(params as string) as R
				} catch (error) {
						console.error(error)
						return null as R
				}
		}
}