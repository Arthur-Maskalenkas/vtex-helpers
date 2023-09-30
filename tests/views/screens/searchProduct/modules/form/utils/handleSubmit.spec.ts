import { beforeEach, describe, expect, it, SpyInstance, vi } from "vitest";
import * as MapParamsModule from "../../../../../../../src/views/screens/searchProduct/modules/form/utils/mapParams.ts";
import * as ApplicationContextModule from "../../../../../../../src/views/application/context";
import { faker } from "@faker-js/faker";
import { ControllerLoadProducts } from "../../../../../../../src/services/presentation/controllers/loadProducts.ts";
import { handleSubmit } from "../../../../../../../src/views/screens/searchProduct/modules/form/utils/handleSubmit.ts";



describe(`${handleSubmit.name} Tests Suite`, () => {
		let dispatchSpy: any
		let mapParamsSpy: SpyInstance<any, any>
		let controllerSpy: any
		let anyEventParam: any = 'eventParam'

		beforeEach(() => {
				mapParamsSpy = vi.spyOn(MapParamsModule, 'mapParams').mockReturnValue('mapParams')

				controllerSpy = {
						handle: vi.fn()
				}

				dispatchSpy = vi
						.spyOn(ApplicationContextModule, 'useApplicationReducerContext')
						.mockReturnValue({
								dispatch: vi.fn(),
								...ApplicationContextModule.initialState
						})
		})


		it(`Should not continue	if map params returns falsy`, async () => {
				mapParamsSpy.mockReturnValueOnce(null)
				const result = await handleSubmit(anyEventParam, dispatchSpy, controllerSpy)

				expect(result).toBeNull()
		})

		it('Should call mapParams with correctly params', async () => {
				handleSubmit(anyEventParam, dispatchSpy, controllerSpy)

				expect(mapParamsSpy).toHaveBeenCalledWith(anyEventParam)
		})

		it(`Should call ACTION_HANDLE_INPUT_ERRORS and return null when map params returns a map with errors`, async () => {
				const errors = new Map()
				errors.set('any_key', 'any_value')

				mapParamsSpy.mockReturnValueOnce(errors)

				const result = await handleSubmit(anyEventParam, dispatchSpy, controllerSpy)

				expect(dispatchSpy).toHaveBeenCalledWith({
						type: 'ACTION_HANDLE_INPUT_ERRORS',
						payload: { data: errors }
				})

				expect(result).toBeNull()

		});

		it(`Should call ${ControllerLoadProducts.name} with correctly params`, async () => {
				await handleSubmit(anyEventParam, dispatchSpy, controllerSpy)

				expect(controllerSpy.handle).toHaveBeenCalledWith('mapParams')
		});

		it(`Should not continue if ${ControllerLoadProducts.name} returns falsy`, async () => {
				controllerSpy.handle.mockReturnValueOnce(null)

				const result = await handleSubmit(anyEventParam, dispatchSpy, controllerSpy)

				expect(result).toBeNull()
		});


		it(`Should call ACTION_HANDLE_PARAMS_RESULT with correctly params`, async () => {
				const idProduct = faker.datatype.uuid()
				controllerSpy.handle.mockResolvedValue([ { currentProduct: { idProduct } } ])

				const expectedCall = [ { idProduct } ]

				await handleSubmit(anyEventParam, dispatchSpy, controllerSpy)

				expect(dispatchSpy).toHaveBeenCalledWith({
						type: 'ACTION_HANDLE_PARAMS_RESULT',
						payload: { data: expectedCall }
				})
		});

})