import React, { createContext, useCallback, useMemo } from 'react'

import type { RefinedDataOnProductContext } from '../components/badges-avanti/_interfaces'
import { filterLinksOnAllQuadrants } from './helpers/filter'
import type {
  GlobalSiteEditorValues,
  GlobalUseContextProps,
} from './_interfaces'
import { MOCK_USE_CONTEXT_VALUES } from './_mocks/mock-states'
import { remapSchema } from "./helpers/remap-schema";
import { schema_root_custom_app_badge_custom } from './_interfaces/_schemas-mapped'
//
// ** Criando O Contexto **
//
export const GlobalContext = createContext<GlobalUseContextProps>(
  MOCK_USE_CONTEXT_VALUES
)

//
// ** Disponibilizando os valores aos filhos por meio do PR\OVID\ER **
//
const GlobalContextProvider = (
  props: GlobalSiteEditorValues & { children: React.ReactNode }
) => {
  const getschemaAppBadgeCustom = useMemo(() => props.schemaAppBadgeCustom, [
    props.schemaAppBadgeCustom,
  ])

  if (!props.schemaAppBadgeCustom?.[0]) {
    return null
  }


  const getCollectionMapped = useCallback(
    (
      refinedDataOnProductContext: RefinedDataOnProductContext
    ): schema_root_custom_app_badge_custom => {
      console.log("refinedDataOnProductContext", refinedDataOnProductContext)
      console.log("provider", props)

      const filterAllLinksOnCurrentProduct = filterLinksOnAllQuadrants(
        getschemaAppBadgeCustom?.[0],
        refinedDataOnProductContext
      )

      if (!filterAllLinksOnCurrentProduct) {
        return (null as unknown) as schema_root_custom_app_badge_custom
      }
      const schemaRemapped = remapSchema(filterAllLinksOnCurrentProduct, getschemaAppBadgeCustom?.[0])


      return {
        ...schemaRemapped
      }
    },
    [props]
  )

  return (
    <GlobalContext.Provider
      value={{
        getschemaAppBadgeCustom: getschemaAppBadgeCustom?.[0],
        getCollectionMapped,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.schema = {
  title: 'Configurações De Apps Globais',
}

export default GlobalContextProvider
