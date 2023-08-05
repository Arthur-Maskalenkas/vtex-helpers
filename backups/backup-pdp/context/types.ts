
export type ContextSlotComponents = {
  SlotComponentShipping: any
  SlotComponentSliderMainImage: any
  SlotComponentPaymentOptions: any
  SlotComponentSizeBay: any
  SlotComponentsProductRatingSummary: any
  SlotComponentsWishlist: any
  SlotComponentShare: any
  SlotComponentProductDescription: any
  SlotComponentTitleRating: any
SlotComponentProductReviews: any
SlotComponentShelfProduct: any
SlotComponentFloatBuybox: any

}

export type ContextProps = {

} & ContextSlotComponents

export type Color = {
  productName: string
  productId?: string
  image?: string
  firstItemId?: string
  href?: string
}

export type Size = {
  itemId?: string
  productId?: string
  comp_label?: string
  comp_isDisabled?: boolean
}

export type ContextProvider = {
  listColors: Color[],
  listSizes: Size[]
} & ContextSlotComponents
