import {
  ApiSmartHintRecommendations,
  RootObjectApiSmartHint,
  SmartHintUseCaseGetRecommendationByPageWithProduct
} from '../domain/useCases'
import { LocalStorageManager, useFetch } from '../utilities'

export class SmartHintRepositoryGetRecommendationByPageWithProduct implements SmartHintUseCaseGetRecommendationByPageWithProduct {
  constructor(
    private readonly localStorageManager: LocalStorageManager
  ) {
  }

  public mapParamProducts(orderForm: any | null) {
    if (!orderForm) {
      return ''
    }

    const dataFormatted = orderForm?.items?.map((item: any, index: any) => (
      `products[${index}]: "ProductId: ${item.productId}"`
    ))

    return `${dataFormatted?.join(' ')}`
  }

  public mapParamCategories(categories: string[]) {
    console.log('🚀 ~ SmartHintRepositoryGetRecommendationByPageWithProduct ~ mapParamCategories ~ categories:', categories)
    if (!categories) {
      return ''
    }

    const dataFormatted = categories?.map((_, index) => (
      `categories[${index}]: ${categories[categories.length - index - 1]}`
    ))

    return `${dataFormatted.join(' ')}`
  }

  public mapPageUrl(pageUrl: string): string | null {
    try {
      const pageUrlBuild = new URL(pageUrl)

      const pageUrlMapped = pageUrl?.replace(`${pageUrlBuild?.origin}/`, '')

      return pageUrlMapped
    } catch (e) {
      console.error(e)
      return null
    }
  }




  async handle(params: SmartHintUseCaseGetRecommendationByPageWithProduct.Params): Promise<SmartHintUseCaseGetRecommendationByPageWithProduct.Response> {
    console.log(`🚀 ~ SmartHintRepositoryGetRecommendationByPageWithProduct ~ handle ~ params:`, params)
    const paramsToFormat = Object.entries({
      ...params?.apiParams,
      categories: this?.mapParamCategories(this.localStorageManager.get('search-categories')?.data),
      products: this?.mapParamProducts(params?.orderForm),
      pageIdentifier: this?.mapPageUrl(params?.apiParams?.urlPage)
    })

    const paramsFormmated = paramsToFormat
      ?.filter(Boolean)
      ?.map(([key, value]) => `${key}=${value}`)
      ?.join('&');

    console.log(`🚀 ~ SmartHintRepositoryGetRecommendationByPageWithProduct ~ handle ~ paramsFormatted:`, paramsFormmated)

    const remappedRecommendations = await this.apiFetch(paramsFormmated)
    console.log(`🚀 ~ SmartHintRepositoryGetRecommendationByPageWithProduct ~ handle ~ remappedRecommendations:`, remappedRecommendations)

    if (!remappedRecommendations) {
      return []
    }

    return remappedRecommendations
  }

  public async apiFetch(paramsMerged: string, typeRecommendation: ApiSmartHintRecommendations = 'RecommendationsProducts'): Promise<SmartHintUseCaseGetRecommendationByPageWithProduct.ResponseObj[] | undefined> {
    const apiResponse: [RootObjectApiSmartHint] = await useFetch(`https://recs.smarthint.co/recommendationByPage/withProducts?${paramsMerged}`)

    console.log(`🚀 ~ SmartHintRepositoryGetRecommendationByPageWithProduct ~ apiFetch ~ apiResponse:`, apiResponse)
    const root = apiResponse?.[0]?.[typeRecommendation]
    console.log(`🚀 ~ SmartHintRepositoryGetRecommendationByPageWithProduct ~ apiFetch ~ root:`, root)

    return root?.map(item => ({
      nameRecommendation: item?.NameRecommendation,
      eventGoogleAnalytics: item?.EventGoogleAnalytics,
      titleRecommendation: item?.TitleRecommendation,
      idsProductsToFetch: item?.Products?.map(item => item.ProductId),
      order: item?.Order
    }))
  }
}
