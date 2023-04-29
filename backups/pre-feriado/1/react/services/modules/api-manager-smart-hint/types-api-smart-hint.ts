import { ShelfSmartHintProps } from '../../../apps'
import { ApiManagerVtex } from '../api-manager-vtex/api-manager-vtex'
import { ApiSmartHintMapper } from '../api-smart-hint-mapper/api-smart-hint-mapper'




export type ResponseRecommendationsByPage = Promise<ShelfSmartHintProps | null>
export type ResponseApiSmartHint = [RootObjectApiSmartHint]

export type PagesType = 'category' | 'search' | 'searchWithResult' | 'home' | 'cart' | 'emptycart' | 'checkout' | 'notfound' | 'product' | 'other'

export interface ApiSmartHintCommonProps {
  pageType: PagesType // props
  shCode: string // props
  position: string // props
  channel: string // vai ser decidido utilizando o runtime no useEffect
  urlPage: string // vai ser decidido usando o window.href no useEffect
  orderForm: any
}

export type ApiSmartHintResolverProps = {
  apiManagerVtex: ApiManagerVtex
  apiSmartHintMapper: ApiSmartHintMapper
}

export interface RootObjectApiSmartHint {
  SmartHintPosition: string
  RecommendationsProducts: RecommendationApiSmartHint[]
  RecommendationsPromotional: RecommendationApiSmartHint[]
  RecommendationsCombination: RecommendationApiSmartHint[]
}

export interface RecommendationApiSmartHint {
  EventGoogleAnalytics: string
  NameRecommendation: string
  TitleRecommendation: string
  Order: number
  Products: ProductSmartHint[]
}

export interface ProductSmartHint {
  testId?: string
  Id: string
  Title: string
  Description: string
  Price: number
  SalePrice: number
  Availability: string
  ProductId: string
  ProductType: string
  Key: string
  Date: string
  Link: string
  Installment: number
  InstallmentAmount: number
  Categories: string[]
  ImageLink: string
  Condition: string
  Brand: string
  Mpn: string
  MpnFather: string
  Tags: string[]
  Sku: string
  SecondInstallment: number
  SecondInstallmentAmount: number
  PromotionDiscount: number
  AdicionalImageLink: string[]
  BankSlipPrice: number
  CreatedDate: string
  UpdatedDate: string
  Offer: boolean
  OfferDate: string
  LowerPrice: boolean
  LowerPriceDate: string
  HasInterest: boolean
  IsBlacklisted: boolean
  OverlayPrice: number
  UponRequest: boolean
  ImageLinkSmall: string
  AdditionalTag: string
  SellsCount: number
  ViewsCount: number
  HasPromotion: boolean
  PriceInteger: string
  PriceDecimal: string
  HasSalePrice: boolean
  SalePriceInteger: string
  SalePriceDecimal: string
  HasBankSlipPrice: boolean
  BankSlipPriceInteger: string
  BankSlipPriceDecimal: string
  HasInstallment: boolean
  InstallmentAmountInteger: string
  InstallmentAmountDecimal: string
  HasSecondInstallment: boolean
  SecondInstallmentAmountInteger: string
  SecondInstallmentAmountDecimal: string
  HasAdditionalTag: boolean
  HasDiscount: boolean
  Discount: number
  SecondImageLink: string
  FirstCategory: string
  LastCategory: string
  PurchasePercentage: number
  FinalPrice: number
  BlockedRecommendation: boolean
  BlockedOverlay: boolean
  BlockedSearch: boolean
  BlockedHotsite: boolean
  Excluded: boolean
  ProductFilters: any[]
  AditionalFeatures: {
    addToCartLink: string
    customWeight: string
    measurementUnit: string
    sellerId: string
    unitMultiplier: string
  }
  Completion: {
    Input: string[]
  }
  CustomWeight: number
  Specifications: Array<
  {
    sku: string
    specificationId: string
    mpn?: string
    mpnFather?: string
    availability: string
    variations: Array<{
      Name: string
      Value: string
    }>
  }
  >
  shImport: any[]
  StockDate: string
  ReviewStars: number
}
