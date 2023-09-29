import { Product } from "../../../../../services/domain/internal/models/product.ts";



export namespace ReducerSearchProduct {
		export type Modules = 'product' | 'search' | 'form'

		export type States = {
				currentModule: Modules

				product: {
						selectedSku: Product.Sku | null
						currentProduct: Product.Current | null
				} | null

				form: {
						hasErrors: boolean
						inputsWithErrors: Map<string, string>
						products: Product.Current[]
				}

		}

		export type Actions = any

		export type Context = {
				states: States;
				dispatch: React.Dispatch<Actions>;
		}

		export type Params<T extends Actions = Actions> = {
				states: States;
				action: T;
		};

}

export const ReducerSearchProductParamsDefaultValues: ReducerSearchProduct.States = {
		form: {
				hasErrors: false,
				inputsWithErrors: new Map(),
				products: []
		},

		product: null,
		currentModule: 'form'
}


export function reducer(states: ReducerSearchProduct.States, action: ReducerSearchProduct.Actions) {
		const commonProps: any = { states, action }

		switch (action.type) {
				default:
						return states
		}
}