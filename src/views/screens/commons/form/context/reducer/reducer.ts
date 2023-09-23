import { actionHandleInputErrors, ActionHandleInputErrors } from "./actions/handleInputErrors.ts";
import { actionHandleParamsResult, ActionHandleParamsResult } from "./actions/handleParamsResult.ts";



export namespace ReducerFormSearchParams {
		export type States = {
				hasErrors: boolean
				inputsWithErrors: Map<string, string>
				urlGenerated: string | null
		}

		export type Actions = ActionHandleInputErrors | ActionHandleParamsResult

		export type Context = {
				states: States;
				dispatch: React.Dispatch<Actions>;
		}

		export type Params<T extends Actions = Actions> = {
				states: States;
				action: T;
		};

}

export const ReducerFormSearchParamsDefaultValues: ReducerFormSearchParams.States = {
		hasErrors: false,
		inputsWithErrors: new Map(),
		urlGenerated: null
}


export function reducer(states: ReducerFormSearchParams.States, action: ReducerFormSearchParams.Actions) {
		const commonProps: any = { states, action }

		switch (action.type) {
				case 'ACTION_HANDLE_INPUT_ERRORS':
						return actionHandleInputErrors(commonProps)
				case 'ACTION_HANDLE_PARAMS_RESULT':
						return actionHandleParamsResult(commonProps)
				default:
						return states
		}
}