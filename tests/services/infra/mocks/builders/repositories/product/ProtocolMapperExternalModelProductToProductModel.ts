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
    this.builderResult[0].items[indexSku].sellers[0].commertialOffer.Price = price

    return this
  }

  appendSpecification () {
    if (!this.methodsCalledSpy.includes('withSpecifications')) {
      this.builderResult[0].productClusters = {}
      this.methodsCalledSpy.push('withSpecifications')
    }

    const index = Object.keys(this.builderResult[0].productClusters)?.length ?? 0

    this.builderResult[0].productClusters[`item-${index}`] = `value-${index}`

    return this
  }

  appendColletion () {
    if (!this.methodsCalledSpy.includes('withCollection')) {
      this.builderResult[0].productClusters = {}
      this.methodsCalledSpy.push('withCollection')
    }

    const index = Object.keys(this.builderResult[0].productClusters)?.length ?? 0

    this.builderResult[0].productClusters[`item-${index}`] = `value-${index}`

    return this
  }

  appendSkuSpecification () {
    const index = this.builderResult[0].skuSpecifications?.length ?? 0

    this.builderResult[0].skuSpecifications.push({
      field: {
        name: `item-${index}`,
        isActive: true
      },
      values: [
        {
          name: `value-${index}`
        }
      ]
    })

    return this
  }

  appendSkuSpecificationChildren (index) {
    const target = this.builderResult[0].skuSpecifications[index].values
    const targetLength = target?.length ?? 0

    target.push({
      name: `value-${targetLength}`
    })

    return this
  }

  appendDisabledSkuSpecification () {
    const index = this.builderResult[0].skuSpecifications?.length ?? 0

    this.builderResult[0].skuSpecifications.push({
      field: {
        name: `item-${index}`,
        isActive: false
      },
      values: [
        {
          name: `value-${index}`
        }
      ]
    })

    return this
  }

  appendCategorie (value: string, id: string) {
    if (!this.methodsCalledSpy.includes('appendCategorie')) {
      this.builderResult[0].categories = []
      this.builderResult[0].categoriesIds = []
      this.methodsCalledSpy.push('appendCategorie')
    }

    this.builderResult[0].categories.push(value)
    this.builderResult[0].categoriesIds.push(id)

    return this
  }

  appendCollection () {
    if (!this.methodsCalledSpy.includes('appendCollection')) {
      this.builderResult[0].productClusters = {}
      this.methodsCalledSpy.push('appendCollection')
    }

    const index = Object.keys(this.builderResult[0].productClusters)?.length ?? 0

    this.builderResult[0].productClusters[`item-${index}`] = `value-${index}`

    return this
  }

  appendBrand (value: string) {
    this.builderResult[0].brand = value

    return this
  }

  withEmptySpecifications () {
    this.builderResult[0].productClusters = {}

    return this
  }

  withUndefinedSpecifications () {
    this.builderResult[0].productClusters = undefined as any

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