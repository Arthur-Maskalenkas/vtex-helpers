import { UsecaseLoadProducts } from "../../../../src/services/data/useCases/loadProducts.ts";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { faker } from "@faker-js/faker";



describe(`${UsecaseLoadProducts.name} Tests Suite`, () => {

		const repositoryProductSpy = {
				search: vi.fn()
		}
		const mapModelProductSpy = {
				map: vi.fn()
		}
		const mapParamsSpy = {
				map: vi.fn()
		}

		let sut: UsecaseLoadProducts

		beforeEach(() => {
				sut = new UsecaseLoadProducts(repositoryProductSpy as any, mapModelProductSpy as any, mapParamsSpy as any)
		})

		describe(`# mapParams`, () => {
				it('Should call repositoryProduct with correct params', async () => {
						const params = faker.string.sample()
						await sut.load(params)

						expect(mapParamsSpy.map).toHaveBeenCalledWith(params)
				})

				it('Should return null when mapParams returns null', async () => {
						mapParamsSpy.map.mockReturnValueOnce(null)
						const result = await sut.load(faker.string.sample())

						expect(result).toBeNull()
				})
		})
		describe(`# mapModelProduct`, () => {
		})
		describe(`# repositoryProduct`, () => {
				it("Should call with correctly params", async () => {
						const params = faker.string.sample()
						const expected = faker.string.sample()

						mapParamsSpy.map.mockReturnValueOnce(expected)

						await sut.load(params)


						expect(repositoryProductSpy.search).toHaveBeenCalledWith(expected)
				})

				it('Should return empty	array when repositoryProduct returns empty array', async () => {
						const params = faker.string.sample()
						repositoryProductSpy.search.mockReturnValueOnce([])

						const result = await sut.load(params)

						expect(result).toEqual([])
				})
		})

})