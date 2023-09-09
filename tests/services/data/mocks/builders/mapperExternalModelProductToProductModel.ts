import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../../../../src/services/data/protocols/MapperExternalModelProductToProductModel.ts'
import { BuilderBase } from './base.ts'
import { generateModelProduct } from '../generators/models/prouct.ts'

export class BuilderProtocolMapperExternalModelProductToProductModel
  extends BuilderBase<ProtocolMapperExternalModelProductToProductModel, ProtocolMapperExternalModelProductToProductModel.Result> {
  constructor () {
    super(
      { map: () => [generateModelProduct()] },
      'map'
    )
  }
}