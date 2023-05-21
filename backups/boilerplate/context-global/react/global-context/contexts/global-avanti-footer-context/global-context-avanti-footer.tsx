import React from "react"
import { GlobalContextTypeAvantiFooter } from "./global-context-type-avanti-footer"

export const GlobalContextAvantiFooter = React.createContext<GlobalContextTypeAvantiFooter>({} as any)

export const useGlobalContextAvantiFooter = () => {
  return React.useContext<GlobalContextTypeAvantiFooter>(GlobalContextAvantiFooter)
}
