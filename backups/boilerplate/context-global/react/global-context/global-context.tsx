import React from 'react'
import { SchemaSiteEditor } from './cms-helper'
import { GlobalProviderProps, GlobalSiteEditorProps } from './types'

import { GlobalContextSchemaAvantiFooter } from './contexts/global-avanti-footer-context/global-context-schema-avanti-footer'
import { GlobalContextAvantiFooter } from './contexts/global-avanti-footer-context/global-context-avanti-footer'
import { GlobalContextPricePix } from './contexts/global-price-pix-context/global-context-price-pix'
import { GlobalContextSchemaPricePix } from './contexts/global-price-pix-context/global-context-schema-price-pix'
import { GlobalContextSchemaAvantiMenu } from './contexts/global-avanti-menu-context/global-context-schema-avanti-menu'

export const GlobalContext = React.createContext<GlobalProviderProps>({} as any)

export const GlobalProvider = (props: GlobalSiteEditorProps) => {
  console.log(`🚀 ~ file: global-context.tsx:12 ~ GlobalProvider ~ props:`, props)

  const siteEditorItems: GlobalProviderProps = {
    _global_price_pix: props?._global_price_pix?.[0] ?? null,
    _global_avanti_menu: props?._global_avanti_menu?.[0] ?? null,
    _global_avanti_footer: props?._global_avanti_footer?.[0] ?? null,
  }

  return (
    <GlobalContext.Provider value={siteEditorItems}>
      <GlobalContextPricePix.Provider value={props?._global_price_pix?.[0] ?? null}>
        <GlobalContextAvantiFooter.Provider value={props?._global_avanti_footer?.[0] ?? null}>
          {props.children}
        </GlobalContextAvantiFooter.Provider>
      </GlobalContextPricePix.Provider>
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
    },

    _global_price_pix: {
      type: 'array',
      maxItems: 1,
      title: 'Configurar valor de pix',
      items: GlobalContextSchemaPricePix()
    },

    _global_avanti_menu: {
      type: 'array',
      maxItems: 1,
      title: 'Configurar Avanti Menu',
      items: GlobalContextSchemaAvantiMenu()
    }
  }
} as SchemaSiteEditor

