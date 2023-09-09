import { type IUseCaseLoadProduct } from '../../domain/useCases/loadProduct.ts'

export interface ProtocolMapperSearchParams {
  map: (params: ProtocolMapperSearchParams.Params) => ProtocolMapperSearchParams.Result
}

export namespace ProtocolMapperSearchParams {
  export type Result = {
    byText: string
    byCategory: string
    byBrand: string
    bySpecification: string
    byCollection: string
    byProductId: string
    bySkuId: string
    byReferenceId: string
    byEAN13: string
    bySellerId: string
  }

  export type Params = IUseCaseLoadProduct.Params
}