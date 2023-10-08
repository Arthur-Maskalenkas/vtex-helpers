import { IUseCaseSaveCache } from "../../domain/useCases/saveCache.ts";



export interface ProtocolRepositorySaveCache {
		save: (params: ProtocolRepositorySaveCache.Params) => ProtocolRepositorySaveCache.Result
}

export namespace ProtocolRepositorySaveCache {
		export type Params = IUseCaseSaveCache.Params

		export type Result = IUseCaseSaveCache.Result
}