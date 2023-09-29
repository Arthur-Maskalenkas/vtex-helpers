import { type ExternalModelProduct } from '../../external/models/product.ts'



export class InternalModelProduct {
		public currentProduct: Product.Current
		public api: ExternalModelProduct

		constructor({ api, currentProduct }: { api: ExternalModelProduct, currentProduct: Product.Current }) {
				this.currentProduct = currentProduct
				this.api = api
		}
}

export namespace Product {
		// https://developers.vtex.com/docs/guides/how-search-parameters-work
		export type Sku = {
				name: string
				id: string
				url: string
				specifications: SkuSpecification[]
				currentPrice: number
				oldPrice: number
				isAvailable: boolean
		}

		export type SkuSpecification = {
				name: string
				values: Array<{
						value: string
						url: string
				}>
		}

		export type ProductSpecification = {
				name: string
				values: Array<{
						value: string
						url: string
				}>
		}

		export type Category = {
				name: string
				value: string
				url: string
		}

		export type Collection = {
				name: string
				value: string
				url: string
		}

		export type Current = {
				name: string
				id: string
				brand: string

				specifications: ProductSpecification[]
				collections: Collection[]
				category: Category
				categories: Category[]

				skus: Sku[]
				currentSku: Sku
		}

}