export interface IUseCaseSaveCache {
		save: (params: IUseCaseSaveCache.Params) => IUseCaseSaveCache.Result
}

export namespace IUseCaseSaveCache {
		export type Params = {
				id: string
				value: any
		}

		export type Result = Promise<boolean>
}