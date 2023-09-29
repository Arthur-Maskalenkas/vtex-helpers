import { beforeEach, describe, expect, it } from "vitest";
import {
		ReducerSearchProduct, ReducerSearchProductParamsDefaultValues
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/reducer.ts";
import {
		ActionHandleInputErrors
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/actions/handleInputErrors.ts";
import actionHandleInputErrors = ActionHandleInputErrors.actionHandleInputErrors;



const useSut = (states: ReducerSearchProduct.States, payload: ActionHandleInputErrors.Payload): ReducerSearchProduct.States => {
		const action: ActionHandleInputErrors.Dispatch = {
				type: 'ACTION_HANDLE_INPUT_ERRORS',
				payload: {
						data: payload
				}
		}

		return actionHandleInputErrors({ states, action })
}


describe(`${actionHandleInputErrors.name} Tests Suite`, () => {

		let states: ReducerSearchProduct.States

		beforeEach(() => {
				states = ReducerSearchProductParamsDefaultValues
		})

		it('Should return a correctly states', () => {
				states = {
						form: {
								hasErrors: false,
								products: [ {}, {} ],
								inputsWithErrors: new Map()
						},
						product: {
								selectedSku: { name: 'name' },
								currentProduct: { name: 'name' },
						},
						currentModule: 'search'
				} as any

				const payload = new Map([ [ 'name', 'error' ] ])
				const result = useSut(states, payload)

				const expectedState: ReducerSearchProduct.States = {
						form: {
								hasErrors: true,
								inputsWithErrors: payload,
								products: []
						},
						product: {
								selectedSku: null,
								currentProduct: null
						},
						currentModule: 'search',
				}

				expect(result).toStrictEqual(expectedState)
		})

})