import { RepositoryProduct } from '../../../../src/services/infra/repository/product.ts'
import { expect, it, describe, beforeEach } from 'vitest'
import {
  BuilderParamsProtocolMapperSearchParams
} from '../mocks/builders/repositories/product/ProtocolMapperSearchParams.ts'
import {
  BuilderParamsProtocolMapperExternalModelProductToProductModel
} from '../mocks/builders/repositories/product/ProtocolMapperExternalModelProductToProductModel.ts'
import { type Product } from '../../../../src/services/domain/models/product.ts'

const makeSut = () => {
  const sut = new RepositoryProduct()
  return {
    sut
  }
}

describe(RepositoryProduct.name, () => {
  // before each, create a new instance of sut
  let sut: RepositoryProduct

  beforeEach(() => {
    const newSut = makeSut()

    vi.resetAllMocks()

    sut = newSut.sut
  })

  describe(RepositoryProduct.prototype.map.name, () => {
    it('should return a object with string param received', () => {
      const params = new BuilderParamsProtocolMapperSearchParams()
        .appendParam()
        .build()

      const result = sut.map(params)
      const expected = {
        'attr-0': {
          'key-0': 'value-0'
        }
      }

      console.log('aqui', result)

      expect(result).toStrictEqual(expected)
    })

    it('should append key and value in same parent if exist', () => {
      const params = new BuilderParamsProtocolMapperSearchParams()
        .appendParam()
        .appendParam(0)
        .build()

      const { sut } = makeSut()

      const result = sut.map(params)

      const expected = {
        'attr-0': {
          'key-0': 'value-0',
          'key-1': 'value-1'
        }
      }
      expect(result).toStrictEqual(expected)
    })

    it('should not append in object if key or value is not provided ou are invalid', () => {
      const params = new BuilderParamsProtocolMapperSearchParams()
        .appendParam()
        .appendInvalidParam()
        .build()

      const { sut } = makeSut()

      const result = sut.map(params)

      const expected = {
        'attr-0': {
          'key-0': 'value-0'
        }
      }

      expect(result).toStrictEqual(expected)
    })
  })

  describe(RepositoryProduct.prototype.normalizeModelProduct.name, () => {
    describe('product prices', () => {
      it('should remap product price correctly when have discount', () => {
        const currentPrice = 129.99
        const oldPrice = 189.99

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPrice)
          .withListPrice(oldPrice)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku

        expect(result.currentPrice).toBe(currentPrice)
        expect(result.oldPrice).toBe(oldPrice)
      })

      it('should return oldPrice with null value when not have a  difference with currentPrice', () => {
        const currentPrice = 189.99

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPrice)
          .withListPrice(currentPrice)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku

        expect(result.oldPrice).toBeNull()
        expect(result.currentPrice).toBe(currentPrice)
      })

      it('should return oldPrice with null value when Listprice is undefined', () => {
        const currentPrice = 189.99

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPrice)
          .withListPrice(undefined as any)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku

        expect(result.oldPrice).toBeNull()
        expect(result.currentPrice).toBe(currentPrice)
      })

      it('should follow same rules on list of sku', () => {
        const currentPriceOtherSku = 200.00
        const oldPriceOtherSku = 150.00

        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withPrice(currentPriceOtherSku, 0)
          .withListPrice(oldPriceOtherSku, 0)
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.skus[0]

        expect(result.currentPrice).toBe(currentPriceOtherSku)
        expect(result.oldPrice).toBe(oldPriceOtherSku)
      })
    })

    describe('product specifications', () => {
      it('should map a specification', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendProductSpecification()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.specifications

        const expected: Product.ProductSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              }
            ]
          }
        ]

        expect(result).toStrictEqual(expected)
      })

      it('should map a list specifications', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendProductSpecification()
          .appendProductSpecification()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.specifications

        const expected: Product.ProductSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              }
            ]
          },

          {
            name: 'item-1',
            values: [
              {
                url: '/value-1?map=specificationFilter_item-1',
                value: 'value-1'
              }
            ]
          }
        ]

        expect(result).toStrictEqual(expected)
      })

      it('should save specifications with same name in same parent', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendProductSpecification()
          .appendProductSpecificationChildren(0)
          .appendProductSpecification()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.specifications

        const expected: Product.ProductSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              },
              {
                url: '/value-1?map=specificationFilter_item-0',
                value: 'value-1'
              }
            ]
          },

          {
            name: 'item-1',
            values: [
              {
                url: '/value-1?map=specificationFilter_item-1',
                value: 'value-1'
              }
            ]
          }
        ]

        expect(result).toStrictEqual(expected)
      })
    })

    describe('product collections', () => {
      it('should return a list of collections', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendCollection()
          .appendCollection()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.collections

        const expected = [
          {
            name: 'item-0',
            value: 'value-0',
            url: '/value-0?map=productClusterIds'
          },
          {
            name: 'item-1',
            value: 'value-1',
            url: '/value-1?map=productClusterIds'

          }
        ]

        expect(result).toStrictEqual(expected)
      })

      it('should return a empty list when not have collection on list', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withEmptyCollections()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.collections

        const expected = []

        expect(result).toStrictEqual(expected)
      })

      it('should return a empty list when collection list is undefined', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .withUndefinedCollections()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.collections

        const expected = []

        expect(result).toStrictEqual(expected)
      })
    })

    describe('product categories', () => {
      it('should return a first category on Category property', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendCategorie('/infantil/', '/10/')
          .appendCategorie('/infantil/brinquedos/', '/10/11/')
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.category

        const expected = {
          name: 'infantil',
          value: '10',
          url: '/infantil?map=c'
        }

        expect(result).toStrictEqual(expected)
      })

      it('should return a list of categories', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendCategorie('/infantil/', '/10/')
          .appendCategorie('/infantil/brinquedos/', '/10/11/')
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.categories

        const expected = [
          {
            name: 'infantil',
            value: '10',
            url: '/infantil?map=c'
          },

          {
            name: 'infantil/brinquedos',
            value: '10/11',
            url: '/infantil/brinquedos?map=c'
          }
        ]

        expect(result).toStrictEqual(expected)
      })

      it('should return a list with all parents and patch', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendCategorie('/infantil/', '/10/')
          .appendCategorie('/infantil/brinquedos/', '/10/11/')

          .appendCategorie('/camisetas/', '/20/')
          .appendCategorie('/camisetas/verão/', '/20/21/')
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct.categories

        const expected = [
          {
            name: 'infantil',
            value: '10',
            url: '/infantil?map=c'
          },

          {
            name: 'infantil/brinquedos',
            value: '10/11',
            url: '/infantil/brinquedos?map=c'
          },

          {
            name: 'camisetas',
            value: '20',
            url: '/camisetas?map=c'
          },

          {
            name: 'camisetas/verão',
            value: '20/21',
            url: '/camisetas/verão?map=c'
          }
        ]

        expect(result).toStrictEqual(expected)
      })
    })

    describe('sku specifications', () => {
      it('should return a empty list when not have specifications on list', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .build()

        const result = sut.normalizeModelProduct(params)[0].currentProduct

        expect(result.currentSku.specifications).toHaveLength(0)
        expect(result.skus[0].specifications).toHaveLength(0)
      })

      it('should map correctly specification on list of skus', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendSkuSpecification()
          .build()

        const expected: Product.SkuSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              }
            ]
          }
        ]

        const result = sut.normalizeModelProduct(params)[0].currentProduct

        expect(result.skus[0].specifications).toStrictEqual(expected)
      })

      it('should map one or more specifications, in differents fields', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendSkuSpecification()
          .appendSkuSpecification()
          .build()

        const expected: Product.SkuSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              }
            ]
          },

          {
            name: 'item-1',
            values: [
              {

                url: '/value-1?map=specificationFilter_item-1',
                value: 'value-1'
              }
            ]
          }
        ]

        const result = sut.normalizeModelProduct(params)[0].currentProduct

        expect(result.skus[0].specifications).toStrictEqual(expected)
      })

      it('should remap all specifications sibilings ', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendSkuSpecification()
          .appendSkuSpecificationChildren(0)
          .appendSkuSpecification()
          .build()

        const expected: Product.SkuSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              },

              {
                url: '/value-1?map=specificationFilter_item-0',
                value: 'value-1'
              }
            ]

          },

          {
            name: 'item-1',
            values: [
              {

                url: '/value-1?map=specificationFilter_item-1',
                value: 'value-1'
              }
            ]
          }
        ]

        const result = sut.normalizeModelProduct(params)[0].currentProduct

        expect(result.skus[0].specifications).toStrictEqual(expected)
      })

      it('should map correctly specification on currentSku', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendSkuSpecification()
          .appendSkuSpecification()
          .build()

        const expected: Product.SkuSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              }
            ]
          },
          {
            name: 'item-1',
            values: [
              {
                url: '/value-1?map=specificationFilter_item-1',
                value: 'value-1'
              }
            ]
          }
        ]

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku.specifications

        expect(result).toStrictEqual(expected)
      })

      it('should not return specification if isActive is false', () => {
        const params = new BuilderParamsProtocolMapperExternalModelProductToProductModel()
          .appendSkuSpecification()
          .appendDisabledSkuSpecification()
          .appendSkuSpecification()
          .build()

        const expected: Product.SkuSpecification[] = [
          {
            name: 'item-0',
            values: [
              {
                url: '/value-0?map=specificationFilter_item-0',
                value: 'value-0'
              }
            ]
          },
          {
            name: 'item-2',
            values: [
              {
                url: '/value-2?map=specificationFilter_item-2',
                value: 'value-2'
              }
            ]
          }
        ]

        const result = sut.normalizeModelProduct(params)[0].currentProduct.currentSku.specifications

        expect(result).toStrictEqual(expected)
      })
    })
  })
})