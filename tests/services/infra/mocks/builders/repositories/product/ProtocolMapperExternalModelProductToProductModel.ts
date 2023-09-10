import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../../../../../../src/services/data/protocols/MapperExternalModelProductToProductModel.ts'
import { generateExternalModelProduct } from '../../../../../data/mocks/generators/models/external/product.ts'

export class BuilderParamsProtocolMapperExternalModelProductToProductModel {
  public builderResult: ProtocolMapperExternalModelProductToProductModel.Params = []
  private readonly methodsCalledSpy: any[] = []
  constructor () {
    this.builderResult.push(generateExternalModelProduct())
  }

  withListPrice (listPrice: number, indexSku = 0) {
    this.builderResult[0].items[indexSku].sellers[0].commertialOffer.ListPrice = listPrice

    return this
  }

  withPrice (price: number, indexSku = 0) {
    this.builderResult[0].items[indexSku].sellers = [
      {
        commertialOffer: {
          ...this.builderResult[0].items[indexSku]?.sellers?.[0].commertialOffer,
          Price: price
        }
      }
    ]

    return this
  }

  withProductSpecification (name: string, value: string) {
    this.builderResult[0] = {
      ...this.builderResult[0],
      [name]: [value],
      allSpecifications: [...this.builderResult[0].allSpecifications, name]
    }

    return this
  }

  withSkuSpecification (name: string, value: string) {
    const targetPath = this.builderResult[0].items.length - 1 ?? 0

    const targetValue = this.builderResult[0].items[targetPath]

    targetValue?.variations?.push(name)

    Reflect.defineProperty(targetValue, name, {
      value: [value]
    })

    return this
  }

  withProductSpecificationWithTwoChildrens (name: string, value1: string, value2: string) {
    this.builderResult[0].allSpecifications.push(name)
    this.builderResult[0][name] = [value1, value2]

    return this
  }

  withSkuSpecificationWithTwoChildrens (name: string, value1: string, value2: string) {
    const targetPath = this.builderResult[0].items.length - 1 ?? 0

    const targetValue = this.builderResult[0].items[targetPath]

    targetValue?.variations?.push(name)

    Reflect.defineProperty(targetValue, name, {
      value: [value1, value2]
    })

    return this
  }

  withCategorie (value: string, id: string) {
    this.builderResult[0].categories = [...this.builderResult[0].categories, value]
    this.builderResult[0].categoriesIds = [...this.builderResult[0].categoriesIds, id]

    return this
  }

  withCollection (id: string, value: string) {
    this.builderResult[0].productClusters = {
      ...this.builderResult[0].productClusters,
      [id]: value
    }
    return this
  }

  withEmptyCollections () {
    this.builderResult[0].productClusters = {}

    return this
  }

  withUndefinedCollections () {
    this.builderResult[0].productClusters = undefined as any

    return this
  }

  public build () {
    return this.builderResult
  }
}