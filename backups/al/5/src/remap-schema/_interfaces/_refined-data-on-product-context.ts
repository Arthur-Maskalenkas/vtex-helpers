export type FieldDataRefined = {
  value: string | string[]
  name?: string
  refGroup?: string
}

export type FieldDiscountDataRefined = {
  listPrice?: number
  sellingPrice?: number
  discountInPercentage?: number
  discountInValue?: number
}

export interface DataRefined {
  brand?: FieldDataRefined
  category?: FieldDataRefined
  product?: FieldDataRefined
  seller?: FieldDataRefined
  price?: FieldDiscountDataRefined

  collection?: FieldDataRefined[]
  variation?: FieldDataRefined[]
  specification?: FieldDataRefined[]
}

// otimizar para brand: name: string, values []
export type RefinedDataOnProductContext = {
  brandId?: number
  categoryId?: string
  productId?: string

  listOfCollections?: ListOfCollection[]
  listOfVariations?: field_on_refined_data[]
  listOfProductFields?: field_on_refined_data[]
}

// mudar
export interface ListOfCollection {
  id: string
  name: string
}

export interface ListOfVariation {
  name: string
  values: string[]
}

export interface ListOfProductField {
  name: string
  values: string[]
}

export interface field_on_refined_data {
  name: string
  values: string[]
}