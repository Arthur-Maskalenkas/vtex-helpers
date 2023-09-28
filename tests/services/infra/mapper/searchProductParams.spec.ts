import { beforeEach, describe, expect, it } from "vitest";
import { UsecaseLoadProducts } from "../../../../src/services/data/useCases/loadProducts.ts";
import { MapperSearchProductParams } from "../../../../src/services/infra/mapper/params/searchProductParams.ts";
import { faker } from "@faker-js/faker";



describe(`${UsecaseLoadProducts.name} Tests Suite`, () => {
		let sut: MapperSearchProductParams
		let id

		beforeEach(() => {
				id = faker.string.uuid()

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
		})

})