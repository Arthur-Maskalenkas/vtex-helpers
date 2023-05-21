import React from 'react'
import { SchemaSiteEditor } from './cms-helper'
import { GlobalProviderProps, GlobalSiteEditorProps } from './types'
import { GlobalContextSchemaAvantiFooter } from './contexts/global-avanti-footer-context/global-context-schema-avanti-footer'
import { GlobalContextAvantiFooter } from './contexts/global-avanti-footer-context/global-context-avanti-footer'

export const GlobalContext = React.createContext<GlobalProviderProps>({} as any)

export const GlobalProvider = (props: GlobalSiteEditorProps) => {
  console.log(`🚀 ~ file: global-context.tsx:12 ~ GlobalProvider ~ props:`, props)

  const siteEditorItems: GlobalProviderProps = {
    _global_pix_discount: props?._global_pix_discount?.[0] ?? null,
    _global_avanti_menu: props?._global_avanti_menu?.[0] ?? null,
    _global_avanti_footer: props?._global_avanti_footer?.[0] ?? null,
  }

  return (
    <GlobalContext.Provider value={siteEditorItems}>
      <GlobalContextAvantiFooter.Provider value={props?._global_avanti_footer?.[0] ?? null}>
        {props.children}
      </GlobalContextAvantiFooter.Provider>
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

