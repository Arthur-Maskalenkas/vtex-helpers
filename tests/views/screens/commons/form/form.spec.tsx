import { Form } from '../../../../../src/views/screens/commons/form/form.tsx'
import { describe, expect, it, vi } from "vitest";

import { BuilderForm, BuilderReactFormEvent } from './builders.tsx'
import * as utilsModule from '../../../../../src/views/screens/commons/form/utils.ts'
import { useFormContext } from "../../../../../src/views/screens/commons/form/context";
import {
		actionHandleInputErrors
} from "../../../../../src/views/screens/commons/form/context/reducer/actions/handleInputErrors.ts";
import * as contextModule from '../../../../../src/views/screens/commons/form/context/index.tsx'
import {
		actionHandleParamsResult
} from "../../../../../src/views/screens/commons/form/context/reducer/actions/handleParamsResult.ts";
import { faker } from "@faker-js/faker";



const { errorMessages, mapParams } = utilsModule


describe(`${Form.name} Tests Suits`, () => {
		describe(`#${mapParams.name}`, () => {
				it('should a return error on Map if input have "data-with-value" attribute but not have value', () => {
						const params: any = BuilderReactFormEvent.a()
								.appendInputWithAttributeDataWithValue('paramSpecification', 'specificationId')
								.build()

						const result = mapParams(params)

						expect(result)
								.toEqual(new Map([ [ 'paramSpecification', errorMessages.specification.requiredValue ] ]))
				})

				it('should map multiple inputs', () => {
						const params: any = BuilderReactFormEvent.a()
								.appendInput('paramCollection', 'collection')
								.appendInput('paramCategory', 'category')
								.appendInput('paramSpecification', 'specificationId=specificationValue')
								.build()
						const result = mapParams(params)

						expect(result)
								.toBe('paramCollection=collection,paramCategory=category,paramSpecification=specificationId=specificationValue')
				})

				it('should join params by character "=" if input have "data-with-value" attribute', () => {
						const params: any = BuilderReactFormEvent.a()
								.appendInput('paramSpecification', 'specificationId=specificationValue', 'data-with-value')
								.build()

						const result = mapParams(params)

						expect(result)
								.toBe('paramSpecification=specificationId=specificationValue')
				})
		})

		describe(`#${useFormContext.name}`, () => {

				it("Should not call	any action when map params returns null", () => {
						vi.spyOn(utilsModule, 'mapParams')
								.mockReturnValue(null)

						vi.spyOn(contextModule, 'useFormContext')
								.mockReturnValue({ dispatch: vi.fn() } as any)

						BuilderForm.a()
								.appendInput('paramSpecification', 'specificationId')
								.build()

						const contextSpy = useFormContext()

						expect(contextSpy.dispatch).not.toHaveBeenCalled()
				})

				it(`Should call ${actionHandleInputErrors.name} when map params returns a map with errors`, () => {
						const expectedMap = new Map([ [ 'paramSpecification', errorMessages.specification.requiredValue ] ])

						vi.spyOn(utilsModule, 'mapParams')
								.mockReturnValue(expectedMap)

						vi.spyOn(contextModule, 'useFormContext')
								.mockReturnValue({ dispatch: vi.fn() } as any)

						BuilderForm.a()
								.appendInput('paramSpecification', 'specificationId')
								.build()

						const contextSpy = useFormContext()

						expect(contextSpy.dispatch).toHaveBeenCalledWith({
								type: 'ACTION_HANDLE_INPUT_ERRORS',
								payload: { data: { inputs: expectedMap } }
						})


				})

				it(`Should call ${actionHandleParamsResult.name} when map params returns a string`, () => {
						const expectedString = faker.lorem.word()

						vi.spyOn(utilsModule, 'mapParams')
								.mockReturnValue(expectedString)

						vi.spyOn(contextModule, 'useFormContext')
								.mockReturnValue({ dispatch: vi.fn() } as any)

						BuilderForm.a()
								.appendInput('paramSpecification', 'specificationId')
								.build()

						const contextSpy = useFormContext()

						expect(contextSpy.dispatch).toHaveBeenCalledWith({
								type: 'ACTION_HANDLE_PARAMS_RESULT',
								payload: {
										data: { params: expectedString }
								}
						})
				})
		})
})