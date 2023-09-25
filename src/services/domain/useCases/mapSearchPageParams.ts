export interface IUsecaseMapSearchPageParams {
		map: (params: IUsecaseMapSearchPageParams.Params) => IUsecaseMapSearchPageParams.Result
}

export namespace IUsecaseMapSearchPageParams {
		export type Result = string | null

		export type Params = string
}