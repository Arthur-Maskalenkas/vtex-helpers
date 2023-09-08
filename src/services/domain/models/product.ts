import { type ExternalModelProduct } from './external/product.ts'

export class ModelProduct {
  public currentProduct: Product.Current
  public api: ExternalModelProduct
  constructor ({ api, currentProduct }: { api: ExternalModelProduct, currentProduct: Product.Current }) {
    this.currentProduct = currentProduct
    this.api = api
  }
}

export namespace Product {
  export type Specification = {
    name: string
    value: string
    url: string
  }

  export type Sku = {
    name: string
    id: string
    url: string
    specifications: Specification[]

    currentPrice: number
    oldPrice: number
  }

  export type Category = {
    name: string
    url: string
  }

  export type Current = {
    name: string
    id: string
    brand: string

    specifications: Specification[]
    collections: Record<string, any>
    category: Category
    categories: Category[]

    skus: Sku[]
    currentSku: Sku
  }

}