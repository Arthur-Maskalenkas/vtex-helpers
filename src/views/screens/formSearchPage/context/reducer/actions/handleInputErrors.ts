import { ReducerFormSearchPage } from "../reducer.ts";



export type ActionHandleInputErrors = {
		type: 'ACTION_HANDLE_INPUT_ERRORS'
		payload: {
				data: {
						inputs: Map<string, string>
				}
		}
}

export const actionHandleInputErrors = ({ states, action }: ReducerFormSearchPage.Params<ActionHandleInputErrors>): ReducerFormSearchPage.States => {
		return {
				...states,
				urlGenerated: null,
				hasErrors: true,
				inputsWithErrors: action.payload.data.inputs
		}
}