import React from "react"
import { GlobalContextTypeAvantiMenu } from "./global-context-type-avanti-menu"

export const GlobalContextAvantiMenu = React.createContext<GlobalContextTypeAvantiMenu>({} as any)

export const useGlobalContextAvantiMenu = () => {
  return React.useContext<GlobalContextTypeAvantiMenu>(GlobalContextAvantiMenu)
}
