import { VtexProductModel } from '../models'

export interface VtexUseCaseGetListProductsByID {
  handle: (params: VtexUseCaseGetListProductsByID.Params) => VtexUseCaseGetListProductsByID.Response
}

export namespace VtexUseCaseGetListProductsByID {
  export type Response = Promise<VtexProductModel[]>

  export type Params = string[]

}