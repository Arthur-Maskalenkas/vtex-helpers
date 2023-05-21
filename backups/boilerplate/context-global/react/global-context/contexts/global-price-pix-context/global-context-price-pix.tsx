import React from "react"
import { GlobalContextTypePricePix } from "./global-context-type-price-pix"

export const GlobalContextPricePix = React.createContext<GlobalContextTypePricePix>({} as any)

export const useGlobalContextPricePix = () => {
  return React.useContext<GlobalContextTypePricePix>(GlobalContextPricePix)
}
