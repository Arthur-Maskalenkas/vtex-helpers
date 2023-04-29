import { ApiSmartHintCommonProps, ResponseApiSmartHint, ResponseRecommendationsByPage } from './types-api-smart-hint'
import { ApiSmartHintMapper } from '../api-smart-hint-mapper/api-smart-hint-mapper'
import { ApiManagerVtex } from '../api-manager-vtex/api-manager-vtex'
import { useFetch } from '../helpers/use-fetch'

export class ApiManagerSmartHint {
  constructor (
    private readonly apiSmartHintMapper: ApiSmartHintMapper,
    private readonly apiManagerVtex: ApiManagerVtex
  ) { }

  public async recommendationByPage (data: ApiSmartHintCommonProps): ResponseRecommendationsByPage {
    const paramApiAnonymus = await this?.apiManagerVtex?.getUserProfile()

    const baseApi = 'https://recs.smarthint.co/recommendationByPage/withProducts?'
    const paramsApi = await this?.apiSmartHintMapper?.apiSmartHintMapAllParams({
      ...data,
      anonymous: paramApiAnonymus ?? ''
    })
    console.log(`🚀 ~ ApiManagerSmartHint ~ recommendationByPage ~ paramsApi:`, paramsApi)
    const api = `${baseApi}${paramsApi}`

    console.log(`🚀 ~ ApiManagerSmartHint ~ recommendationByPage ~ api:`, api)

    const responseApiSmartHint = await useFetch<ResponseApiSmartHint>(api)
    const apiSmartHintRemapped = await this?.apiSmartHintMapper.mapRecommendationsByPage(responseApiSmartHint)

    if (!apiSmartHintRemapped) {
      return null
    }

    const apiVtexProducts = await Promise.all(
      apiSmartHintRemapped
      ?.map((item) => this?.apiManagerVtex?.getProductsById(item?.dataBySmartHintMap?.idsProductsToFetch))     )
      ?.then(data => data.filter(Boolean))
    console.log(`🚀 ~ ApiManagerSmartHint ~ apiVtexProducts ~ apiVtexProducts:`, apiVtexProducts)

    if (!apiVtexProducts) {
      return null
    }

    const apiVtexSanit =  apiVtexProducts?.filter(Boolean)

    const dataStructured:any = {
      products: apiVtexSanit?.[0],
      title: apiSmartHintRemapped?.[0]?.dataBySmartHintMap?.nameRecommendation
    }

    return dataStructured
  }
}
