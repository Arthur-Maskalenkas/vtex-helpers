import { ReducerSearchProduct } from "../reducer.ts";
import { Product } from "../../../../../../services/domain/internal/models/product.ts";



export namespace ActionHandleProduct {

		export type Payload = Product.Current

		export type Action = {
				type: 'ACTION_HANDLE_PRODUCT'
				payload: {
						data: Payload
				}
		}

}

export const actionHandleProduct = ({ states, action }: ReducerSearchProduct.Params<ActionHandleProduct.Action>): ReducerSearchProduct.States => {
		return {
				...states,
				product: {
						selectedSku: action.payload.data.currentSku,
						currentProduct: {
								...action.payload.data,
						}
				}
		}
}