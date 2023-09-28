import { beforeEach, describe, expect, it } from "vitest";
import { UsecaseLoadProducts } from "../../../../src/services/data/useCases/loadProducts.ts";
import { MapperSearchProductParams } from "../../../../src/services/infra/mapper/params/searchProductParams.ts";



describe(`${UsecaseLoadProducts.name} Tests Suite`, () => {
		let sut: MapperSearchProductParams

		beforeEach(() => {
				sut = new MapperSearchProductParams()
		})


		describe(`# ${MapperSearchProductParams.prototype.map.name}`, () => {

				it('Should return null if	params is null', () => {
						const result = sut.map(null as any)

						expect(result).toBeNull()
				})
		})

})