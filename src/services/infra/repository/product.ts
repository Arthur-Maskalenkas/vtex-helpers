import { type ProtocolMapperSearchParams } from '../../data/protocols/mapperSearchParams.ts'
import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../data/protocols/MapperExternalModelProductToProductModel.ts'
import { type Product } from '../../domain/models/product.ts'

export class RepositoryProduct
implements ProtocolMapperSearchParams, ProtocolMapperExternalModelProductToProductModel {
  private formatUrl (
    typeUrl: 'sku-specification' | 'product-specification' | 'brand-search' | 'category-search' | 'collection-search',
    value: string,
    id = '') {
    const valueFormatted = value.replace(/^\//, '').replace(/\/$/, '').toLowerCase()

    const urlFormats = new Map([
      ['sku-specification', `/${valueFormatted}?map=specificationFilter_${id}`],
      ['product-specification', `/${valueFormatted}?map=specificationFilter_${id}`],
      ['brand-search', `/${valueFormatted}map=b`],
      ['category-search', `/${valueFormatted}?map=c`],
      ['collection-search', `/${valueFormatted}?map=productClusterIds`]

    ])

    return urlFormats.get(typeUrl) ?? `/${valueFormatted}`
  }

  normalizeModelProduct (externalModelProduct: ProtocolMapperExternalModelProductToProductModel.Params): ProtocolMapperExternalModelProductToProductModel.Result {
    const modelNormalized: any = externalModelProduct.map((product) => {
      const listSkus = product.items.map((sku) => {
        const listPrice = sku.sellers[0].commertialOffer.ListPrice
        const price = sku.sellers[0].commertialOffer.Price

        const validations = [listPrice !== price, listPrice]
        const haveDiscount = validations.every(validation => validation)

        const skuSpecifications: Product.SkuSpecification[] = []

        // for in product.skuSpecifications
        for (const wrapper of product?.skuSpecifications ?? []) {
          if (!wrapper.field.isActive) continue
          const specificationValues = []

          for (const value of wrapper.values ?? []) {
            const specification = {
              value: value.name,
              url: this.formatUrl('sku-specification', value.name, wrapper.field.name)
            }

            specificationValues.push(specification)
          }

          skuSpecifications.push({
            name: wrapper.field.name,
            values: specificationValues
          })
        }

        return {
          currentPrice: price,
          oldPrice: haveDiscount ? listPrice : null,
          specifications: skuSpecifications
        } as Partial<Product.Sku> as Product.Sku
      })

      const listSpecifications = Object.entries(product.productClusters ?? {})
        .map(([key, value]) => {
          return {
            name: key,
            value,
            url: this.formatUrl('product-specification', value, key)
          }
        })

      const listCollections = Object.entries(product.productClusters ?? {})
        .map(([key, value]) => {
          return {
            name: key,
            value,
            url: this.formatUrl('collection-search', value, key)
          }
        }) ?? []

      const listCategories: Product.Category[] = product.categories?.map((category, index) => {
        const formatString = (value: string) => value
          .replace(/^\//, '')
          .replace(/\/$/, '')
          .replace(/\s/g, '-')
          .toLowerCase()

        return {
          name: formatString(category),
          value: formatString(product.categoriesIds[index]),
          url: this.formatUrl('category-search', category)

        }
      })

      const currentProduct: Product.Current = {
        currentSku: listSkus?.[0] ?? [],
        skus: listSkus,
        collections: listCollections,
        specifications: listSpecifications,
        categories: listCategories,
        category: listCategories?.[0]
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