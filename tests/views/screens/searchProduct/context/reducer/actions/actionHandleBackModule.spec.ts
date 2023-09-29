import {
		ActionHandleBackModule, actionHandleBackModule
} from "../../../../../../../src/views/screens/searchProduct/context/reducer/actions/actionHandleBackModule.ts";
import { ReducerSearchProduct } from "../../../../../../../src/views/screens/searchProduct/context/reducer/reducer.ts";
import { describe, expect, it } from "vitest";



const useSut = (states: ReducerSearchProduct.States): ReducerSearchProduct.States => {
		const action: ActionHandleBackModule.Dispatch = {
				type: 'ACTION_HANDLE_BACK_MODULE'
		}

		return actionHandleBackModule({ states, action })
}

describe(`${actionHandleBackModule.name} Tests Suite`, () => {
		it('Should replace currentModule with search value when	currentModule is product', () => {
				const state: any = {
						currentModule: 'product'
				}

				const result = useSut(state)

				expect(result.currentModule).toBe('search')
		})

})