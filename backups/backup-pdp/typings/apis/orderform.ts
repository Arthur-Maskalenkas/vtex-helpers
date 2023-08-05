export interface Orderform {
	orderFormId: string
	salesChannel: string
	loggedIn: boolean
	isCheckedIn: boolean
	storeId: any
	checkedInPickupPointId: any
	allowManualPrice: boolean
	canEditData: boolean
	userProfileId: any
	userType: any
	ignoreProfileData: boolean
	value: number
	messages: any[]
	items: Item[]
	selectableGifts: any[]
	totalizers: Totalizer[]
	shippingData: ShippingData
	clientProfileData: any
	paymentData: PaymentData
	marketingData: MarketingData | null
	sellers: Seller[]
	clientPreferencesData: ClientPreferencesData
	commercialConditionData: any
	storePreferencesData: StorePreferencesData
	giftRegistryData: any
	openTextField: any
	invoiceData: any
	customData: any
	itemMetadata: ItemMetadata
	hooksData: any
	ratesAndBenefitsData: RatesAndBenefitsData
	subscriptionData: any
	merchantContextData: any
	itemsOrdination: any
}


export interface MarketingData {
	utmSource: any
	utmMedium: any
	utmCampaign: any
	utmipage: any
	utmiPart: any
	utmiCampaign: any
	coupon: any
	marketingTags: any[]
}


export interface Item {
	uniqueId: string
	id: string
	productId: string
	productRefId: string
	refId: string
	ean: string
	name: string
	skuName: string
	modalType: any
	parentItemIndex: any
	parentAssemblyBinding: any
	assemblies: any[]
	priceValidUntil: string
	tax: number
	price: number
	listPrice: number
	manualPrice: any
	manualPriceAppliedBy: any
	sellingPrice: number
	rewardValue: number
	isGift: boolean
	additionalInfo: AdditionalInfo
	preSaleDate: any
	productCategoryIds: string
	productCategories: ProductCategories
	quantity: number
	seller: string
	sellerChain: string[]
	imageUrl: string
	detailUrl: string
	components: any[]
	bundleItems: any[]
	attachments: any[]
	attachmentOfferings: any[]
	offerings: any[]
	priceTags: any[]
	availability: string
	measurementUnit: string
	unitMultiplier: number
	manufacturerCode: any
	priceDefinition: PriceDefinition
	taxCode: string
}


export interface AdditionalInfo {
	dimension: any
	brandName: string
	brandId: string
	offeringInfo: any
	offeringType: any
	offeringTypeId: any
}


export interface ProductCategories {
	"1": string
	"2": string
	"5": string
	"9": string
	"16": string
	"29": string
}


export interface PriceDefinition {
	calculatedSellingPrice: number
	total: number
	sellingPrices: SellingPrice[]
}


export interface SellingPrice {
	value: number
	quantity: number
}


export interface Totalizer {
	id: string
	name: string
	value: number
}


export interface ShippingData {
	address: any
	logisticsInfo: LogisticsInfo[]
	selectedAddresses: any[]
	availableAddresses: any[]
	pickupPoints: any[]
}


export interface LogisticsInfo {
	itemIndex: number
	selectedSla: any
	selectedDeliveryChannel: string
	addressId: any
	slas: any[]
	shipsTo: string[]
	itemId: string
	deliveryChannels: DeliveryChannel[]
}


export interface DeliveryChannel {
	id: string
}


export interface PaymentData {
	updateStatus: string
	installmentOptions: InstallmentOption[]
	paymentSystems: PaymentSystem[]
	payments: any[]
	giftCards: any[]
	giftCardMessages: any[]
	availableAccounts: any[]
	availableTokens: any[]
	availableAssociations: AvailableAssociations
}


export interface InstallmentOption {
	paymentSystem: string
	bin: any
	paymentName: any
	paymentGroupName: any
	value: number
	installments: Installment[]
}


export interface Installment {
	count: number
	hasInterestRate: boolean
	interestRate: number
	value: number
	total: number
	sellerMerchantInstallments: SellerMerchantInstallment[]
}


export interface SellerMerchantInstallment {
	id: string
	count: number
	hasInterestRate: boolean
	interestRate: number
	value: number
	total: number
}


export interface PaymentSystem {
	id: number
	name: string
	groupName: string
	validator: Validator
	stringId: string
	template: string
	requiresDocument: boolean
	displayDocument: boolean
	isCustom: boolean
	description: any
	requiresAuthentication: boolean
	dueDate: string
	availablePayments: any
}


export interface Validator {
	regex?: string
	mask?: string
	cardCodeRegex?: string
	cardCodeMask?: string
	weights?: number[]
	useCvv: boolean
	useExpirationDate: boolean
	useCardHolderName: boolean
	useBillingAddress: boolean
}


export interface AvailableAssociations {
}


export interface Seller {
	id: string
	name: string
	logo: string
}


export interface ClientPreferencesData {
	locale: string
	optinNewsLetter: any
}


export interface StorePreferencesData {
	countryCode: string
	saveUserData: boolean
	timeZone: string
	currencyCode: string
	currencyLocale: number
	currencySymbol: string
	currencyFormatInfo: CurrencyFormatInfo
}


export interface CurrencyFormatInfo {
	currencyDecimalDigits: number
	currencyDecimalSeparator: string
	currencyGroupSeparator: string
	currencyGroupSize: number
	startsWithCurrencySymbol: boolean
}


export interface ItemMetadata {
	items: Item2[]
}


export interface Item2 {
	id: string
	seller: string
	name: string
	skuName: string
	productId: string
	refId: string
	ean: string
	imageUrl: string
	detailUrl: string
	assemblyOptions: any[]
}


export interface RatesAndBenefitsData {
	rateAndBenefitsIdentifiers: any[]
	teaser: any[]
}