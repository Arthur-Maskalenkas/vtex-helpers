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

		describe(`# repositoryProductSpy`, () => {
				it('Should call repositoryProduct with correct params', () => {
						const params = faker.string.sample()
						sut.load(params)

						expect(mapParamsSpy.map).toHaveBeenCalledWith(params)
				})
		})
		describe(`# mapModelProductSpy`, () => {
		})
		describe(`# mapParams`, () => {
		})

})