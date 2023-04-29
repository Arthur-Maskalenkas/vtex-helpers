import type { ProductFragment } from './fragments/ProductType'
import type { SkuFragment } from './fragments/ItemType'
import type { SellerFragment } from './fragments/SellerType'
import type { CommertialOfferFragment } from './fragments/CommertialOfferType'
import type { InstallmentFragment } from './fragments/InstallmentType'

type Installment = {
  Installments: InstallmentFragment[]
}

type CommertialOffer = CommertialOfferFragment & Installment

type Seller = SellerFragment & CommertialOffer

type Item = SkuFragment & { sellers: Seller[] }

export type QueryRelatedProductData = {
  productRecommendations: Array<ProductFragment & { items: Item[] }>
}


type ProductUniqueIdentifierField = 'id' | 'slug' | 'ean' | 'reference' | 'sku'

type ProductUniqueIdentifier = {
  field: ProductUniqueIdentifierField,
  value: string
}

type CrossSelingInputEnum = 'buy' | 'similars' | 'view' | 'viewAndBought' | 'accessories' | 'suggestions'


export type QueryRelatedProductVariables = {
  identifier?: ProductUniqueIdentifier
  type?: CrossSelingInputEnum
}

