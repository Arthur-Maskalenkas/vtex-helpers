import { OrderFormModel } from '../models'
import { SmartHintProductModel } from '../models/smart-hint-product-model'

export interface SmartHintUseCaseGetRecommendationByPageWithProduct {
  handle: (params: SmartHintUseCaseGetRecommendationByPageWithProduct.Params) => Promise<SmartHintUseCaseGetRecommendationByPageWithProduct.Response>
}

export namespace SmartHintUseCaseGetRecommendationByPageWithProduct {
  export type ResponseObj = {
    nameRecommendation: string
    eventGoogleAnalytics: string
    titleRecommendation: string
    order: number
    idsProductsToFetch: string[]
  }

  export type Response = ResponseObj[]

  export type Params = {
    apiParams: {
      pageType: PageType // props
      shCode: string // props
      position: string // props
      channel: string // vai ser decidido utilizando o runtime no useEffect
      urlPage: string // vai ser decidido usando o window.href no useEffect
      anonymous?: string
    }
    orderForm: OrderFormModel
  }

  export type PageType =
		'category'
		| 'search'
		| 'searchWithResult'
		| 'home'
		| 'cart'
		| 'emptycart'
		| 'checkout'
		| 'notfound'
		| 'product'
		| 'other'
}

export interface RootObjectApiSmartHint {
  SmartHintPosition: string
  RecommendationsProducts?: RecommendationApiSmartHint[]
  RecommendationsPromotional?: RecommendationApiSmartHint[]
  RecommendationsCombination?: RecommendationApiSmartHint[]
}

export type ApiSmartHintRecommendations =
	keyof Omit<RootObjectApiSmartHint, 'SmartHintPosition'>

export interface RecommendationApiSmartHint {
  EventGoogleAnalytics: string
  NameRecommendation: string
  TitleRecommendation: string
  Order: number
  Products: SmartHintProductModel[]
}