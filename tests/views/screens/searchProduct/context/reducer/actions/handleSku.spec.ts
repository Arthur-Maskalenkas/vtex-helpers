import { beforeEach, describe, expect, it } from "vitest";
import {
		ReducerSearchProduct, ReducerSearchProductParamsDefaultValues
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/reducer.ts";
import {
		actionHandleSku, ActionHandleSku
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/actions/handleSku.ts";
import { faker } from "@faker-js/faker";



const useSut = (states: ReducerSearchProduct.States, payload: ActionHandleSku.Payload): ReducerSearchProduct.States => {
		const action: ActionHandleSku = {
				type: 'ACTION_HANDLE_SKU',
				payload: {
						data: payload
				}
		}

		return actionHandleSku({ states, action })
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


describe(`${actionHandleSku.name} Tests Suite`, () => {

		let defaultStates: ReducerSearchProduct.States

		beforeEach(() => {
				defaultStates = ReducerSearchProductParamsDefaultValues
		})

		it('Should return a correctly states', () => {
				const defaultStateSku = fakerObj()

				const states = {
						...defaultStates,
						product: {
								selectedSku: defaultStateSku,
								currentProduct: {
										...defaultStates?.product?.currentProduct,
										currentSku: defaultStateSku
								},
						},
				}

				const payload = fakerObj()
				const result = useSut(states, payload)

				const expectedState: ReducerSearchProduct.States = {
						...defaultStates,
						product: {
								selectedSku: payload,
								currentProduct: {
										...defaultStates?.product?.currentProduct,
										currentSku: payload
								}
						}
				}

				expect(result).toStrictEqual(expectedState)
		})

})