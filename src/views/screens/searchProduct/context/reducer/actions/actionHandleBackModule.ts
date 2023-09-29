import { ReducerSearchProduct } from "../reducer.ts";



export namespace ActionHandleBackModule {
		export type Dispatch = {
				type: 'ACTION_HANDLE_BACK_MODULE'
		}

}

export const actionHandleBackModule = ({ states, action }: ReducerSearchProduct.Params<ActionHandleBackModule.Dispatch>): ReducerSearchProduct.States => {
		const strategies = new Map<ReducerSearchProduct.Modules, ReducerSearchProduct.Modules>(
				[ [ 'product', 'search' ], [ 'search', 'form' ] ]
		)

		const currentModule = strategies.get(states.currentModule)

		return {
				...states,
				currentModule: currentModule || 'form',
		}
}