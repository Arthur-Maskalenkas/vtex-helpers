import { type ModelProduct } from '../models/product.ts'

export type IUseCaseLoadProductParams = Record<string, string>
export interface IUseCaseLoadProduct {
  load: (params: IUseCaseLoadProductParams) => Promise<ModelProduct[] | null>
}