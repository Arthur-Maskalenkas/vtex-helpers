import { ReducerSearchProduct } from "../reducer.ts";
import { Product } from "../../../../../../services/domain/internal/models/product.ts";



export namespace ActionHandleChangeToModuleProduct {

		export type Payload = Product.Current

		export type Dispatch = {
				type: 'ACTION_HANDLE_CHANGE_TO_MODULE_PRODUCT'
				payload: {
						data: Product.Current
				}
		}

}

export const actionHandleChangeToModuleProduct = ({ states, action }: ReducerSearchProduct.Params<ActionHandleChangeToModuleProduct.Dispatch>): ReducerSearchProduct.States => {
		return {
				...states,
				currentModule: 'product',
		}
}