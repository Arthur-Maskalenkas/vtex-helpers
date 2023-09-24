import { ReducerFormSearchPage } from "../../../../../../src/views/screens/formSearchPage/context/reducer/reducer.ts";
import { BuilderReducerFormSearchPage } from "./builders.ts";
import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import {
		actionHandleParamsResult, ActionHandleParamsResult
} from "../../../../../../src/views/screens/formSearchPage/context/reducer/actions/handleParamsResult.ts";



const useSut = (states: ReducerFormSearchPage.States, payload: string): ReducerFormSearchPage.States => {
		const action: ActionHandleParamsResult = {
				type: 'ACTION_HANDLE_PARAMS_RESULT',
				payload: {
						data: {
								params: payload
						}
				}

		}

		return actionHandleParamsResult({ states, action })
}


describe(actionHandleParamsResult.name, () => {
		it('Should return a correctly states', () => {
				const states = BuilderReducerFormSearchPage.a().build()
				const payload = faker.internet.domainName()
				const result = useSut(states, payload)
				const expectedState: ReducerFormSearchPage.States = {
						...states,
						urlGenerated: payload
				}

				expect(result).toStrictEqual(expectedState)
		})

		it('Should reset the hasErrors', () => {
				const states = BuilderReducerFormSearchPage.a().withError().build()
				const payload = faker.internet.domainName()

				const result = useSut(states, payload)

				expect(result.hasErrors).toBeFalsy()
		})
		it('Should reset the inputsWithErrors', () => {
				const states = BuilderReducerFormSearchPage.a().withInputsWithErrors().build()

				const payload = faker.internet.domainName()

				const result = useSut(states, payload)

				expect(result.inputsWithErrors.size).toBe(0)
		})

})