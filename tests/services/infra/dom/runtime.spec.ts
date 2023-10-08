import { beforeEach, describe, expect, it } from "vitest";
import { DomRuntime } from "../../../../src/services/infra/dom/runtime.ts";



describe(`${DomRuntime.name} Tests Suite`, () => {
		let sut: DomRuntime

		beforeEach(() => {
				sut = new DomRuntime({
						__RUNTIME__: 'value_runtime'
				})
		})


		describe(`# ${DomRuntime.prototype.getByDom.name}`, () => {
				it('Should return a runtime object on window', async () => {
						const result = await sut.getByDom()

						expect(result).toBe('value_runtime')
				})

				it('Should return null if __RUNTIME__ is not defined on window', async () => {
						sut = new DomRuntime({})

						const result = await sut.getByDom()

						expect(result).toBeNull()
				})
		})

})