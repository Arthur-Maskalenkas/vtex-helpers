import { type ProtocolRepositoryLoadProduct } from '../../data/protocols/repositoryLoadProduct.ts'

export class RepositoryProduct implements ProtocolRepositoryLoadProduct {
  async load (id: ProtocolRepositoryLoadProduct.Params): ProtocolRepositoryLoadProduct.Result {
    const result = await fetch(`/api/catalog_system/pub/products/search?productId:${id}`)
    const data = await result?.json()

    if (!data?.length) return null

    return data[0]
  }
}