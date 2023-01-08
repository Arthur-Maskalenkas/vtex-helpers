import { DataRefined } from '../../_interfaces'
import { product_context_root } from '../../_interfaces/product-context/custom_context'

export const basicFieldPaths = (attribute: keyof Pick<DataRefined,  'category' | 'brand' | 'product' | 'seller'>, input: product_context_root) => {
  return {
    brand: {
      name: input?.product?.brand,
      value: input?.product?.brandId?.toString()
    },
    category: {
      name: null,
      value: input?.product?.categoryId
    },
    product: {
      name: input?.product?.productName,
      value: input?.product?.productId
    },
    seller: {
      name: input?.product?.sku?.seller?.sellerName,
      value: input?.product?.sku?.seller?.sellerId
    }
  }[attribute]
}
