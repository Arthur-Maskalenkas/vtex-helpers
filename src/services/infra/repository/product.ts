import { type ProtocolMapperSearchParams } from '../../data/protocols/mapperSearchParams.ts'
import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../data/protocols/MapperExternalModelProductToProductModel.ts'
import { Current, type Product } from '../../domain/models/product.ts'
import Specification = Product.Specification

export class RepositoryProduct
implements ProtocolMapperSearchParams, ProtocolMapperExternalModelProductToProductModel {
  normalizeModelProduct (externalModelProduct: ProtocolMapperExternalModelProductToProductModel.Params): ProtocolMapperExternalModelProductToProductModel.Result {
    const modelNormalized: any = externalModelProduct.map((product) => {
      const listSkus = product.items.map((sku) => {
        const listPrice = sku.sellers[0].commertialOffer.ListPrice
        const price = sku.sellers[0].commertialOffer.Price

        const validations = [listPrice !== price, listPrice]
        const haveDiscount = validations.every(validation => validation)

        return {
          currentPrice: price,
          oldPrice: haveDiscount ? listPrice : null
        }
      })

      const listSpecifications = Object.entries(product.productClusters ?? {})
        .map(([key, value]) => {
          return {
            name: key,
            value,
            url: `/${value}?map=productClusterIds`
          }
        })
      const [currentSku, ...restSkus] = listSkus

      const listCategories: Product.Category[] = product.categories?.map((category, index) => {
        const formatString = (value: string) => value
          .replace(/^\//, '')
          .replace(/\/$/, '')
          .replace(/\s/g, '-').toLowerCase()

        const formatUrl = (value: string) => `/${formatString(value)}`

        return {
          name: formatString(category),
          id: formatString(product.categoriesIds[index]),
          url: formatUrl(category)
        }
      })

      const currentProduct: Product.Current = {
        currentSku,
        skus: restSkus,
        specifications: listSpecifications,
        categories: listCategories
      } as Partial<Product.Current> as Product.Current

      const result: ProtocolMapperExternalModelProductToProductModel.Result = {
        api: product,
        currentProduct
      } as any

      return result
    })

    return modelNormalized
  }

  map (params: ProtocolMapperSearchParams.Params): ProtocolMapperSearchParams.Result {
    if (!params) return null
    const listParams = params.split(',') ?? [params]

    const mapperListParams = (listToTransform: string[]) => {
      return listToTransform.reduce((acc: any, param) => {
        const [attr, key, value] = param.split('=')

        if (!attr && !key && !value) return acc

        if (acc[attr]) {
          acc[attr] = {
            ...acc[attr],
            [key]: value
          }
          return acc
        }

        acc[attr] = {
          [key]: value
        }

        return acc
      }, {})
    }

    if (!listParams) return null

    return mapperListParams(listParams)
  }
}