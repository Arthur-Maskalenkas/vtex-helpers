import { useSearchProductContext } from "../../context";
import { handleSubmit } from "./utils/handleSubmit.ts";
import { useApplicationReducerContext } from "../../../../application/context";



export const ModuleForm = () => {
		const { dispatch, states } = useSearchProductContext()
		const { state: { appInternalServices: { product: { loadProducts: controller } } } } = useApplicationReducerContext()


		return (
				<form role={'form'} onSubmit={e => handleSubmit(e, dispatch, controller as any)}>

				</form>
		)
}