import { ReducerFormSearchPage } from "../reducer.ts";



export type ActionHandleParamsResult = {
		type: 'ACTION_HANDLE_PARAMS_RESULT'
		payload: {
				data: {
						params: string
				}
		}
}

export const actionHandleParamsResult = ({ states, action }: ReducerFormSearchPage.Params<ActionHandleParamsResult>): ReducerFormSearchPage.States => {
		return {
				...states,
				hasErrors: false,
				inputsWithErrors: new Map(),
				urlGenerated: action.payload.data.params
		}
}