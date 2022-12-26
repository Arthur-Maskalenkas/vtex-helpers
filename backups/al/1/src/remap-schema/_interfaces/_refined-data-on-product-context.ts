export type RefinedDataOnProductContext = {
  brandId?: number
  categoryId?: string
  productId?: string

  listOfCollections?: ListOfCollection[]
  listOfVariations?: ListOfVariation[]
  listOfProductFields?: ListOfProductField[]
}

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