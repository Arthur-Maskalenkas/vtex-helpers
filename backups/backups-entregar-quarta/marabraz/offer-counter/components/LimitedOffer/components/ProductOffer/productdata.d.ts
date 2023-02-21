export interface ProductData {
  product: {
    productName: string
    linkText: string
    items: ItemSku[]
  }
}

type ItemSku = {
  images: image[]
  sellers: seller[]
}

type image = {
  imageUrl: string
}

type seller = {
  commertialOffer: {
    ListPrice: number
    Price: number
  }
}
