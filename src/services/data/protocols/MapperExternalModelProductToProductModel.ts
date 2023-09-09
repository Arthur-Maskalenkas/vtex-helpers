import { type ExternalModelProduct } from '../../domain/models/external/product.ts'
import { type ModelProduct } from '../../domain/models/product.ts'

export interface ProtocolMapperExternalModelProductToProductModel {
  map: (externalModelProduct: ProtocolMapperExternalModelProductToProductModel.Params) => ProtocolMapperExternalModelProductToProductModel.Result
}

export namespace ProtocolMapperExternalModelProductToProductModel {
  export type Params = ExternalModelProduct[]
  export type Result = ModelProduct[]
}