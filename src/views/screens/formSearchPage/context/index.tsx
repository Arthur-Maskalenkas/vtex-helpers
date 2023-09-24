import React, { createContext, useContext, useReducer } from "react";
import { reducer, ReducerFormSearchPage, ReducerFormSearchPageParamsDefaultValues } from "./reducer/reducer.ts";



const FormSearchPageContext = createContext<ReducerFormSearchPage.Context>({
		states: ReducerFormSearchPageParamsDefaultValues,
		dispatch: {} as unknown as React.Dispatch<ReducerFormSearchPage.Actions>
})

export const useFormSearchPageContext = () => {
		return useContext(FormSearchPageContext)
}

export const FormSearchPageProvider = ({ children }: React.PropsWithChildren<{}>) => {
		const [ state, dispatch ] = useReducer(reducer, ReducerFormSearchPageParamsDefaultValues)

		return (
				<FormSearchPageContext.Provider value={{ dispatch: dispatch, states: state }}>
						{children}
				</FormSearchPageContext.Provider>
		)
}