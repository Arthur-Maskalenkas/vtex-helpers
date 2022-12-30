import { DataRefined, FieldDataRefined, FieldDiscountDataRefined } from '../_interfaces'
import { product_context_root } from '../_interfaces/product-context/custom_context'

export class RefinedData {
  constructor (
    private readonly productContext: Partial<product_context_root>
  ) {}

  private pickBrandData (): FieldDataRefined<string> | null {
    const data = {
      name: this.productContext?.product?.brand,
      value: this.productContext?.product?.brandId.toString()
    }

    if (!data.name && !data.value) {
      return null
    }

    return data
  }

  private pickCategoryData (): FieldDataRefined<string> | null {
    const data = {
      name: null,
      value: this.productContext?.product?.categoryId
    }

    if (!data.name && !data.value) {
      return null
    }

    return data
  }

  private pickProductData (): FieldDataRefined<string> | null {
    const data = {
      name: this?.productContext?.product?.productName,
      value: this?.productContext?.product?.productId
    }

    if (!data.name && !data.value) {
      return null
    }

    return data
  }

  private pickSellerData (): FieldDataRefined<string> | null {
    const data = {
      name: this.productContext?.product?.sku?.seller?.sellerName,
      value: this.productContext?.product?.sku?.seller?.sellerId
    }

    if (!data.name && !data.value) {
      return null
    }

    return data
  }

  private pickCollectionData (): Array<FieldDataRefined<string>> | null {
    const data = this.productContext?.product?.clusterHighlights?.map((collection) => ({
      name: collection?.name,
      value: collection?.id
    }))

    if (!data || data.length === 0) {
      return null
    }

    return data
  }

  private pickSpecificationData (): Array<FieldDataRefined<string[]>> | null {
    const data = this.productContext?.product?.specificationGroups
      ?.filter(specification => specification.name !== 'allSpecifications')
      ?.map(group => group?.specifications
        ?.map(spec => ({
          name: spec?.name,
          value: spec?.values,
          refGroup: group?.name
        })))
      ?.flat()

    if (!data || data.length === 0) {
      return null
    }

    return data
  }

  // falta esse
  private pickPriceData (): FieldDiscountDataRefined | null {
    const pricesAvaliables = this.productContext?.product?.priceRange

    const formatDiscount = (value: number | string): number => {
      const convert = Number(value)

      if (Number.isNaN(convert)) {
        return 0
      }

      const formatted = convert.toFixed(2)

      return parseFloat(formatted)
    }

    const sellingPrice = Number(pricesAvaliables?.sellingPrice.highPrice)
    const listPrice = Number(pricesAvaliables?.listPrice.highPrice)

    const data = {
      listPrice,
      sellingPrice,
      discountInValue: formatDiscount(listPrice - sellingPrice),
      discountInPercentage: formatDiscount(((listPrice - sellingPrice) / listPrice) * 100)
    } as FieldDiscountDataRefined

    if (!data.listPrice && !data.sellingPrice) {
      return null
    }

    return data
  }

  private pickVariationData (): Array<FieldDataRefined<string[]>> | null {
    const data = this.productContext?.selectedItem?.variations
      ?.map(variation => ({
        name: variation?.name,
        value: variation?.values
      }))

    if (!data || data.length === 0) {
      return null
    }

    return data
  }

  refineAllData (): DataRefined {
    const price = this.pickPriceData()
    const seller = this.pickSellerData()

    const product = this.pickProductData()
    const category = this.pickCategoryData()
    const brand = this.pickBrandData()

    const collection = this.pickCollectionData()
    const variation = this.pickVariationData()
    const specification = this.pickSpecificationData()

    if (!product && !category && !brand && !collection && !variation && !specification && !price && !seller) {
      return null
    }

    return {
      brand,
      category,
      product,
      seller,
      specification,
      price,
      variation,
      collection
    }
  }
}