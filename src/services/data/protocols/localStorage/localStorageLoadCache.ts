import { IUseCaseLoadCache } from "../../../domain/useCases/loadCache.ts";



export interface ProtocolLocalStorageLoadCache {
		load: (params: ProtocolLocalStorageLoadCache.Params) => ProtocolLocalStorageLoadCache.Result
}

export namespace ProtocolLocalStorageLoadCache {
		export type Params = IUseCaseLoadCache.Params

		export type Result = IUseCaseLoadCache.Result
}