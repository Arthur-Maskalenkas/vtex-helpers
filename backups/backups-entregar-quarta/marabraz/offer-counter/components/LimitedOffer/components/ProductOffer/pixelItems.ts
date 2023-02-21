export interface CartItem {
  detailUrl: string
  id: string
  ean: string
  imageUrl: string
  index?: number
  listPrice: number
  measurementUnit: string
  name: string
  price: number
  productId: string
  quantity: number
  seller: string
  sellerName: string
  sellingPrice: number
  productRefId: string
  brand: string
  variant: string
  category: string
  skuName: string
  skuSpecifications: SKUSpecification[]
  uniqueId: string
  sellingPriceWithAssemblies: number
  options: any
  assemblyOptions: any
  referenceId: Array<{
    Key: string
    Value: string
  }> | null
}

interface SKUSpecification {
  fieldName: string
  fieldValues: string[]
}

export const mapSkuItemForPixelEvent = (skuItem: CartItem) => {
  // Changes this `/Apparel & Accessories/Clothing/Tops/`
  // to this `Apparel & Accessories/Clothing/Tops`
  const category = skuItem.category ? skuItem.category.slice(1, -1) : ""

  return {
    skuId: skuItem.id,
    ean: skuItem.ean,
    variant: skuItem.variant,
    price: skuItem.price,
    sellingPrice: skuItem.sellingPrice,
    priceIsInt: true,
    name: skuItem.name,
    quantity: skuItem.quantity,
    productId: skuItem.productId,
    productRefId: skuItem.productRefId,
    brand: skuItem.brand,
    category,
    detailUrl: skuItem.detailUrl,
    imageUrl: skuItem.imageUrl,
    referenceId: skuItem?.referenceId?.[0]?.Value,
    seller: skuItem.seller,
    sellerName: skuItem.sellerName,
  }
}
