import { useSearchProductContext } from "../../context";
import { handleSubmit } from "./utils/handleSubmit.ts";



export const ModuleForm = () => {
		const { dispatch, states } = useSearchProductContext()


		return (
				<form role={'form'} onSubmit={e => handleSubmit(e, dispatch)}>

				</form>
		)
}