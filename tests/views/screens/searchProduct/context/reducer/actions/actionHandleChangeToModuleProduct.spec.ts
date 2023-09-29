import {
		ActionHandleChangeToModuleProduct, actionHandleChangeToModuleProduct
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/actions/actionHandleChangeToModuleProduct.ts";
import {
		ReducerSearchProduct, ReducerSearchProductParamsDefaultValues
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/reducer.ts";
import { faker } from "@faker-js/faker";
import { beforeEach, describe, expect, it } from "vitest";



const fakerObj = (quantityAttrs = 2): any => {
		const obj = new Map<string, string>()

		for (let i = 0; obj.size < quantityAttrs; i++) {
				let key = faker.word.words(1)
				let value = faker.random.word()

				obj.set(key, value)
		}

		return Object.fromEntries(obj)
}


const useSut = (states: ReducerSearchProduct.States, payload: ActionHandleChangeToModuleProduct.Payload = fakerObj()): ReducerSearchProduct.States => {
		const action: ActionHandleChangeToModuleProduct.Dispatch = {
				type: 'ACTION_HANDLE_CHANGE_TO_MODULE_PRODUCT',
				payload: {
						data: payload
				}
		}

		return actionHandleChangeToModuleProduct({ states, action })
}

describe(`${actionHandleChangeToModuleProduct.name} Tests Suite`, () => {

		let defaultStates: ReducerSearchProduct.States

		beforeEach(() => {
				defaultStates = ReducerSearchProductParamsDefaultValues
		})

		it('Should replace currentModule with module product', () => {
				const result = useSut(defaultStates)

				expect(result.currentModule).toBe('product')
		})
})