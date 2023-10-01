export interface ExternalModelProduct {
		productTitle: string
		productId: string
		brand: string
		productReferenceCode: string
		productClusters: Record<string, string> | null
		categories: string[]
		categoriesIds: string[]
		link: string
		allSpecifications: string[]
		skuSpecifications: Array<{
				field: {
						name: string
						isActive: boolean
				}
				values: Array<{
						name: string
				}>
		}>

		items: Array<
				{

						// também possui as variações
						// "Cor": [
						//   "Preto"
						// ],
						// "Tamanho": [
						//   "34"
						// ],
						// "variations": [
						//   "Cor",
						//   "Tamanho"
						// ],
						addToCartLink: string
						itemId: string
						variations: string[]
						images: Array<{
								imageUrl: string
						}>
						name: string
						ean: string
						referenceId: Array<{
								Key: string
								Value: string
						}>
						sellers: Array<{
								commertialOffer: {
										Price: number
										ListPrice: number
										IsAvailable: boolean
										Teasers: Array<any>
										PromotionTeasers: Array<any>
										GiftSkuIds: Array<any>
										DiscountHighLight: Array<any>
										isAvailable: boolean
										AvailableQuantity: number
								}
						}>
				}>

}