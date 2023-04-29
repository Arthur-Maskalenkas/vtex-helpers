import { VTEXProduct } from "../../../shelf-smart-hint/instance/types-api-vtex";

export const mapVariants = (data: any)=> {
  return data?.map((variant: any) => {
    return {
      imageSrc: variant?.items?.[0]?.images?.[0]?.imageUrl,
      imageLink: variant?.link,
      title: variant?.productName
    }
  })
}

export const getRefIDBase = (string: any)=> {
  return string.replace(/(_).*$/, "$1");
}

export const getVariants = async (productReference?: string) => {
  const baseRefID = getRefIDBase(productReference)
  const data = await fetch(`/api/catalog_system/pub/products/search?fq=alternateIds_RefId:${baseRefID}*`)
  const dataJson = await data.json()

  const dataJsonSorted: VTEXProduct[] = dataJson?.sort((a: any, b: any) => {
    if (a?.productReference === productReference) {
      return -1
    } else if (b?.productReference === productReference) {
      return 1
    } else {
      return 0
    }

  })

  return dataJsonSorted
}
