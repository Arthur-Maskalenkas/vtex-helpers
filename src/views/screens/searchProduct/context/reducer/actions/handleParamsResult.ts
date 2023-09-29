import { ReducerSearchProduct } from "../reducer.ts";
import { Product } from "../../../../../../services/domain/internal/models/product.ts";



export namespace ActionHandleParamsResult {

		export type Payload = Product.Current[]

		export type Action = {
				type: 'ACTION_HANDLE_PARAMS_RESULT'
				payload: {
						data: Payload
				}
		}

}

export const actionHandleParamsResult = ({ states, action }: ReducerSearchProduct.Params<ActionHandleParamsResult.Action>): ReducerSearchProduct.States => {
		return {
				...states,
				currentModule: 'search',
				form: {
						...states.form,
						hasErrors: false,
						inputsWithErrors: new Map(),
						products: action.payload.data
				}
		}
}