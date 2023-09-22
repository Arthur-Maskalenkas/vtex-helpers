import { ReducerFormSearchParams } from "../reducer.ts";



export type ActionHandleInputErrors = {
		type: 'ACTION_HANDLE_INPUT_ERRORS'
		payload: {
				data: {
						inputs: Map<string, string>
				}
		}
}

export const actionHandleInputErrors = ({ states, action }: ReducerFormSearchParams.Params): ReducerFormSearchParams.States => {
		return {
				...states,
				hasErrors: true,
				inputsWithErrors: action.payload.data.inputs,
				urlGenerated: null
		}
}