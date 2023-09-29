import React, { createContext, useContext, useReducer } from "react";
import { reducer, ReducerSearchProduct, ReducerSearchProductParamsDefaultValues } from "./reducer/reducer.ts";



const SearchProductContext = createContext<ReducerSearchProduct.Context>({
		states: ReducerSearchProductParamsDefaultValues,
		dispatch: {} as unknown as React.Dispatch<ReducerSearchProduct.Actions>
})

export const useSearchProductContext = () => {
		return useContext(SearchProductContext)
}

export const SearchProductProvider = ({ children }: React.PropsWithChildren<{}>) => {
		const [ state, dispatch ] = useReducer(reducer, ReducerSearchProductParamsDefaultValues)

		return (
				<SearchProductContext.Provider value={{ dispatch: dispatch, states: state }}>
						{children}
				</SearchProductContext.Provider>
		)
}