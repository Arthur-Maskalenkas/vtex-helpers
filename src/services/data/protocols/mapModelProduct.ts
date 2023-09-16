import { type InternalModelProduct } from '../../domain/internal/models/product.ts'
import { type ExternalModelProduct } from '../../domain/external/models/product.ts'

export interface ProtocolMapModelProduct {
  map: (params: ProtocolMapModelProduct.Params) => ProtocolMapModelProduct.Result
}

export namespace ProtocolMapModelProduct {
  export type Result = InternalModelProduct

  export type Params = ExternalModelProduct
}