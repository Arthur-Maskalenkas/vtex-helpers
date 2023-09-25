import { type IUsecaseMapSearchPageParams } from '../../domain/useCases/mapSearchPageParams.ts'



export interface ProtocolMapSearchProductParams {
		map: (params: IUsecaseMapSearchPageParams.Params) => IUsecaseMapSearchPageParams.Result
}

export namespace ProtocolMapSearchProductParams {
		export type Params = string
		export type Result = string
}