import { ReducerSearchProduct } from "../reducer.ts";



export namespace ActionHandleInputErrors {

		export type Payload = Map<string, string>

		export type Dispatch = {
				type: 'ACTION_HANDLE_INPUT_ERRORS'
				payload: {
						data: Payload
				}

		}

		export const actionHandleInputErrors = ({ states, action }: ReducerSearchProduct.Params<ActionHandleInputErrors.Dispatch>): ReducerSearchProduct.States => {
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
								inputsWithErrors: action.payload.data
						}
				}
		}
}