import React from 'react'
import { GlobalProviderProps, GlobalSiteEditorProps } from './types'
import { SchemaSiteEditor } from './cms-helper'
import { GlobalContextSchemaAvantiFooter } from './contexts'

export const GlobalContext = React.createContext<GlobalProviderProps>({} as any)

export const useGlobalProvider = () => {
  return React.useContext(GlobalContext)
}

const GlobalProvider = (props: GlobalSiteEditorProps) => {
  console.log(`🚀 ~ file: global-context.tsx:12 ~ GlobalProvider ~ props:`, props)

  const siteEditorItems: GlobalProviderProps = {
    _global_pix_discount: props?._global_pix_discount?.[0] ?? null,
    _global_avanti_menu: props?._global_avanti_menu?.[0] ?? null,
    _global_avanti_footer: props?._global_avanti_footer?.[0] ?? null,
  }

  return (
    <GlobalContext.Provider value={siteEditorItems}>
      {props.children}
    </GlobalContext.Provider >
  )
}

GlobalProvider.schema = {
  title: 'Configurações globais',
  type: "object",
  properties: {
    _global_avanti_footer: {
      type: 'array',
      maxItems: 1,
      title: 'Configurar footer',
      items: GlobalContextSchemaAvantiFooter()
    }
  }
} as SchemaSiteEditor

export default GlobalProvider
