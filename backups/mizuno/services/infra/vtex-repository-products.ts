import { VtexProductModel } from '../domain/models'
import { VtexUseCaseGetListProductsByID } from '../domain/useCases'
import { useFetch } from '../utilities'

export class VtexRepositoryProducts implements VtexUseCaseGetListProductsByID {
  public async handle (params: VtexUseCaseGetListProductsByID.Params): VtexUseCaseGetListProductsByID.Response {
    const query = params?.map(productId => `fq=productId:${productId}`).join('&')

    const request = `/api/catalog_system/pub/products/search?${query}`

    const response = await useFetch<VtexProductModel[]>(request)

    if (response?.length === 0) {
      return []
    }

    return response
  }
}