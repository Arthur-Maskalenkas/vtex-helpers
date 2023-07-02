import React, { createContext } from "react";
import { ContextContainerPDP, contextContainerPDPInitialValues } from "./types";

const ContextContainerPDP = createContext<ContextContainerPDP.Provider>(contextContainerPDPInitialValues)

export const contextContainerPDPProvider = (props: ContextContainerPDP.OwnerProviderProps) => {

  return (
    <ContextContainerPDP.Provider value={{ componentValues: {}, siteEditorValues: {} }}>
      {props.children}
    </ContextContainerPDP.Provider>
  )
}

