import { ReducerSearchProduct } from "../reducer.ts";



export type ActionHandleInputErrors = {
		type: 'ACTION_HANDLE_INPUT_ERRORS'
		payload: {
				data: {
						inputs: Map<string, string>
				}
		}
}

export const actionHandleInputErrors = ({ states, action }: ReducerSearchProduct.Params<ActionHandleInputErrors>): ReducerSearchProduct.States => {
		return {
				...states,
				product: {
						...states.product,
						currentProduct: null,
						selectedSku: null
				},

				form: {
						...states.form,
						products: [],
						hasErrors: true,
						inputsWithErrors: action.payload.data.inputs
				}
		}
}