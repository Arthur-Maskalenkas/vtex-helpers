// await fetch(`/api/catalog_system/pub/products/search?fq=alternateIds_RefId:1365147*`).then(r => r.json())

export type ApiRestVtexSearch = Product[]


export interface Product {
	productId: string
	productName: string
	brand: string
	brandId: number
	KM?: [ string ]
	brandImageUrl: any
	linkText: string
	productReference: string
	productReferenceCode: string
	categoryId: string
	productTitle: string
	metaTagDescription: string
	releaseDate: string
	clusterHighlights: ClusterHighlights
	productClusters: ProductClusters
	searchableClusters: SearchableClusters
	categories: string[]
	categoriesIds: string[]
	link: string
	Composição: string[]
	Características: string[]
	allSpecifications: string[]
	allSpecificationsGroups: string[]
	description: string
	items: Item[]
	skuSpecifications: SkuSpecification[]
	Especificações?: string[]
	meli_title?: string[]
	Marketplace?: string[]
}


export interface ClusterHighlights {
	"303"?: string
	"605"?: string
	"567"?: string
}


export interface ProductClusters {
	"139": string
	"173": string
	"192": string
	"303"?: string
	"760": string
	"196"?: string
	"313"?: string
	"439"?: string
	"530"?: string
	"604"?: string
	"605"?: string
	"607"?: string
	"628"?: string
	"648"?: string
	"651"?: string
	"653"?: string
	"655"?: string
	"670"?: string
	"738"?: string
	"529"?: string
	"549"?: string
	"550"?: string
	"556"?: string
	"566"?: string
	"567"?: string
	"569"?: string
	"577"?: string
	"595"?: string
}


export interface SearchableClusters {
	"139": string
	"173": string
	"192": string
	"303"?: string
	"760": string
	"196"?: string
	"313"?: string
	"439"?: string
	"604"?: string
	"605"?: string
	"607"?: string
	"648"?: string
	"670"?: string
	"738"?: string
	"529"?: string
	"549"?: string
	"550"?: string
	"556"?: string
	"566"?: string
	"567"?: string
	"577"?: string
}


export interface Item {
	itemId: string
	name: string
	nameComplete: string
	complementName: string
	ean: string
	referenceId: ReferenceId[]
	measurementUnit: string
	unitMultiplier: number
	modalType: any
	isKit: boolean
	images: Image[]
	Cor: string[]
	Tamanho: string[]
	"Tamanhos e Medidas": string[]
	variations: string[]
	sellers: Seller[]
	Videos: any[]
	estimatedDateArrival: any
}


export interface ReferenceId {
	Key: string
	Value: string
}


export interface Image {
	imageId: string
	imageLabel: string
	imageTag: string
	imageUrl: string
	imageText: string
	imageLastModified: string
}


export interface Seller {
	sellerId: string
	sellerName: string
	addToCartLink: string
	sellerDefault: boolean
	commertialOffer: CommertialOffer
}


export interface CommertialOffer {
	DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion
	Installments: Installment[]
	DiscountHighLight: any[]
	GiftSkuIds: any[]
	Teasers: any[]
	PromotionTeasers: any[]
	BuyTogether: any[]
	ItemMetadataAttachment: any[]
	Price: number
	ListPrice: number
	PriceWithoutDiscount: number
	RewardValue: number
	PriceValidUntil: string
	AvailableQuantity: number
	IsAvailable: boolean
	Tax: number
	DeliverySlaSamples: DeliverySlaSample[]
	GetInfoErrorMessage?: string
	CacheVersionUsedToCallCheckout: string
	PaymentOptions: PaymentOptions
}


export interface DeliverySlaSamplesPerRegion {
	"0"?: N0
}


export interface N0 {
	DeliverySlaPerTypes: any[]
	Region: any
}


export interface Installment {
	Value: number
	InterestRate: number
	TotalValuePlusInterestRate: number
	NumberOfInstallments: number
	PaymentSystemName: string
	PaymentSystemGroupName: string
	Name: string
}


export interface DeliverySlaSample {
	DeliverySlaPerTypes: any[]
	Region: any
}


export interface PaymentOptions {
	installmentOptions: InstallmentOption[]
	paymentSystems: PaymentSystem[]
	payments: any[]
	giftCards: any[]
	giftCardMessages: any[]
	availableAccounts: any[]
	availableTokens: any[]
}


export interface InstallmentOption {
	paymentSystem: string
	bin: any
	paymentName: string
	paymentGroupName: string
	value: number
	installments: Installment2[]
}


export interface Installment2 {
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
	validator: any
	stringId: string
	template: string
	requiresDocument: boolean
	isCustom: boolean
	description: any
	requiresAuthentication: boolean
	dueDate: string
	availablePayments: any
}


export interface SkuSpecification {
	field: Field
	values: Value[]
}


export interface Field {
	id: number
	name: string
	isActive: boolean
	position: number
	type: string
}


export interface Value {
	id: string
	name: string
	position: number
}