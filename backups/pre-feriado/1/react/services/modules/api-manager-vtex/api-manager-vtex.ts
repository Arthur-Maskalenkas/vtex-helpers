import { ResponseGetProfileSystemApi } from './types-api-manager-vtex'
import { useFetch } from '../helpers/use-fetch'
import { VTEXProduct } from '../api-manager-smart-hint/types-api-vtex'

export class ApiManagerVtex {
  public async getProductsById (listProductIds: string[]): Promise<VTEXProduct[] | null> {
    try {
      const query = listProductIds?.map(productId => `fq=productId:${productId}`).join('&')

      const request = `/api/catalog_system/pub/products/search?${query}`

      const response = await useFetch<VTEXProduct[]>(request)

      if (response?.length === 0) {
        return null
      }

      return response
    } catch (e) {
      console.error(e)
      return null
    }
  }

  public async getUserProfile (): Promise<string | null> {
    try {
      const api = '/no-cache/profileSystem/getProfile'

      const response = await useFetch<ResponseGetProfileSystemApi>(api)
      return response?.UserId
    } catch (e) {
      console.error(e)
      return null
    }
  }
}
