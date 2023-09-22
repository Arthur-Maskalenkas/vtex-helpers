import {
		ActionHandleInputErrors, actionHandleInputErrors
} from "../../../../../../src/views/screens/commons/form/context/reducer/actions/handleInputErrors.ts";
import { BuilderReducerFormSearchParams } from "./builders.ts";
import { ReducerFormSearchParams } from "../../../../../../src/views/screens/commons/form/context/reducer/reducer.ts";
import { expect } from 'vitest'



const useSut = (states: ReducerFormSearchParams.States, payload: Map<string, string>): ReducerFormSearchParams.States => {
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
				const states = BuilderReducerFormSearchParams.a().build()

				const payload = new Map([ [ 'name', 'error' ] ])

				const result = useSut(states, payload)

				const expectedState = {
						...states,
						hasErrors: true,
						inputsWithErrors: payload
				}

				expect(result).toStrictEqual(expectedState)
		})

		it('Should nullify the urlGenerated', () => {

				const states = BuilderReducerFormSearchParams.a().build()

				const payload = new Map()

				const result = useSut(states, payload)

				expect(result.urlGenerated).toBeNull()

		})

})