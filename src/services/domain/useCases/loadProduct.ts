import { type ModelProduct } from '../models/product.ts'

export interface IUseCaseLoadProduct {
  load: (params: Record<string, string>) => Promise<ModelProduct[] | null>
}