export function mapCartItemToPixel(item: CartItem): PixelCartItem {
  return {
    skuId: item.id,
    variant: item.skuName,
    price: item.sellingPrice,
    priceIsInt: true,
    name: getNameWithoutVariant(item),
    quantity: item.quantity,
    productId: item.productId,
    productRefId: item.productRefId,
    brand: item.additionalInfo ? item.additionalInfo.brandName : '',
    category: productCategory(item),
    detailUrl: item.detailUrl,
    imageUrl: item.imageUrls
      ? fixUrlProtocol(item.imageUrls.at3x)
      : item.imageUrl ?? '',
    referenceId: item.refId,
  }
}

export function mapBuyButtonItemToPixel(item: BuyButtonItem): PixelCartItem {
  // Change this `/Apparel & Accessories/Clothing/Tops/`
  // to this `Apparel & Accessories/Clothing/Tops`
  const category = item.category ? item.category.slice(1, -1) : ''

  return {
    skuId: item.id,
    variant: item.skuName,
    price: item.sellingPrice,
    priceIsInt: true,
    name: item.name,
    quantity: item.quantity,
    productId: item.productId,
    productRefId: item.productRefId,
    brand: item.brand,
    category,
    detailUrl: item.detailUrl,
    imageUrl: item.imageUrl,
    referenceId: item.refId,
  }
}

/**
 * URL comes like "//storecomponents.vteximg.com.br/arquivos/ids/155491"
 * this function guarantees it comes with protocol in it.
 */
function fixUrlProtocol(url: string) {
  if (!url || url.indexOf('http') === 0) {
    return url
  }

  return `https:${url}`
}

/**
 * Remove the variant from the end of the name.
 * Ex: from "Classic Shoes Pink" to "Classic Shoes"
 * Ps: Some products has the name of the variation the same as the item
 */
function getNameWithoutVariant(item: CartItem) {
  if (
    (item?.name && !item.name.includes(item.skuName)) ||
    item.name === item.skuName
  ) {
    return item.name
  }

  const leadingSpace = 1
  const variantLength = leadingSpace + item.skuName.length

  return item.name.slice(0, item.name.length - variantLength)
}

function productCategory(item: CartItem) {
  try {
    const categoryIds = item.productCategoryIds.split('/').filter(c => c.length)
    const category = categoryIds.map(id => item.productCategories[id]).join('/')

    return category
  } catch {
    return ''
  }
}

interface PixelCartItem {
  skuId: string
  variant: string
  price: number
  priceIsInt: boolean
  name: string
  quantity: number
  productId: string
  productRefId: string
  brand: string
  category: string
  detailUrl: string
  imageUrl: string
  referenceId: string
}

interface BuyButtonItem {
  id: string
  skuName: string
  sellingPrice: number
  name: string
  quantity: number
  productId: string
  productRefId: string
  brand: string
  category: string
  detailUrl: string
  imageUrl: string
  refId: string
}

interface CartItem {
  id: string
  skuName: string
  sellingPrice: number
  name: string
  quantity: number
  productId: string
  productRefId: string
  additionalInfo: {
    brandName: string
  }
  productCategoryIds: string
  productCategories: Record<string, string>
  detailUrl: string
  // Field from the usual orderForm API
  imageUrl?: string
  // Field from the order-manager orderForm API
  imageUrls?: {
    at1x: string
    at2x: string
    at3x: string
  }
  refId: string
}


















export interface OrderFormData {
  error: string,
  initialFetchComplete: boolean
  loading: boolean
  orderForm: OrderForm
}
export interface OrderForm {
  id: string
  items: Item[]
  value: number
  totalizers: Totalizer[]
  marketingData: MarketingData
  canEditData: boolean
  loggedIn: boolean
  paymentData: PaymentData
  messages: Messages
  shipping: Shipping
  userProfileId: any
  userType: string
  clientProfileData: any
  clientPreferencesData: ClientPreferencesData
  allowManualPrice: boolean
  __typename: string
}
export interface Item {
  additionalInfo: AdditionalInfo
  attachments: any[]
  attachmentOfferings: any[]
  bundleItems: any[]
  parentAssemblyBinding: any
  parentItemIndex: any
  sellingPriceWithAssemblies: any
  options: any
  availability: string
  detailUrl: string
  id: string
  imageUrls: ImageUrls
  listPrice: number
  manualPrice: any
  measurementUnit: string
  name: string
  offerings: any[]
  price: number
  priceTags: any[]
  productCategories: ProductCategories
  productCategoryIds: string
  productRefId: string
  productId: string
  quantity: number
  seller: string
  sellingPrice: number
  skuName: string
  skuSpecifications: SkuSpecification[]
  unitMultiplier: number
  uniqueId: string
  refId: string
  isGift: boolean
  priceDefinition: PriceDefinition
  __typename: string
}
export interface AdditionalInfo {
  brandName: string
  __typename: string
}
export interface ImageUrls {
  at1x: string
  at2x: string
  at3x: string
  __typename: string
}
export interface ProductCategories {
  "10": string
  "322951761": string
}
export interface SkuSpecification {
  fieldName: string
  fieldValues: string[]
  __typename: string
}
export interface PriceDefinition {
  calculatedSellingPrice: number
  total: number
  sellingPrices: SellingPrice[]
  __typename: string
}
export interface SellingPrice {
  quantity: number
  value: number
  __typename: string
}
export interface Totalizer {
  id: string
  name: string
  value: number
  __typename: string
}
export interface MarketingData {
  coupon: string
  utmCampaign: string
  utmMedium: string
  utmSource: string
  utmiCampaign: string
  utmiPart: string
  utmiPage: string
  __typename: string
}
export interface PaymentData {
  paymentSystems: PaymentSystem[]
  payments: any[]
  installmentOptions: InstallmentOption[]
  availableAccounts: any[]
  isValid: boolean
  __typename: string
}
export interface PaymentSystem {
  id: string
  name: string
  groupName: string
  validator: Validator
  stringId: string
  requiresDocument: boolean
  isCustom: boolean
  description: any
  requiresAuthentication: boolean
  dueDate: string
  __typename: string
}
export interface Validator {
  regex: any
  mask: any
  cardCodeRegex: any
  cardCodeMask: any
  weights: any
  useCvv: boolean
  useExpirationDate: boolean
  useCardHolderName: boolean
  useBillingAddress: boolean
  __typename: string
}
export interface InstallmentOption {
  paymentSystem: string
  installments: Installment[]
  __typename: string
}
export interface Installment {
  count: number
  hasInterestRate: boolean
  interestRate: number
  value: number
  total: number
  __typename: string
}
export interface Messages {
  couponMessages: any[]
  generalMessages: any[]
  __typename: string
}
export interface Shipping {
  countries: string[]
  availableAddresses: any[]
  selectedAddress: any
  deliveryOptions: any[]
  pickupOptions: any[]
  isValid: boolean
  __typename: string
}
export interface ClientPreferencesData {
  locale: string
  optInNewsletter: any
  __typename: string
}
