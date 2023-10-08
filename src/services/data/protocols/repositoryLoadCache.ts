import { IUseCaseLoadCache } from "../../domain/useCases/loadCache.ts";



export interface ProtocolRepositoryLoadCache {
		load: (params: ProtocolRepositoryLoadCache.Params) => ProtocolRepositoryLoadCache.Result
}

export namespace ProtocolRepositoryLoadCache {
		export type Params = IUseCaseLoadCache.Params

		export type Result = IUseCaseLoadCache.Result
}