import React from "react"
import { CmsProviderProps } from "./cms-context-types"


export const CmsContext = React.createContext<CmsProviderProps>({} as any)

export const useCmsContext = () => {
	return React.useContext<CmsProviderProps>(CmsContext)
}