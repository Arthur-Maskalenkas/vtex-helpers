import { type IUsecaseMapSearchParams } from '../../domain/useCases/mapSearchParams.ts'



export interface ProtocolMapSearchPageParams {
		map: (params: IUsecaseMapSearchParams.Params) => IUsecaseMapSearchParams.Result
}

export namespace ProtocolMapSearchPageParams {
		export type Params = string
		export type Result = string
}