import { type IUseCaseLoadProductParams } from '../../domain/useCases/loadProduct.ts'

export type ProtocolMapperSearchParamsResult = {
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

export interface ProtocolMapperSearchParams {
  map: (params: IUseCaseLoadProductParams) => ProtocolMapperSearchParamsResult
}