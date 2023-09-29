import { ReducerSearchProduct } from "../reducer.ts";



export namespace ActionHandleBackModule {
		export type Dispatch = {
				type: 'ACTION_HANDLE_BACK_MODULE'
		}

}

export const actionHandleBackModule = ({ states, action }: ReducerSearchProduct.Params<ActionHandleBackModule.Dispatch>): ReducerSearchProduct.States => {
		return {
				...states,
				currentModule: 'search',
		}
}