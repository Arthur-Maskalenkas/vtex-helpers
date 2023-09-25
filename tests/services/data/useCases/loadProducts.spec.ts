import { UsecaseLoadProducts } from "../../../../src/services/data/useCases/loadProducts.ts";
import { beforeEach, describe, vi } from "vitest";



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

		})
		describe(`# mapModelProductSpy`, () => {
		})
		describe(`# mapParams`, () => {
		})

})