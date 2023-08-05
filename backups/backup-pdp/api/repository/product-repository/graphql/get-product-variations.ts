export namespace GetProductVariationsQuery {
  export type Params = {
    referenceId: string;
  }

  export type Response = {
    products: Product[]
  }

  export interface Product {
    productId: string
    link: string
    productName: string
    productReference: string
    items: Item[]
  }

  export interface Item {
    itemId: string
    images: Image[]
    variations: Variation[]
    sellers: Seller[]
  }

  export interface Image {
    imageUrl: string
    imageText: string
  }

  export interface Variation {
    name: string
    values: string[]
  }

  export interface Seller {
    commertialOffer: CommertialOffer
  }

  export interface CommertialOffer {
    AvailableQuantity: number
  }


  export type MappedSku = {
    itemId?: string
    productId?: string
    comp_label?: string
    comp_isDisabled?: boolean
  }

  export type MappedProduct = {
    productName: string
    productId?: string
    image?: string
    firstItemId?: string
    href?: string
  }

  export type MappedResponse = {
    listProductsSkus: MappedSku[]
    listProductsReference: MappedProduct[]
  }


}
