import { ReducerSearchProduct } from "../reducer.ts";
import { Product } from "../../../../../../services/domain/internal/models/product.ts";



export namespace ActionHandleParamsResult {

		export type Payload = Product.Current[]

		export type Dispatch = {
				type: 'ACTION_HANDLE_PARAMS_RESULT'
				payload: {
						data: Payload
				}
		}

}

export const actionHandleParamsResult = ({ states, action }: ReducerSearchProduct.Params<ActionHandleParamsResult.Dispatch>): ReducerSearchProduct.States => {
		return {
				...states,
				currentModule: 'search',
				product: null,
				form: {
						...states.form,
						hasErrors: false,
						inputsWithErrors: new Map(),
						products: action.payload.data
				}
		}
}