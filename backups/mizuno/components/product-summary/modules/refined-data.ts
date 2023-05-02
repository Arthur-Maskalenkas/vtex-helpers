import { VtexProductModel } from "../../../services/domain/models"

export type RefinedDataResponseGetSkuItem = {
  id: string
  color: string
  size: string
  name: string
}

export type RefinedDataResponseGetColor = string | undefined
export type RefinedDataResponseGetQuantityColors = number | undefined

export type RefinedDataResponseGetSku = Array<RefinedDataResponseGetSkuItem> | undefined

export class RefinedData {

  public getVariants = async (product?: VtexProductModel):Promise<VtexProductModel[]> => {
    const productReference = product?.productReference

    const baseRefID = productReference?.replace(/(_).*$/, "$1");
    const data = await fetch(`/api/catalog_system/pub/products/search?fq=alternateIds_RefId:${baseRefID}*`)
    const dataJson:VtexProductModel[] = await data.json()


    const availableProducts = dataJson?.filter((item: any) => {
      const hasFilter = item?.items?.some(
        (item: any) => item.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0
      )

      return !!hasFilter
    })

    if (availableProducts.length === 7) {
      console.log(`🚀 ~ RefinedData ~ getVariants= ~ availableProducts: 1`, {item:availableProducts,quantity:availableProducts?.map(item => item.items.map(item => item.sellers?.[0]?.commertialOffer?.AvailableQuantity))})
    }

    const dataJsonSorted: VtexProductModel[] =
    availableProducts
    ?.sort((a: any, b: any) => {
      if (a?.productReference === productReference) {
        return -1
      } else if (b?.productReference === productReference) {
        return 1
      } else {
        return 0
      }

    })

    const debugCTX = dataJsonSorted?.find(item => item.productId === '4672')
    console.log(`🚀 ~ RefinedData ~ getVariants= ~ debugCTX 1:`, debugCTX)

    return dataJsonSorted
  }

  public getQuantityColors(product:VtexProductModel):RefinedDataResponseGetQuantityColors {
    const data = product?.items?.length

    if (!data) {
      return
    }

    return data
  }

  public getColor(product:VtexProductModel):RefinedDataResponseGetColor {
    const data = product?.items?.[0]?.Cor?.[0]

    if (!data) {
      return
    }

    return data
  }

  public getSku(product:VtexProductModel):RefinedDataResponseGetSku {
    const data = product?.items
    ?.filter(item => item.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0)
    ?.map(item => ({
color: item?.Cor?.[0],
id: item?.itemId,
name: item?.name,
size: item?.Tamanho?.[0]
    } as RefinedDataResponseGetSkuItem))

    if (!data) {
      return
    }

    return data
  }
}
