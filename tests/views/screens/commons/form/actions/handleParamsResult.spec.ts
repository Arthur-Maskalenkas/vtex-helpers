import { ReducerFormSearchParams } from "../../../../../../src/views/screens/commons/form/context/reducer/reducer.ts";
import {
		actionHandleParamsResult, ActionHandleParamsResult
} from "../../../../../../src/views/screens/commons/form/context/reducer/actions/handleParamsResult.ts";
import { BuilderReducerFormSearchParams } from "./builders.ts";
import { faker } from "@faker-js/faker";
import { beforeEach } from "vitest";



const useSut = (states: ReducerFormSearchParams.States, payload: string): ReducerFormSearchParams.States => {
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
		beforeEach(() => {
				vi.clearAllMocks()
		})


		it('Should return a correctly states', () => {
				const states = BuilderReducerFormSearchParams.a().build()

				const payload = faker.internet.domainName()

				const result = useSut(states, payload)

				const expectedState: ReducerFormSearchParams.States = {
						...states,
						urlGenerated: payload
				}

				expect(result).toStrictEqual(expectedState)
		})

		it('Should reset the hasErrors', () => {
				const states = BuilderReducerFormSearchParams.a().withError().build()

				const payload = faker.internet.domainName()

				const result = useSut(states, payload)

				expect(result.hasErrors).toBeFalsy()
		})

		it.todo('Should nullify the hasErrors')

})