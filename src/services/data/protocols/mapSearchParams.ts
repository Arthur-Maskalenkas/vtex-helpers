import { type IUsecaseMapSearchParams } from '../../domain/useCases/mapSearchParams.ts'



export interface ProtocolMapSearchparams {
		map: (params: IUsecaseMapSearchParams.Params) => IUsecaseMapSearchParams.Result
}

export namespace ProtocolMapSearchparams {
		export type Params = string
		export type Result = string
}