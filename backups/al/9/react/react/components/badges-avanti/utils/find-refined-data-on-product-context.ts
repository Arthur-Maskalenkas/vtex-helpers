import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import { RefinedDataOnProductContext } from '../_interfaces'

export const findRefinedDataOnProductContext = (productCtx: Partial<ProductContextState> | undefined): RefinedDataOnProductContext | null => {
  const {
    product
  } = productCtx || {}

  if (!product) {
    return null
  }


  const productData: RefinedDataOnProductContext = {
    brandId: Number(product?.brandId),
    categoryId: product?.categoryId,
    productId: product?.productId,
    listOfCollections: product?.clusterHighlights,
    listOfVariations: productCtx?.selectedItem?.variations ?? product?.items?.[0].variations,
    listOfProductFields: product?.specificationGroups?.find((item) => item.name === 'allSpecifications')?.specifications,
  }

  return productData
}
