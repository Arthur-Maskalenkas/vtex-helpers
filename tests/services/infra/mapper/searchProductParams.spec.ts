import { beforeEach, describe } from "vitest";
import { UsecaseLoadProducts } from "../../../../src/services/data/useCases/loadProducts.ts";
import { MapperSearchProductParams } from "../../../../src/services/infra/mapper/params/searchProductParams.ts";



describe(`${UsecaseLoadProducts.name} Tests Suite`, () => {
		let sut: MapperSearchProductParams

		beforeEach(() => {
				sut = new MapperSearchProductParams()
		})


		describe(`# ${MapperSearchProductParams.prototype.map.name}`, () => {
		})

})