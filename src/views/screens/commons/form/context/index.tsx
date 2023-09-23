import React, { createContext, useContext, useReducer } from "react";
import { reducer, ReducerFormSearchParams, ReducerFormSearchParamsDefaultValues } from "./reducer/reducer.ts";



const FormContext = createContext<ReducerFormSearchParams.Context>({
		states: ReducerFormSearchParamsDefaultValues,
		dispatch: {} as unknown as React.Dispatch<ReducerFormSearchParams.Actions>
})

export const useFormContext = () => {
		return useContext(FormContext)
}

export const FormProvider = ({ children }: React.PropsWithChildren<{}>) => {
		const [ state, dispatch ] = useReducer(reducer, ReducerFormSearchParamsDefaultValues)

		return (
				<FormContext.Provider value={{ dispatch: dispatch, states: state }}>
						{children}
				</FormContext.Provider>
		)
}