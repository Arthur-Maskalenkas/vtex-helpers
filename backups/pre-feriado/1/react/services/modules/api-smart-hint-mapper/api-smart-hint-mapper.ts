import { getLocalStorage } from '../../../modules/default/others/manager-local-storage'
import { ResponseApiSmartHint } from '../api-manager-smart-hint/types-api-smart-hint'
import { ParamsApiSmartHintMapParams,  ResponseApiSmartHintMapper } from './types-api-smart-hint-mapper'

export class ApiSmartHintMapper {
  public mapParamProducts (orderForm: any | null) {
    console.log(`🚀 ~ ApiSmartHintMapper ~ mapParamProducts ~ orderForm:`, orderForm)
    if (!orderForm) {
      return ''
    }

    const dataFormatted = orderForm?.items?.map((item: any, index: any) => (
			`products[${index}]: "ProductId: ${item.productId}"`
    ))
    console.log(`🚀 ~ ApiSmartHintMapper ~ mapParamProducts ~ dataFormatted:`, dataFormatted)

    return `products=${dataFormatted?.join(' ')}`
  }

  public mapParamCategories () {
    const categories = getLocalStorage('search-categories')?.data as string[]

    if (!categories) {
      return ''
    }

    const dataFormatted = categories.map((_, index) => (
			`categories[${index}]: ${categories[categories.length - index - 1]}`
    ))

    return `categories=${dataFormatted.join(' ')}`
  }

  public mapPageUrl (pageUrl: string): string | null {
    try {
      const pageUrlBuild = new URL(pageUrl)

      const pageUrlMapped = pageUrl?.replace(`${pageUrlBuild?.origin}/`, '')

      return pageUrlMapped
    } catch (e) {
      console.error(e)
      return null
    }
  }

  public async apiSmartHintMapAllParams (data: ParamsApiSmartHintMapParams): Promise<string | null> {
    const pageIdentifier = this?.mapPageUrl(data?.urlPage)
    const params = [
			`shCode=${data?.shCode}`,
			`anonymous=${data?.anonymous}`,
			`channel=${data?.channel}`,
			`pageType=${data?.pageType}`,
			`position=${data?.position}`,
      `${this.mapParamCategories()}`,
      `${this.mapParamProducts(data?.orderForm)}`
    ]

    if (pageIdentifier) {
      params.push(`pageIdentifier=${pageIdentifier}`)
    }

    return params?.join('&')
  }

  public mapRecommendationsByPage (pathRoot: ResponseApiSmartHint): ResponseApiSmartHintMapper[] | null {
    const root = pathRoot?.[0]?.RecommendationsProducts

    const remappedRecommendations = root?.map((item): ResponseApiSmartHintMapper => {
      return {
        dataBySmartHintMap: {
          nameRecommendation: item?.NameRecommendation,
          eventGoogleAnalytics: item?.EventGoogleAnalytics,
          titleRecommendation: item?.TitleRecommendation,
          idsProductsToFetch: item?.Products?.map(item => item.ProductId),
          smartHintPosition: pathRoot?.[0]?.SmartHintPosition
        }
      }
    })

    return remappedRecommendations
  }
}
