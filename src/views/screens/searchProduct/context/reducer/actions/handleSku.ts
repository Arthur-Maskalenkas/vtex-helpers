import { ReducerSearchProduct } from "../reducer.ts";
import { Product } from "../../../../../../services/domain/internal/models/product.ts";



export namespace ActionHandleSku {

		export type Payload = Product.Sku

		export type Dispatch = {
				type: 'ACTION_HANDLE_SKU'
				payload: {
						data: Product.Sku
				}
		}

}

export const actionHandleSku = ({ states, action }: ReducerSearchProduct.Params<ActionHandleSku.Dispatch>): ReducerSearchProduct.States => {
		return {
				...states,
				product: {
						...states.product,
						selectedSku: action.payload.data,
						currentProduct: {
								...(states as any).product?.currentProduct,
								currentSku: action.payload.data
						}
				}
		}
}