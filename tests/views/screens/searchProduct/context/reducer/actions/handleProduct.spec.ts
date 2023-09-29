import { beforeEach, describe, expect, it } from "vitest";
import {
		ReducerSearchProduct, ReducerSearchProductParamsDefaultValues
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/reducer.ts";
import {
		actionHandleProduct, ActionHandleProduct
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/actions/handleProduct.ts";
import { faker } from "@faker-js/faker";
import { Product } from "../../../../../../../src/services/domain/internal/models/product.ts";



const useSut = (states: ReducerSearchProduct.States, payload: ActionHandleProduct.Payload): ReducerSearchProduct.States => {
		const action: ActionHandleProduct.Action = {
				type: 'ACTION_HANDLE_PRODUCT',
				payload: {
						data: payload
				}
		}

		return actionHandleProduct({ states, action })
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


describe(`${actionHandleProduct.name} Tests Suite`, () => {

		let defaultStates: ReducerSearchProduct.States

		beforeEach(() => {
				defaultStates = ReducerSearchProductParamsDefaultValues
		})

		it('Should return a correctly states', () => {
				const defaultStateSku = fakerObj()

				const states: ReducerSearchProduct.States = {
						...defaultStates,
						product: {
								selectedSku: defaultStateSku,
								currentProduct: {
										...defaultStates?.product?.currentProduct,
										currentSku: defaultStateSku,
								}
						}
				} as any

				const expectedSku = fakerObj()

				const expectedProduct: Product.Current = {
						currentSku: expectedSku,
						...fakerObj(3)
				}

				const result = useSut(states, expectedProduct)

				const expectedState: ReducerSearchProduct.States = {
						...defaultStates,
						product: {
								selectedSku: expectedSku,
								currentProduct: expectedProduct
						}
				}

				expect(result).toStrictEqual(expectedState)
		})

})