import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../../../../../../src/services/data/protocols/MapperExternalModelProductToProductModel.ts'
import { generateExternalModelProduct } from '../../../../../data/mocks/generators/models/external/product.ts'

export class BuilderParamsProtocolMapperExternalModelProductToProductModel {
  public builderResult: ProtocolMapperExternalModelProductToProductModel.Params = []

  constructor () {
    this.builderResult.push(generateExternalModelProduct())
  }

  withListPrice (listPrice: number, indexSku = 0) {
    this.builderResult[0].items[indexSku].sellers[0].commertialOffer.ListPrice = listPrice

    return this
  }

  withPrice (price: number, indexSku = 0) {
    this.builderResult[0].items[indexSku].sellers[0].commertialOffer.Price = price

    return this
  }

  public build () {
    return this.builderResult
  }
}