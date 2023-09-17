export interface IUseCaseDeleteCache {
  delete: (params: IUseCaseDeleteCache.Params) => IUseCaseDeleteCache.Result
}

export namespace IUseCaseDeleteCache {
  export type Params = {
    id: string
  }

  export type Result = Promise<boolean>
}