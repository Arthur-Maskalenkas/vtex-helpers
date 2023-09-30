import { Dispatch } from "react";
import { ReducerSearchProduct } from "../../../context/reducer/reducer.ts";
import { mapParamsWithUseForm } from "./mapParams.ts";
import { ControllerLoadProducts } from "../../../../../../services/presentation/controllers/loadProducts.ts";



export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, dispatch: Dispatch<ReducerSearchProduct.Actions>, controller: ControllerLoadProducts) => {
		event.preventDefault()
		const paramsMapped = mapParamsWithUseForm(event)
		console.log('#!! 🔥 handleSubmit 18:53', paramsMapped)
		if (!paramsMapped) return null

		const products = await controller.handle((paramsMapped as any))
		console.log('#!! 🔥 handleSubmit 18:54', products)
		if (!products?.length) return null

		const mappedProducts = products?.map(product => ({ ...product.currentProduct }))
		dispatch({ type: 'ACTION_HANDLE_PARAMS_RESULT', payload: { data: mappedProducts } })

}