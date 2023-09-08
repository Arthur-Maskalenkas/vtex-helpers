import { type ExternalModelProduct } from '../../domain/models/external/product.ts'
import { type ModelProduct } from '../../domain/models/product.ts'

export interface ProtocolMapperExternalModelProductToProductModel {
  map: (externalModelProduct: ExternalModelProduct[]) => ModelProduct[]
}