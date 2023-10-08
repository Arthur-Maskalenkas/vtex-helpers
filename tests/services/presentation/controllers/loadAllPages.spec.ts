import { beforeEach, describe, expect, it, vi } from "vitest";
import { ControllerLoadAllPages } from "../../../../src/services/presentation/controllers/loadAllPages.ts";



describe(`${ControllerLoadAllPages.name} Tests Suite`, () => {
		let sut: ControllerLoadAllPages
		let usecaseLoadRuntimeSpy
		let usecaseLoadAllPagesSpy

		beforeEach(() => {
				usecaseLoadAllPagesSpy = {
						load: vi.fn().mockResolvedValue('usecaseLoadAllPages_result')
				}

				usecaseLoadRuntimeSpy = {
						load: vi.fn().mockResolvedValue('usecaseLoadRuntime_result')
				}

				sut = new ControllerLoadAllPages(usecaseLoadAllPagesSpy, usecaseLoadRuntimeSpy)
		})

		describe(`# ${ControllerLoadAllPages.prototype.handle.name}`, () => {

				it('Should return same value of usecaseLoadAllPages on success', async () => {
						const result = await sut.handle()

						expect(result).toEqual('usecaseLoadAllPages_result')
				})
		})

		describe(`# usecaseLoadRuntime`, () => {
				it(`Should return an array if usecaseLoadRuntime throws an error`, async () => {
						usecaseLoadRuntimeSpy.load.mockRejectedValueOnce(new Error('any_error'))

						const result = await sut.handle()

						expect(result).toEqual([])
				})

				it('Should call	usecaseLoadRuntime with correctly values', async () => {
						const result = await sut.handle()

						expect(usecaseLoadRuntimeSpy.load).toHaveBeenCalledTimes(1)
						expect(usecaseLoadRuntimeSpy.load).toHaveBeenCalledWith()
				})

		})

		describe(`# usecaseLoadAllPages`, () => {
				it(`Should return an array if usecaseLoadAllPages throws an error`, async () => {

						usecaseLoadAllPagesSpy.load.mockRejectedValueOnce(new Error('any_error'))

						const result = await sut.handle()

						expect(result).toEqual([])
				})

				it('Should not call	usecaseLoadAllPages if usecaseLoadRuntime return falsy value', async () => {
						usecaseLoadRuntimeSpy.load.mockResolvedValueOnce(false)

						const result = await sut.handle()

						expect(usecaseLoadAllPagesSpy.load).toHaveBeenCalledTimes(0)
						expect(result).toEqual([])
				})

				it('Should call usecaseLoadAllPages with correctly values', async () => {
						const result = await sut.handle()

						expect(usecaseLoadAllPagesSpy.load).toHaveBeenCalledTimes(1)
						expect(usecaseLoadAllPagesSpy.load).toHaveBeenCalledWith('usecaseLoadRuntime_result')
				})

		})

})