import { type ProtocolRepositoryLoadProduct } from '../../data/protocols/repositoryLoadProduct.ts'
import { type ProtocolMapModelProduct } from '../../data/protocols/mapModelProduct.ts'
import { type Product } from '../../domain/internal/models/product.ts'
import { ProtocolRepositoryLoadProducts } from "../../data/protocols/repositoryLoadProducts.ts";



export class RepositoryProduct
		implements ProtocolRepositoryLoadProduct, ProtocolMapModelProduct, ProtocolRepositoryLoadProducts {
		public async search(params: ProtocolRepositoryLoadProducts.Params): ProtocolRepositoryLoadProducts.Result {
				const result = await fetch(`/api/catalog_system/pub/products/search/${params}`)
				const data = await result?.json()

				if (!data?.length) return []

				return data[0]
		}


		map(params: ProtocolMapModelProduct.Params): ProtocolMapModelProduct.Result {
				let externalModelProduct = params as ProtocolMapModelProduct.ParamListModel

				const isArray = Array.isArray(params)

				if (!isArray) externalModelProduct = [ params ]

				const modelNormalized: any = externalModelProduct.map((product) => {
						const listSkus = product.items.map((sku) => {
								const listPrice = sku?.sellers?.[0]?.commertialOffer.ListPrice
								const price = sku?.sellers?.[0]?.commertialOffer.Price

								const validations = [ listPrice !== price, listPrice ]
								const haveDiscount = validations.every(validation => validation)

								const skuSpecifications: Product.SkuSpecification[] = []

								for (const variation of sku.variations ?? []) {
										const values = (sku as any)[variation] ?? []

										skuSpecifications.push({
												name: variation,
												values: values.map((value: string) => {
														return {
																value,
																url: this.formatUrl('sku-specification', value, variation)
														}
												})
										})
								}

								return {
										currentPrice: price,
										oldPrice: haveDiscount ? listPrice : null,
										specifications: skuSpecifications
								} as Partial<Product.Sku>
						})

						const listSpecifications = product?.allSpecifications?.map((name) => {
								const specificationsValues = []

								for (const value of (product as any)[name] ?? []) {
										specificationsValues.push({
												value,
												url: this.formatUrl('product-specification', value, name)
										})
								}

								return {
										name,
										values: specificationsValues
								}
						})

						const listCollections = Object.entries(product.productClusters ?? {})
								.map(([ key, value ]) => {
										return {
												name: key,
												value,
												url: this.formatUrl('collection-search', value, key)
										}
								}) ?? []

						const listCategories: Product.Category[] = product.categories?.map((category, index) => {
								const formatString = (value: string) => value
										.replace(/^\//, '')
										.replace(/\/$/, '')
										.replace(/\s/g, '-')
										.toLowerCase()

								return {
										name: formatString(category),
										value: formatString(product.categoriesIds[index]),
										url: this.formatUrl('category-search', category)

								}
						})

						const currentProduct: Product.Current = {
								currentSku: listSkus?.[0] ?? [],
								skus: listSkus,
								collections: listCollections,
								specifications: listSpecifications,
								categories: listCategories,
								category: listCategories?.[0]
						} as any

						const result: ProtocolMapModelProduct.Result = {
								api: product,
								currentProduct
						} as any

						return result
				})

				if (!isArray) return modelNormalized[0]

				return modelNormalized
		}

		async load(id: ProtocolRepositoryLoadProduct.Params): ProtocolRepositoryLoadProduct.Result {
				const result = await fetch(`/api/catalog_system/pub/products/search?productId:${id}`)
				const data = await result?.json()

				if (!data?.length) return null

				return data[0]
		}

		private formatUrl(
				typeUrl: 'sku-specification' | 'product-specification' | 'brand-search' | 'category-search' | 'collection-search',
				value: string,
				id = '') {
				const valueFormatted = value.replace(/^\//, '').replace(/\/$/, '').toLowerCase()

				const urlFormats = new Map([
						[ 'sku-specification', `/${valueFormatted}?map=specificationFilter_${id}` ],
						[ 'product-specification', `/${valueFormatted}?map=specificationFilter_${id}` ],
						[ 'brand-search', `/${valueFormatted}map=b` ],
						[ 'category-search', `/${valueFormatted}?map=c` ],
						[ 'collection-search', `/${valueFormatted}?map=productClusterIds` ]

				])

				return urlFormats.get(typeUrl) ?? `/${valueFormatted}`
		}
}