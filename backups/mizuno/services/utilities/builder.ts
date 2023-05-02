import {
  SmartHintRepositoryGetRecommendationByPageWithProduct,
  VtexRepositoryAccount,
  VtexRepositoryProducts
} from '../infra'
import { NormalizeGetRecommendationByPageWithProduct } from '../presentation'
import { LocalStorageManager } from './local-stora-manager'

export const generateNormalizeGetRecommendationByPageWithProduct = (): NormalizeGetRecommendationByPageWithProduct => {
  const vtexRepositoryAccount = new VtexRepositoryAccount()
  const vtexRepositoryProducts = new VtexRepositoryProducts()

  const localStorageManager = new LocalStorageManager()

  const smartHintRepositoryGetRecommendationByPageWithProduct = new SmartHintRepositoryGetRecommendationByPageWithProduct(localStorageManager)

  return new NormalizeGetRecommendationByPageWithProduct(
    smartHintRepositoryGetRecommendationByPageWithProduct,
    vtexRepositoryAccount,
    vtexRepositoryProducts
  )
}