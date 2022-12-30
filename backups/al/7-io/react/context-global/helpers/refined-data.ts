import { ProductContextState } from "vtex.product-context/react/ProductTypes";
import { RefinedDataOnProductContext } from "../_interfaces";

export const FindRefinedDataOnProductContext = (dataOnProductContext: Partial<ProductContextState> | undefined): RefinedDataOnProductContext | null => {
  const {
    product,
    selectedItem
  } = dataOnProductContext || {}


  if (!dataOnProductContext || !product || !selectedItem) {
    return null
  }


  const productData: RefinedDataOnProductContext = {
    brandId: Number(product?.brandId),
    categoryId: product?.categoryId,
    productId: product?.productId,
    listOfCollections: product?.clusterHighlights,
    listOfVariations: selectedItem?.variations ?? product?.items?.[0].variations,
    listOfProductFields: product?.specificationGroups?.find((item) => item.name === 'allSpecifications')?.specifications
  }


  return productData
}
