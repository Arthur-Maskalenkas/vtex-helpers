export interface AdditionalInfo {
  brandName: string
  __typename: string
}

export interface ImageUrls {
  at1x: string
  at2x: string
  at3x: string
  __typename: string
}

export interface ProductCategories {
  417: string
  418: string
  419: string
}

export interface Item {
  additionalInfo: AdditionalInfo
  assemblyOptions?: any
  availability: string
  attachmentOfferings: any[]
  attachments: any[]
  bundleItems: any[]
  detailUrl: string
  id: string
  imageUrls: ImageUrls
  listPrice: number
  manualPrice?: any
  measurementUnit: string
  name: string
  offerings: any[]
  parentAssemblyBinding?: any
  parentItemIndex?: any
  price: number
  productCategories: ProductCategories
  productCategoryIds: string
  productId: string
  productRefId?: any
  quantity: number
  refId: string
  seller: string
  sellingPrice: number
  sellingPriceWithAssemblies?: any
  skuName: string
  skuSpecifications: any[]
  uniqueId: string
  unitMultiplier: number
  priceTags: any[]
  __typename: string
}

export interface Totalizer {
  id: string
  name: string
  value: number
  __typename: string
}

export interface OrderForm {
  value: number
  items: Item[]
  loggedIn: boolean
  allowManualPrice: boolean
  canEditData: boolean
  userProfileId?: any
  userType: string
  totalizers: Totalizer[]
  clientProfileData?: any
  __typename: string
}
