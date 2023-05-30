import React, { createContext } from 'react'
import { GlobalSiteEditorValues, GlobalUseContextProps } from './interfaces'
//
// ** Criando O Contexto **
//
export const GlobalContext = createContext<GlobalUseContextProps>({} as any)

//
// ** Disponibilizando os valores aos filhos por meio do PR\OVID\ER **
//
const GlobalContextProvider = (
  props: GlobalSiteEditorValues & { children: React.ReactNode }
) => {
  return (
    <GlobalContext.Provider
      value={props}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.schema = {
  title: 'Configurações De Apps Globais',
}

export default GlobalContextProvider
