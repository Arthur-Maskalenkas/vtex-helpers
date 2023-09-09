import { type ExternalModelProduct } from '../../domain/models/external/product.ts'

export interface ProtocolLoadProducRepository {
  search: (params: any) => ProtocolLoadProducRepository.Result
}

export namespace ProtocolLoadProducRepository {
  export type Result = Promise<ExternalModelProduct[]>

}