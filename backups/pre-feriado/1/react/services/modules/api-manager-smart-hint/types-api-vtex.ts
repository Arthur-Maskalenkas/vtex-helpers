declare type Maybe<T> = T | null | undefined
export declare type MaybeProduct = Maybe<VTEXProduct>
export declare type ProductSpecification = {
  name: string
  originalName: string
  values: string[]
}
/** @deprecated Use `ProductSpecification` */
export declare type SpecificationGroupItem = ProductSpecification
export declare type SpecificationGroup = {
  name: string
  originalName: string
  specifications: ProductSpecification[]
}
export declare type VTEXProduct = {
  brand: string
  brandId: string
  cacheId: string
  categories: string[]
  categoriesIds: string[]
  categoryId: string
  categoryTree: Array<{
    id: string
    name: string
    href: string
  }>
  clusterHighlights: Array<{
    id: string
    name: string
  }>
  description: string
  itemMetadata: ItemMetadata
  items: Item[]
  link: string
  linkText: string
  metaTagDescription: string
  priceRange: {
    sellingPrice: {
      highPrice: number
      lowPrice: number
    }
    listPrice: {
      highPrice: number
      lowPrice: number
    }
  }
  productClusters: Array<{
    id: string
    name: string
  }>
  productId: string
  productName: string
  productReference: string
  properties: ProductSpecification[]
  skuSpecifications: SkuSpecification[]
  specificationGroups: SpecificationGroup[]
  titleTag: string
}
export declare type Item = {
  complementName: string
  ean: string
  Cor: [string]
  Tamanho: [string]
  images: Array<{
    imageId: string
    imageLabel: string
    imageTag: string
    imageUrl: string
    imageText: string
  }>
  itemId: string
  measurementUnit: string
  name: string
  nameComplete: string
  referenceId: Array<{
    Key: string
    Value: string
  }>
  sellers: Seller[]
  unitMultiplier: number
  variations: Array<{
    name: string
    values: string[]
  }>
  videos: Array<{
    videoUrl: string
  }>
}
export declare type SkuSpecification = {
  field: SkuSpecificationField
  values: SkuSpecificationValues[]
}
export declare type SkuSpecificationField = {
  name: string
}
export declare type SkuSpecificationValues = {
  name: string
}
export declare type Seller = {
  sellerId: string
  sellerName: string
  addToCartLink: string
  sellerDefault: boolean
  commertialOffer: CommercialOffer
}
declare type TeaserCondition = {
  minimumQuantity: number
  parameters: Array<{
    name: string
    value: string
  }>
}
declare type TeaserEffects = {
  parameters: Array<{
    name: string
    value: string
  }>
}
export declare type Teaser = {
  name: string
  conditions: TeaserCondition
  effects: TeaserEffects
}
export declare type CommercialOffer = {
  Installments: Installment[]
  discountHighlights: Array<{
    name: string
  }>
  teasers: Teaser[]
  Price: number
  ListPrice: number
  spotPrice: number
  SellingPrice?: number
  PriceWithoutDiscount: number
  RewardValue: number
  PriceValidUntil: string
  AvailableQuantity: number
  Tax: number
  taxPercentage: number
  CacheVersionUsedToCallCheckout: string
}
export declare type Installment = {
  Value: number
  InterestRate: number
  TotalValuePlusInterestRate: number
  NumberOfInstallments: number
  PaymentSystemName: string
  PaymentSystemGroupName: string
  Name: string
}
export declare type ItemMetadata = {
  items: Array<{
    id: string
    Cor: [string]
    Tamanho: [string]
    name: string
    imageUrl: string
    seller: string
    assemblyOptions: Array<{
      id: string
      name: string
      required: boolean
      inputValues: InputValue[]
      composition: Composition | null
    }>
  }>
  priceTable: Array<{
    type: string
    values: Array<{
      id: string
      assemblyId: string
      price: number | null
    }>
  }>
}
export declare type InputValue = TextInputValue | BooleanInputValue | OptionsInputValue
declare const enum InputValueType {
  'TEXT' = 'TEXT',
  'BOOLEAN' = 'BOOLEAN',
  'OPTIONS' = 'OPTIONS'
}
export declare type TextInputValue = {
  type: InputValueType.TEXT
  defaultValue: ''
  label: string
  maxLength: number
  domain: null
}
export declare type BooleanInputValue = {
  type: InputValueType.BOOLEAN
  defaultValue: boolean
  label: string
  maxLength: null
  domain: null
}
export declare type OptionsInputValue = {
  type: InputValueType.OPTIONS
  defaultValue: string
  label: string
  maxLength: null
  domain: string[]
}
export declare type Composition = {
  minQuantity: number
  maxQuantity: number
  items: Array<{
    id: string
    minQuantity: number
    maxQuantity: number
    priceTable: string
    seller: string
    initialQuantity: number
  }>
}

export interface SmartHintAPI {
  'smarthint-position': string
  recommendationsProducts: RecommendationsProduct[]
  recommendationsPromotional: RecommendationsPromotional[]
  recommendationsCombination: RecommendationsCombination[]
}

export interface RecommendationsProduct {
  order: number
  nameRecommendation: string
  titleRecommendation: string
  eventGoogleAnalytics: string
  products: ApiSmartProduct[]
}

export interface ApiSmartProduct {
  ProductId: string
  Title: string
  Mpn: string
  MpnFather: string
  Sku: string
  Description: string
  Price: number
  SalePrice: number
  PromotionDiscount: number
  Availability: 'out of stock' | 'in stock'
  ProductType: string
  Link: string
  Installment: number
  InstallmentAmount: number
  BankSlipPrice: number
  Gender: string
  Brand: string
  ReviewStars: number
  Categories: string[]
  ImageLink: string
  AdicionalImageLink: string[]
  Tags: string[]
  CreatedDate: string
  OfferDate: string
  AditionalFeatures: AditionalFeatures
  Rules?: Rule[]
  Conditions?: Condition[]
  Specifications: Specification[]
  SellsCount?: number
  ViewsCount?: number
}

export interface AditionalFeatures {
  ABC0987654321: string
  '0987654321ABC': string
}

export interface Rule {
  Value?: string
  Values: Value[]
  StartDouble?: number
  EndDouble?: number
  StartDate?: string
  EndDate?: string
}

export interface Value {
  Name: string
  ValueString?: string
  ValueDouble?: number
}

export interface Condition {
  StartDouble?: number
  EndDouble?: number
  Validation?: string[]
  Values: Value2[]
  Value?: string
}

export interface Value2 {
  Field: string
  Name: string
  ValueString: string
}

export interface Specification {
  Sku: string
  SpecificationId: string
  Availability: string
  Changes?: Change[]
  Variations: Variation[]
}

export interface Change {
  Name: string
  ValueDouble?: number
  ValueInt?: number
  ValueString?: string
}

export interface Variation {
  Name: string
  Value: string
}

export interface RecommendationsPromotional {
  order: number
  nameRecommendation: string
  titleRecommendation: string
  eventGoogleAnalytics: string
  bannerUrl: string
  bannerUrlClick: string
  bannerHtml: string
  positionBanner: string
  hasTimer?: string
  startDateTime?: string
  endDateTime?: string
  products: Product2[]
}

export interface Product2 {
  ProductId: string
  Title: string
  Mpn: string
  MpnFather: string
  Sku: string
  Description: string
  Price: number
  SalePrice: number
  PromotionDiscount: number
  Availability: string
  ProductType: string
  Link: string
  Installment: number
  InstallmentAmount: number
  BankSlipPrice: number
  Gender: string
  Brand: string
  ReviewStars: number
  Categories: string[]
  ImageLink: string
  AdicionalImageLink: string[]
  Tags: string[]
  CreatedDate: string
  OfferDate: string
  AditionalFeatures: AditionalFeatures2
  Rules: Rule2[]
  Conditions: Condition2[]
  Specifications: Specification2[]
  SellsCount?: number
  ViewsCount?: number
}

export interface AditionalFeatures2 {
  ABC0987654321: string
  '0987654321ABC': string
}

export interface Rule2 {
  Value?: string
  Values: Value3[]
  StartDouble?: number
  EndDouble?: number
  StartDate?: string
  EndDate?: string
}

export interface Value3 {
  Name: string
  ValueString?: string
  ValueDouble?: number
}

export interface Condition2 {
  StartDouble?: number
  EndDouble?: number
  Validation?: string[]
  Values: Value4[]
  Value?: string
}

export interface Value4 {
  Field: string
  Name: string
  ValueString: string
}

export interface Specification2 {
  Sku: string
  SpecificationId: string
  Availability: string
  Changes?: Change2[]
  Variations: Variation2[]
}

export interface Change2 {
  Name: string
  ValueDouble?: number
  ValueInt?: number
  ValueString?: string
}

export interface Variation2 {
  Name: string
  Value: string
}

export interface RecommendationsCombination {
  order: number
  nameRecommendation: string
  titleRecommendation: string
  eventGoogleAnalytics: string
  combos: Combo[]
}

export interface Combo {
  order: number
  titleCombo: string
  bannerUrl: string
  bannerUrlClick: string
  bannerHtml: string
  products: Product3[]
}

export interface Product3 {
  ProductId: string
  Title: string
  Mpn: string
  MpnFather: string
  Sku: string
  Description: string
  Price: number
  SalePrice: number
  PromotionDiscount: number
  Availability: string
  ProductType: string
  Link: string
  Installment: number
  InstallmentAmount: number
  BankSlipPrice: number
  Gender: string
  Brand: string
  ReviewStars: number
  Categories: string[]
  ImageLink: string
  AdicionalImageLink: string[]
  Tags: string[]
  CreatedDate: string
  OfferDate: string
  AditionalFeatures: AditionalFeatures3
  Rules: Rule3[]
  Conditions: Condition3[]
  Specifications: Specification3[]
  SellsCount?: number
  ViewsCount?: number
}

export interface AditionalFeatures3 {
  ABC0987654321: string
  '0987654321ABC': string
}

export interface Rule3 {
  Value?: string
  Values: Value5[]
  StartDouble?: number
  EndDouble?: number
  StartDate?: string
  EndDate?: string
}

export interface Value5 {
  Name: string
  ValueString?: string
  ValueDouble?: number
}

export interface Condition3 {
  StartDouble?: number
  EndDouble?: number
  Validation?: string[]
  Values: Value6[]
  Value?: string
}

export interface Value6 {
  Field: string
  Name: string
  ValueString: string
}

export interface Specification3 {
  Sku: string
  SpecificationId: string
  Availability: string
  Changes?: Change3[]
  Variations: Variation3[]
}

export interface Change3 {
  Name: string
  ValueDouble?: number
  ValueInt?: number
  ValueString?: string
}

export interface Variation3 {
  Name: string
  Value: string
}
