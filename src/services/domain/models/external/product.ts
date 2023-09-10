export interface ExternalModelProduct {
  productId: string
  productName: string
  brand: string
  brandId: number
  brandImageUrl: any
  linkText: string
  productReference: string
  productReferenceCode: string
  categoryId: string
  productTitle: string
  metaTagDescription: string
  releaseDate: string
  clusterHighlights: Record<string, string> | null
  productClusters: Record<string, string> | null
  categories: string[]
  categoriesIds: string[]
  link: string
  allSpecifications: string[]
  allSpecificationsGroups: string[]
  description: string

  skuSpecifications: Array<{
    field: {
      id?: number
      name: string
      position?: number
      isActive: boolean
      type?: string
    }

    values: Array<{
      id?: string
      name: string
      position?: number
    }>
  }>

  items: Array<
  {
    itemId: string
    name: string
    nameComplete: string
    complementName: string
    ean: string
    referenceId: Array<{
      Key: string
      Value: string
    }>
    measurementUnit: string
    unitMultiplier: number
    modalType: any
    isKit: boolean
    images: Array<{
      imageId: string
      imageLabel: string
      imageTag: string
      imageUrl: string
      imageText: string
      imageLastModified: string
    }>
    variations: string[]
    sellers: [{
      sellerId: string
      sellerName: string
      addToCartLink: string
      sellerDefault: boolean
      commertialOffer: {
        Installments: Array<{
          Value: number
          InterestRate: number
          TotalValuePlusInterestRate: number
          NumberOfInstallments: number
          PaymentSystemName: string
          PaymentSystemGroupName: string
          Name: string
        }>
        DiscountHighLight: any[]
        GiftSkuIds: any[]
        Teasers: any[]
        PromotionTeasers: any[]
        BuyTogether: any[]
        ItemMetadataAttachment: any[]
        Price: number
        ListPrice: number
        PriceWithoutDiscount: number
        RewardValue: number
        PriceValidUntil: string
        AvailableQuantity: number
        IsAvailable: boolean
        Tax: number
        GetInfoErrorMessage: any
        CacheVersionUsedToCallCheckout: string
      }
    }]
    Videos: any[]
    estimatedDateArrival: any
  }>

}