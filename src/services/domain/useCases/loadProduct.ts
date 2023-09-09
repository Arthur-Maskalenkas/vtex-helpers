import { type ModelProduct } from '../models/product.ts'

export interface IUseCaseLoadProduct {
  load: (params: IUseCaseLoadProduct.Params) => IUseCaseLoadProduct.Result
}

export namespace IUseCaseLoadProduct {
  export type Result = Promise<ModelProduct[]>

  export type Params = Record<string, string>
}