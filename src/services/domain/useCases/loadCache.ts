export interface IUseCaseLoadCache {
  load: (params: IUseCaseLoadCache.Params) => IUseCaseLoadCache.Result
}

export namespace IUseCaseLoadCache {
  export type Params = {
    id: string
  }

  export type Result = Promise<any>
}