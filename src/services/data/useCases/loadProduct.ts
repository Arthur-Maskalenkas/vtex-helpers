import { type IUseCaseLoadProduct } from '../../domain/useCases/loadProduct.ts'
import { type ProtocolLoadProducRepository } from '../protocols/loadProductRepository.ts'
import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../protocols/MapperExternalModelProductToProductModel.ts'
import { type ProtocolMapperSearchParams } from '../protocols/mapperSearchParams.ts'

export class UseCaseLoadProduct implements IUseCaseLoadProduct {
  constructor (
    private readonly loadProducRepository: ProtocolLoadProducRepository,
    private readonly mapperSearchParams: ProtocolMapperSearchParams,
    private readonly mapperExternalModelProductToProductModel: ProtocolMapperExternalModelProductToProductModel
  ) {
  }

  async load (params: IUseCaseLoadProduct.Params
  ): IUseCaseLoadProduct.Result {
    const paramsMapped = this.mapperSearchParams.map(params)
    const products = await this.loadProducRepository.search(paramsMapped)
    const productsRemapped = this.mapperExternalModelProductToProductModel.normalizeModelProduct(products)
    return productsRemapped
  }
}