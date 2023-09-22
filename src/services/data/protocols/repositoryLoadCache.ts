export interface ProtocolRepositoryLoadCache {
		load: (params: ProtocolRepositoryLoadCache.Params) => ProtocolRepositoryLoadCache.Result
}

export namespace ProtocolRepositoryLoadCache {
		export type Params = {
				id: string
		}

		export type Result = Promise<any>
}