import { type IUsecaseMapSearchPageParams } from '../../domain/useCases/mapSearchPageParams.ts'



export interface ProtocolMapSearchPageParams {
		map: (params: IUsecaseMapSearchPageParams.Params) => IUsecaseMapSearchPageParams.Result
}

export namespace ProtocolMapSearchPageParams {
		export type Params = string
		export type Result = string
}