import { IUseCaseSaveCache } from "../../../domain/useCases/saveCache.ts";



export interface ProtocolLocalStorageSaveCache {
		save: (params: ProtocolLocalStorageSaveCache.Params) => ProtocolLocalStorageSaveCache.Result
}

export namespace ProtocolLocalStorageSaveCache {
		export type Params = IUseCaseSaveCache.Params

		export type Result = Promise<void>
}