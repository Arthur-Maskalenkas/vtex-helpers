import { VtexProductModel } from '../domain/models'
import {
  SmartHintUseCaseGetRecommendationByPageWithProduct,
  VtexUseCaseGetListProductsByID,
  VtexUseCaseGetUser
} from '../domain/useCases'

export type RecommendationNormalize = {
  products?: VtexProductModel[]
  title?: string
  googleGTMTitle?: string
}

export type ResponseRouteNormalize = {
  recommendations?: RecommendationNormalize[]
}

export class NormalizeGetRecommendationByPageWithProduct {
  constructor (
    private readonly smartHintApiGetRecommendationByPageWithProduct: SmartHintUseCaseGetRecommendationByPageWithProduct,
    private readonly vtexApiGetUser: VtexUseCaseGetUser,
    private readonly vtexApiGetListProducts: VtexUseCaseGetListProductsByID) {
  }

  public async handles (params: SmartHintUseCaseGetRecommendationByPageWithProduct.Params): Promise<ResponseRouteNormalize> {
    const user = await this?.vtexApiGetUser?.handle()
    console.log(`🚀 ~ NormalizeGetRecommendationByPageWithProduct ~ handles ~ user:`, user)

    const smartHintListShelfsOnPage = await this.smartHintApiGetRecommendationByPageWithProduct
      .handle({ ...params, apiParams: { ...params?.apiParams, anonymous: user } })
    console.log(`🚀 ~ NormalizeGetRecommendationByPageWithProduct ~ handles ~ smartHintListShelfsOnPage:`, smartHintListShelfsOnPage)

    const vtexFetchProducts = await Promise.all(
      smartHintListShelfsOnPage
        ?.map(async item => await this.vtexApiGetListProducts.handle(item.idsProductsToFetch))
        ?.filter(Boolean)
    )
    console.log(`🚀 ~ NormalizeGetRecommendationByPageWithProduct ~ handles ~ vtexFetchProducts:`, vtexFetchProducts)

    const dataMapped: ResponseRouteNormalize = {
      recommendations: vtexFetchProducts?.map((item, index) => ({
        products: item,
        googleGTMTitle: smartHintListShelfsOnPage?.[index].eventGoogleAnalytics,
        title: smartHintListShelfsOnPage?.[index].titleRecommendation
      }))
    }
    console.log(`🚀 ~ NormalizeGetRecommendationByPageWithProduct ~ handles ~ dataMapped:`, dataMapped)

    return dataMapped
  }
}
