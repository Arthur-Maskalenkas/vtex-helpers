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
							itemId: string
							variations: string[]
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

							name: string
							ean: string
							referenceId: Array<{
									Key: string
									Value: string
							}>
							sellers: [ {
									commertialOffer: {
											Price: number
											ListPrice: number
											AvailableQuantity: number
											IsAvailable: boolean
									}
							} ] | []
					}>

}