import { type IUsecaseMapSearchParams } from '../../domain/useCases/mapSearchParams.ts'
import { type ProtocolMapSearchPageParams } from '../protocols/mapSearchPageParams.ts'



export class UsecaseMapSearchParams implements IUsecaseMapSearchParams {
		constructor(
				private readonly ProtocolMapSearchPageParams: ProtocolMapSearchPageParams
		) {
		}

		map(params: IUsecaseMapSearchParams.Params): IUsecaseMapSearchParams.Result {
				return this.ProtocolMapSearchPageParams.map(params)
		}
}