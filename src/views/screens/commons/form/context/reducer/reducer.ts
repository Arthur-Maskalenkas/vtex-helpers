import { actionHandleInputErrors, ActionHandleInputErrors } from "./actions/handleInputErrors.ts";



export namespace ReducerFormSearchParams {
		export type States = {
				hasErrors: boolean
				inputsWithErrors: Map<string, string>
				urlGenerated: string | null
		}

		export type Actions = ActionHandleInputErrors

		export type Params = {
				states: States
				action: Actions
		}

}

export const ReducerFormSearchParamsDefaultValues: ReducerFormSearchParams.States = {
		hasErrors: false,
		inputsWithErrors: new Map(),
		urlGenerated: null
}

export function reducer(states: ReducerFormSearchParams.States, action: ReducerFormSearchParams.Actions) {
		const commonProps = { states, action }

		switch (action.type) {
				case 'ACTION_HANDLE_INPUT_ERRORS':
						return actionHandleInputErrors(commonProps)
				default:
						return states
		}
}