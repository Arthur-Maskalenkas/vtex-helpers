import {
		ActionHandleInputErrors, actionHandleInputErrors
} from "../../../../../../src/views/screens/formSearchPage/context/reducer/actions/handleInputErrors.ts";
import { BuilderReducerFormSearchPage } from "./builders.ts";
import { ReducerFormSearchPage } from "../../../../../../src/views/screens/formSearchPage/context/reducer/reducer.ts";
import { describe, expect, it } from "vitest";



const useSut = (states: ReducerFormSearchPage.States, payload: Map<string, string>): ReducerFormSearchPage.States => {
		const action: ActionHandleInputErrors = {
				type: 'ACTION_HANDLE_INPUT_ERRORS',
				payload: {
						data: {
								inputs: payload
						}
				}
		}

		return actionHandleInputErrors({ states, action })
}

describe(actionHandleInputErrors.name, () => {
		it('Should return a correctly states', () => {
				const states = BuilderReducerFormSearchPage.a().build()

				const payload = new Map([ [ 'name', 'error' ] ])

				const result = useSut(states, payload)

				const expectedState = {
						...states,
						hasErrors: true,
						urlGenerated: null,
						inputsWithErrors: payload
				}

				expect(result).toStrictEqual(expectedState)
		})

		it('Should nullify the urlGenerated', () => {

				const states = BuilderReducerFormSearchPage.a().build()

				const payload = new Map()

				const result = useSut(states, payload)

				expect(result.urlGenerated).toBeNull()

		})

})