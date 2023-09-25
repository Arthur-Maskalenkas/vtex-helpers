import { type IUsecaseMapSearchPageParams } from '../../domain/useCases/mapSearchPageParams.ts'
import { type ProtocolMapSearchPageParams } from '../protocols/mapSearchPageParams.ts'



export class UsecaseMapSearchParams implements IUsecaseMapSearchPageParams {
		constructor(
				private readonly ProtocolMapSearchPageParams: ProtocolMapSearchPageParams
		) {
		}

		map(params: IUsecaseMapSearchPageParams.Params): IUsecaseMapSearchPageParams.Result {
				return this.ProtocolMapSearchPageParams.map(params)
		}
}