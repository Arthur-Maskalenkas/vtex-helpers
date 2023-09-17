import { type IUsecaseMapSearchParams } from '../../domain/useCases/mapSearchParams.ts'

export interface ProtocolMapSearchparams {
  map: (params: IUsecaseMapSearchParams.Params) => IUsecaseMapSearchParams.Result
}