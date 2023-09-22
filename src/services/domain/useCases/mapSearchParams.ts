export interface IUsecaseMapSearchParams {
		map: (params: IUsecaseMapSearchParams.Params) => IUsecaseMapSearchParams.Result
}

export namespace IUsecaseMapSearchParams {
		export type Result = string | null

		export type Params = string
}