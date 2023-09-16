import { type ExternalModelProduct } from '../../domain/external/models/product.ts'

export interface ProtocolRepositoryLoadProduct {
  load: (id: ProtocolRepositoryLoadProduct.Params) => ProtocolRepositoryLoadProduct.Result
}

export namespace ProtocolRepositoryLoadProduct {
  export type Result = Promise<ExternalModelProduct | null>

  export type Params = string
}