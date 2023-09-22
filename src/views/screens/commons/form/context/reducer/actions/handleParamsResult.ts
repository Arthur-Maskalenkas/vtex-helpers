import { ReducerFormSearchParams } from "../reducer.ts";



export type ActionHandleParamsResult = {
		type: 'ACTION_HANDLE_PARAMS_RESULT'
		payload: {
				data: {
						params: string
				}
		}
}

export const actionHandleParamsResult = ({ states, action }: ReducerFormSearchParams.Params<ActionHandleParamsResult>): ReducerFormSearchParams.States => {
		return {
				...states,
				hasErrors: false,
				urlGenerated: action.payload.data.params
		}
}