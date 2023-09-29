import {
		ActionHandleParamsResult, actionHandleParamsResult
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/actions/handleParamsResult.ts";
import {
		ReducerSearchProduct, ReducerSearchProductParamsDefaultValues
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/reducer.ts";
import { faker } from "@faker-js/faker";
import { beforeEach, describe, expect, it } from "vitest";



const useSut = (states: ReducerSearchProduct.States, payload: ActionHandleParamsResult.Payload = []): ReducerSearchProduct.States => {
		const action: ActionHandleParamsResult.Dispatch = {
				type: 'ACTION_HANDLE_PARAMS_RESULT',
				payload: {
						data: payload
				}
		}

		return actionHandleParamsResult({ states, action })
}

const fakerObj = (quantityAttrs = 2): any => {
		const obj = new Map<string, string>()

		for (let i = 0; obj.size < quantityAttrs; i++) {
				let key = faker.word.words(1)
				let value = faker.random.word()

				obj.set(key, value)
		}

		return Object.fromEntries(obj)
}


describe(`${actionHandleParamsResult.name} Tests Suite`, () => {

		let defaultStates: ReducerSearchProduct.States

		beforeEach(() => {
				defaultStates = ReducerSearchProductParamsDefaultValues
		})

		it('Should update a form products and replace currentModule', () => {
				const payload: ActionHandleParamsResult.Payload = [
						fakerObj(3),
						fakerObj(3),
				]

				const result = useSut(defaultStates, payload)

				expect(result.currentModule).toBe('search')
				expect(result.form.products).toEqual(payload)
		})

		it('Should replace existent products in states with new products', () => {
				const state: ReducerSearchProduct.States = {
						...defaultStates,
						form: {
								...defaultStates.form,
								products: [
										fakerObj(3),
										fakerObj(3),
								]
						}
				}

				const data = [ fakerObj(), fakerObj() ]

				const payload: ActionHandleParamsResult.Payload = data

				const result = useSut(state, payload)

				const [ expectedProduct1, expectedProduct2 ] = data

				expect(result.form.products).toEqual([ expectedProduct1, expectedProduct2 ])
		})

		it('Should clear inputs with errors', () => {
				const state: ReducerSearchProduct.States = {
						...defaultStates,
						form: {
								...defaultStates.form,
								hasErrors: true,
								inputsWithErrors: new Map([ [ faker.random.word(), faker.random.word() ] ])
						}
				}

				const result = useSut(state)

				expect(result.form.hasErrors).toBe(false)
				expect(result.form.inputsWithErrors.size).toBe(0)
		})

		it('Should clear current product', () => {
				const state: ReducerSearchProduct.States = {
						...defaultStates,
						product: fakerObj()
				}

				const result = useSut(state)

				expect(result.product).toBeNull()
		})
})