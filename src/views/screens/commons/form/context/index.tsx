import { createContext, useContext } from "react";
import { ReducerFormSearchParams, ReducerFormSearchParamsDefaultValues } from "./reducer/reducer.ts";



const FormContext = createContext<ReducerFormSearchParams.States>(ReducerFormSearchParamsDefaultValues)

export const useFormContext = () => {
		return useContext(FormContext)
}

export const FormProvider = ({ children }: React.PropsWithChildren<{}>) => {
		return (
					<FormContext.Provider value={ReducerFormSearchParamsDefaultValues}>
							{children}
					</FormContext.Provider>
		)
}