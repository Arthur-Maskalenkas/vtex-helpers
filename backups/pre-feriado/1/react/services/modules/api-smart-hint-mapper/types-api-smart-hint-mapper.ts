import { PagesType } from "../api-manager-smart-hint/types-api-smart-hint"

export type DataBySmartHintMap = {
  idsProductsToFetch: string[]
  titleRecommendation: string
  eventGoogleAnalytics: string
  nameRecommendation: string
  smartHintPosition: string
}

export type ResponseApiSmartHintMapper = {
  dataBySmartHintMap: DataBySmartHintMap
}

export type ParamsApiSmartHintMapParams = {
  anonymous: string
  pageType: PagesType // props
  shCode: string // props
  position: string // props
  channel: string // vai ser decidido utilizando o runtime no useEffect
  urlPage: string // vai ser decidido usando o window.href no useEffect
  orderForm: any
}
