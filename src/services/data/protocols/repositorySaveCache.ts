export interface ProtocolRepositorySaveCache {
		save: (params: ProtocolRepositorySaveCache.Params) => ProtocolRepositorySaveCache.Result
}

export namespace ProtocolRepositorySaveCache {
		export type Params = {
				id: string
				value: any
		}

		export type Result = Promise<void>
}