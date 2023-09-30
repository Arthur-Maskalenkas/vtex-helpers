import { Dispatch } from "react";
import { ReducerSearchProduct } from "../../../context/reducer/reducer.ts";
import { mapParams } from "./mapParams.ts";
import { ControllerLoadProducts } from "../../../../../../services/presentation/controllers/loadProducts.ts";



export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, dispatch: Dispatch<ReducerSearchProduct.Actions>, controller: ControllerLoadProducts) => {
		event.preventDefault()
		const paramsMapped = mapParams(event)
		if (!paramsMapped) return null

		const hasError = paramsMapped instanceof Map
		if (hasError) {
				dispatch({ type: 'ACTION_HANDLE_INPUT_ERRORS', payload: { data: paramsMapped } })
				return null
		}


		const products = await controller.handle((paramsMapped as any))
		if (!products?.length) return null

		const mappedProducts = products?.map(product => ({ ...product.currentProduct }))
		dispatch({ type: 'ACTION_HANDLE_PARAMS_RESULT', payload: { data: mappedProducts } })

}