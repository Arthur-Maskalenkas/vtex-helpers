import { type ProtocolMapperSearchParams } from '../../data/protocols/mapperSearchParams.ts'
import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../data/protocols/MapperExternalModelProductToProductModel.ts'

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

      const [currentSku, ...restSkus] = listSkus

      return {
        api: product,
        currentProduct: {
          currentSku,
          skus: restSkus

        }
      }
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