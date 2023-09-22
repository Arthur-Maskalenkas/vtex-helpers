import { type IUsecaseMapSearchParams } from '../../domain/useCases/mapSearchParams.ts'
import { type ProtocolMapSearchparams } from '../protocols/mapSearchParams.ts'



export class UsecaseMapSearchParams implements IUsecaseMapSearchParams {
		constructor(
					private readonly protocolMapSearchParams: ProtocolMapSearchparams
		) {
		}

		map(params: IUsecaseMapSearchParams.Params): IUsecaseMapSearchParams.Result {
				return this.protocolMapSearchParams.map(params)
		}
}