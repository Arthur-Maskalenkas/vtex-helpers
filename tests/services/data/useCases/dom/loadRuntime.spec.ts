import { beforeEach, describe, expect, it, vi } from "vitest";
import { UseCaseLoadRuntime } from "../../../../../src/services/data/useCases/dom/loadRuntime.ts";



describe(`${UseCaseLoadRuntime.name} Tests Suite`, () => {
		let sut: UseCaseLoadRuntime
		let domLoadRuntimeSpy

		beforeEach(() => {
				domLoadRuntimeSpy = {
						getByDom: vi.fn()
				}
				sut = new UseCaseLoadRuntime(domLoadRuntimeSpy)
		})


		describe(`# ${UseCaseLoadRuntime.prototype.load.name}`, () => {
				it('Should return null when not exist runtime', async () => {
						domLoadRuntimeSpy.getByDom.mockResolvedValueOnce(null)
						const result = await sut.load()

						expect(result).toBeNull()
				})

				it(`Should call domLoadRuntimeSpy correctly`, async () => {
						await sut.load()

						expect(domLoadRuntimeSpy.getByDom).toHaveBeenCalledTimes(1)
						expect(domLoadRuntimeSpy.getByDom).toHaveBeenCalledWith()
				})

				it(`Should return domLoadRuntimeSpy on success result`, async () => {
						domLoadRuntimeSpy.getByDom.mockResolvedValue('any_value')
						const result = await sut.load()


						expect(result).toBe('any_value')
				})
		})

})