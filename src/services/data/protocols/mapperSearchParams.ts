export interface ProtocolMapperSearchParams {
  mapSearchParams: (params: ProtocolMapperSearchParams.Params) => ProtocolMapperSearchParams.Result
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
  } | null

  export type Params = string
}