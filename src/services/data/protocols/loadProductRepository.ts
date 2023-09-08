import { type ExternalModelProduct } from '../../domain/models/external/product.ts'

export interface ProtocolLoadProducRepository {
  search: (params: any) => Promise<ExternalModelProduct[]>
}