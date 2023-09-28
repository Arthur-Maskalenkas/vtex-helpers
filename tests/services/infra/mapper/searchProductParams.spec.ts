import { beforeEach, describe, expect, it } from "vitest";
import { UsecaseLoadProducts } from "../../../../src/services/data/useCases/loadProducts.ts";
import { MapperSearchProductParams } from "../../../../src/services/infra/mapper/params/searchProductParams.ts";
import { faker } from "@faker-js/faker";



describe(`${UsecaseLoadProducts.name} Tests Suite`, () => {
		let sut: MapperSearchProductParams
		let id

		beforeEach(() => {
				id = faker.number.int(10).toString()

				sut = new MapperSearchProductParams()
		})


		describe(`# ${MapperSearchProductParams.prototype.map.name}`, () => {

				it('Should return null if	params is null', () => {
						const result = sut.map(null as any)

						expect(result).toBeNull()
				})

				it('Should return a product id param mapped', () => {
						const result = sut.map(`paramProductId=${id}`)

						const expected = `fq=productId:${id}`

						expect(result).toBe(expected)
				})

				it('Should return a product id param mapped', () => {
						const result = sut.map(`paramSkuId=${id}`)

						const expected = `fq=skuId:${id}`

						expect(result).toBe(expected)
				})


				it('Should return a product cluster id param mapped', () => {
						const result = sut.map(`productClusterIds=${id}`)

						const expected = `fq=productClusterIds:${id}`

						expect(result).toBe(expected)
				})

				it('Should combine	all params and map', () => {
						const idProduct = faker.number.int(10).toString()
						const idSku = faker.number.int(10).toString()
						const idCluster = faker.number.int(10).toString()

						const result = sut.map(`paramProductId=${idProduct},paramSkuId=${idSku},productClusterIds=${idCluster}`)

						const expected = `fq=productId:${idProduct}&fq=skuId:${idSku}&fq=productClusterIds:${idCluster}`

						expect(result).toBe(expected)
				})

				it('Should not repeteat params', () => {
						const result = sut.map(`paramProductId=${id},paramProductId=${id}`)

						const expected = `fq=productId:${id}`

						expect(result).toBe(expected)
				})
		})

})