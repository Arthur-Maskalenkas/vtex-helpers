import { type ProtocolMapperSearchParams } from '../../data/protocols/mapperSearchParams.ts'
import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../data/protocols/MapperExternalModelProductToProductModel.ts'

export class RepositoryProduct
implements ProtocolMapperSearchParams, ProtocolMapperExternalModelProductToProductModel {
  normalizeModelProduct (externalModelProduct: ProtocolMapperExternalModelProductToProductModel.Params): ProtocolMapperExternalModelProductToProductModel.Result {
    const modelNormalized: any = externalModelProduct.map((product) => {
      const currentSku = product.items[0]
      const commertialOffer = currentSku.sellers[0].commertialOffer

      let haveDiscount = true

      if (commertialOffer.ListPrice === commertialOffer.Price) {
        haveDiscount = false
      }

      if (!commertialOffer.ListPrice) {
        haveDiscount = false
      }

      return {
        api: product,
        currentProduct: {
          currentSku: {
            currentPrice: commertialOffer.Price,
            oldPrice: haveDiscount ? commertialOffer.ListPrice : null
          }
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