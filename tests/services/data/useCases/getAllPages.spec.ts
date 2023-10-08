import { beforeEach, describe, expect, it, vi } from "vitest";
import { UseCaseGetAllPages } from "../../../../src/services/data/useCases/getAllPages.ts";
import * as ModuleMapperInternalModelPage from "../../../../src/services/data/mapper/models/internal/page.ts";



describe(`${UseCaseGetAllPages.name} Tests Suite`, () => {
		let sut
		let mapExternalModelRuntimePagesSpy
		beforeEach(() => {
				mapExternalModelRuntimePagesSpy = vi.spyOn(ModuleMapperInternalModelPage.MapperInternalModelPage, 'mapExternalModelRuntimePages')
						.mockReturnValue([])

				sut = new UseCaseGetAllPages()
		})


		it('Should return a empty array when load returns undefined', async () => {
				console.log('')
				mapExternalModelRuntimePagesSpy.mockReturnValue(undefined)

				const result = await sut.map({})


				expect(result).toEqual([])
		})

		it('Should call	MapperInternalModelPageSpy correctly', async () => {
				const param = {
						pages: 'any_param'
				}
				await sut.map(param)

				expect(mapExternalModelRuntimePagesSpy).toHaveBeenCalledTimes(1)
				expect(mapExternalModelRuntimePagesSpy).toHaveBeenCalledWith('any_param')
		})

		it('Should return a result from method load', async () => {
				const expected = [ 'any_param_1', 'any_param_2' ]
				mapExternalModelRuntimePagesSpy.mockResolvedValue(expected)

				const result = await sut.map({})

				expect(result).toEqual(expected)
		})

})