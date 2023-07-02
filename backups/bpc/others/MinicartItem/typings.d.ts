export interface IOrderForm {
  orderForm: OrderForm;
  initialFetchComplete: boolean;
  loading: boolean;
}

export interface OrderForm {
  id: string;
  items: Item[];
  value: number;
  totalizers: Totalizer[];
  marketingData: MarketingData;
  canEditData: boolean;
  loggedIn: boolean;
  paymentData: PaymentData;
  messages: Messages;
  shipping: Shipping;
  userProfileId: any;
  userType: string;
  clientProfileData: any;
  clientPreferencesData: ClientPreferencesData;
  allowManualPrice: boolean;
  customData: any;
  __typename: string;
}

export interface Item {
  additionalInfo: AdditionalInfo;
  attachments: any[];
  attachmentOfferings: any[];
  bundleItems: any[];
  parentAssemblyBinding: any;
  parentItemIndex: any;
  sellingPriceWithAssemblies: any;
  options: any;
  availability: string;
  detailUrl: string;
  id: string;
  imageUrls: ImageUrls;
  listPrice: number;
  manualPrice: any;
  measurementUnit: string;
  modalType: any;
  name: string;
  offerings: any[];
  price: number;
  priceTags: any[];
  productCategories: ProductCategories;
  productCategoryIds: string;
  productRefId: string;
  productId: string;
  quantity: number;
  seller: string;
  sellingPrice: number;
  skuName: string;
  skuSpecifications: SkuSpecification[];
  unitMultiplier: number;
  uniqueId: string;
  refId: string;
  isGift: boolean;
  priceDefinition: PriceDefinition;
  __typename: string;
}

export interface AdditionalInfo {
  brandName: string;
  __typename: string;
}

export interface ImageUrls {
  at1x: string;
  at2x: string;
  at3x: string;
  __typename: string;
}

export interface ProductCategories {
  '2': string;
  '11': string;
  '40': string;
}

export interface SkuSpecification {
  fieldName: string;
  fieldValues: string[];
  __typename: string;
}

export interface PriceDefinition {
  calculatedSellingPrice: number;
  total: number;
  sellingPrices: SellingPrice[];
  __typename: string;
}

export interface SellingPrice {
  quantity: number;
  value: number;
  __typename: string;
}

export interface Totalizer {
  id: string;
  name: string;
  value: number;
  __typename: string;
}

export interface MarketingData {
  coupon: string;
  utmCampaign: string;
  utmMedium: string;
  utmSource: string;
  utmiCampaign: string;
  utmiPart: string;
  utmiPage: string;
  __typename: string;
}

export interface PaymentData {
  paymentSystems: PaymentSystem[];
  payments: any[];
  installmentOptions: InstallmentOption[];
  availableAccounts: any[];
  isValid: boolean;
  __typename: string;
}

export interface PaymentSystem {
  id: string;
  name: string;
  groupName: string;
  validator: Validator;
  stringId: string;
  requiresDocument: boolean;
  isCustom: boolean;
  description: any;
  requiresAuthentication: boolean;
  dueDate: string;
  __typename: string;
}

export interface Validator {
  regex?: string;
  mask?: string;
  cardCodeRegex?: string;
  cardCodeMask?: string;
  weights?: number[];
  useCvv: boolean;
  useExpirationDate: boolean;
  useCardHolderName: boolean;
  useBillingAddress: boolean;
  __typename: string;
}

export interface InstallmentOption {
  paymentSystem: string;
  installments: Installment[];
  __typename: string;
}

export interface Installment {
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
  __typename: string;
}

export interface Messages {
  couponMessages: any[];
  generalMessages: any[];
  __typename: string;
}

export interface Shipping {
  countries: string[];
  availableAddresses: any[];
  selectedAddress: any;
  deliveryOptions: any[];
  pickupOptions: any[];
  isValid: boolean;
  __typename: string;
}

export interface ClientPreferencesData {
  locale: string;
  optInNewsletter: any;
  __typename: string;
}

export interface IGetProductId {
  productID: string;
}

export interface IGetProductData {
  product: any;
}
