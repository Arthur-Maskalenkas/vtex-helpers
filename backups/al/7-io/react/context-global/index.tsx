import React, { createContext, useCallback } from 'react'

import { ProductContextState } from "vtex.product-context/react/ProductTypes";
import { MOCK_USE_CONTEXT_VALUES } from "./_mocks/mock-states";
import {
  FilterDefaultSchema,
  FindRefinedDataOnProductContext, RemapSchema, SortMatchs
} from "./helpers";
import { GlobalSiteEditorValues, GlobalUseContextProps, schema_site_editor_remapped_root_custom_app_badge_custom } from './_interfaces';
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

  const getCollectionFlagRemapped = useCallback(
    (
      contextProduct: Partial<ProductContextState> | undefined
    ): schema_site_editor_remapped_root_custom_app_badge_custom | null => {
      const patch_schema_site_editor_all_quadrants: any = props?.schemaAppFlagCustom?.[0]
      const refinedDataOnProductContext = FindRefinedDataOnProductContext(contextProduct)
      if (!refinedDataOnProductContext || !patch_schema_site_editor_all_quadrants) return null

      console.log('===============================================')

      console.log('schemaAppFlagCustom', props?.schemaAppFlagCustom?.[0])
      console.log('data on index context')

      const Filter = new FilterDefaultSchema(refinedDataOnProductContext)
      const Sorter = new SortMatchs()

      console.log('allLinksMatchedOnQuadrantsByProductContextFiltered', Filter)


      const Remapper = new RemapSchema(patch_schema_site_editor_all_quadrants, Filter, Sorter)
      const remap = Remapper.remap()

      console.log('collectionFlagRemapped', remap)

      console.log('===============================================')

      if (!remap) {
        return null

      }

      console.log('context remapped', remap)

      // return null as any

      return {
        quadrantBottom: remap.quadrantBottom,
        quadrantLeft: remap.quadrantTopLeft,
        quadrantRight: remap.quadrantTopRight,
      } as any
    },
    [props]
  )

  return (
    <GlobalContext.Provider
      value={{
        getCollectionFlagRemapped
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
