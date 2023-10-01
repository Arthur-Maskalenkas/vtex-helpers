import { fetchHelper } from '../../../../utils/test-utils.tsx'
import { RepositoryProduct } from '../../../../../src/services/infra/repository/product.ts'
import { BuilderProtocolMapModelProduct, makeExternalModelProduct } from './builders.ts'
import { beforeEach, describe, expect, it, SpyInstance, vi } from 'vitest'



describe(RepositoryProduct.name, () => {
		// before each, create a new instance of sut
		let sut: RepositoryProduct
		let fetchSpy: SpyInstance<any, any>

		beforeEach(() => {
				global.fetch = vi.fn()
				fetchSpy = global.fetch as any

				sut = new RepositoryProduct()
		})

		describe(RepositoryProduct.prototype.load.name, () => {
				it('should call fetch with correct url', async () => {
						const fetchSpy = fetchHelper()
						const paramId = '0'

						fetchSpy.mockResolvedValue(
								{ json: async () => Promise.resolve({ productId: paramId }) }
						)

						await sut.load(paramId)

						expect(fetch).toHaveBeenCalledWith(`/api/catalog_system/pub/products/search?productId:${paramId}`)
						expect(fetch).toHaveBeenCalledTimes(1)
				})

				it('should return null if api returns null', async () => {
						const fetchSpy = fetchHelper()

						fetchSpy.mockResolvedValue({ json: async () => Promise.resolve([]) })

						const result = await sut.load('0')

						expect(result).toBeNull()
				})

				it('should return only first result from api', async () => {
						const fetchSpy = fetchHelper()

						fetchSpy.mockResolvedValue(
								{ json: async () => Promise.resolve([ { productId: 0 }, { productId: 1 } ]) }
						)

						const result = await sut.load('0')

						expect(result).toStrictEqual({ productId: 0 })
				})
		})

		describe(RepositoryProduct.prototype.map.name, () => {
				it('should remap product price correctly when have discount', () => {
						const currentPrice = 129.99
						const oldPrice = 189.99

						const params = new BuilderProtocolMapModelProduct()
								.withPrice(currentPrice)
								.withListPrice(oldPrice)
								.build()

						const result = sut.map(params)[0].currentProduct.currentSku

						expect(result.currentPrice).toBe(currentPrice)
						expect(result.oldPrice).toBe(oldPrice)
				})

				it('should return oldPrice with null value when not have a  difference with currentPrice', () => {
						const currentPrice = 189.99

						const params = new BuilderProtocolMapModelProduct()
								.withPrice(currentPrice)
								.withListPrice(currentPrice)
								.build()

						const result = sut.map(params)[0].currentProduct.currentSku

						expect(result.oldPrice).toBeNull()
						expect(result.currentPrice).toBe(currentPrice)
				})

				it('should return oldPrice with null value when Listprice is undefined', () => {
						const currentPrice = 189.99

						const params = new BuilderProtocolMapModelProduct()
								.withPrice(currentPrice)
								.withListPrice(undefined as any)
								.build()

						const result = sut.map(params)[0].currentProduct.currentSku

						expect(result.oldPrice).toBeNull()
						expect(result.currentPrice).toBe(currentPrice)
				})

				it('should follow same rules on list of sku', () => {
						const currentPriceOtherSku = 200.00
						const oldPriceOtherSku = 150.00

						const params = new BuilderProtocolMapModelProduct()
								.withPrice(currentPriceOtherSku, 0)
								.withListPrice(oldPriceOtherSku, 0)
								.build()

						const result = sut.map(params)[0].currentProduct.skus[0]

						expect(result.currentPrice).toBe(currentPriceOtherSku)
						expect(result.oldPrice).toBe(oldPriceOtherSku)
				})

				it('Should remap correctly when have 1 product on params', () => {
						const params = [ makeExternalModelProduct() ]

						const result = sut.map(params)

						expect(result).toHaveLength(1)
				})

				it('Should remap correctly when have 2 or more	products on params', () => {
						const params = [ makeExternalModelProduct(), makeExternalModelProduct() ]

						const result = sut.map(params)

						expect(result).toHaveLength(2)
				})
		})

		describe(RepositoryProduct.prototype.search.name, () => {

				it('Should call fetch with correct url', async () => {
						await sut.search('any_params')

						expect(fetchSpy).toHaveBeenCalledWith('/api/any_params')
				})

				it('Should return array with length 0 if api returns null', () => {
						fetchSpy.mockResolvedValue({ json: async () => Promise.resolve(null) })

						const result = sut.search('any_params')

						expect(result).resolves.toHaveLength(0)
				})

				it('Should return all products returneds	from api', () => {
						fetchSpy.mockResolvedValue({ json: async () => Promise.resolve([ { id: 0 }, { id: 1 } ]) })

						const result = sut.search('any_params')

						expect(result).resolves.toHaveLength(2)
				})
		})
})