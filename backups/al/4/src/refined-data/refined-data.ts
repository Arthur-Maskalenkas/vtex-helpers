import { ProductContextState } from '../remap-schema/_interfaces/product-context/_product-context'
import { DataRefined, FieldDataRefined } from '../remap-schema/_interfaces'

export class RefinedData {
  constructor (
    private readonly productContext: Partial<ProductContextState>
  ) {}

  private pickBrandData (): FieldDataRefined | null {
    const data = {
      name: this.productContext?.product?.brand,
      value: this.productContext?.product?.brandId.toString()
    }

    if (!data.name && !data.value) {
      return null
    }

    return data
  }

  private pickCategoryData (): FieldDataRefined | null {
    const data = {
      name: null,
      value: this.productContext?.product?.categoryId
    }

    if (!data.name && !data.value) {
      return null
    }

    return data
  }

  private pickProductData (): FieldDataRefined | null {
    const data = {
      name: this?.productContext?.product?.productName,
      value: this?.productContext?.product?.productId
    }

    if (!data.name && !data.value) {
      return null
    }

    return data
  }

  private pickCollectionData (): FieldDataRefined[] | null {
    const data = this.productContext?.product?.clusterHighlights?.map((collection) => ({
      name: collection?.name,
      value: collection?.id
    }))

    if (!data || data.length === 0) {
      return null
    }

    return data
  }

  private pickSpecificationData (): FieldDataRefined[] | null {
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

  // sellerid

  // price in percentage

  // discount

  // ean
  refineAllData (): DataRefined {
    const product = this.pickProductData()
    const category = this.pickCategoryData()
    const brand = this.pickBrandData()

    const collections = this.pickCollectionData()
    const specification = this.pickSpecificationData()

    return {
      brand,
      category,
      product
    } as DataRefined
  }
}