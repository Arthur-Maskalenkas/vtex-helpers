import React, { createContext, useCallback } from 'react'

import { GlobalSiteEditorValues, GlobalUseContextProps, schema_site_editor_remapped_root_custom_app_badge_custom } from "./_interfaces";

import { MOCK_USE_CONTEXT_VALUES } from './_mocks/mock-states';
import { RefinedDataBuilder } from './helpers/refined-data';
import { FilterLinks, MatchByBrand, MatchByCategory, MatchByCollection, MatchByProduct, MatchBySpecification, MatchByVariation } from './helpers/filter-links';
import { RemapSchema } from './helpers/remap-schema/remap-schema';
import { SortMatchs } from './helpers/sort-matchs/sort-matchs';
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
      contextProduct: any
    ): schema_site_editor_remapped_root_custom_app_badge_custom | null => {
      const patch_schema_site_editor_all_quadrants = props?.schemaAppFlagCustom?.[0]

      if (patch_schema_site_editor_all_quadrants === undefined || null) {
        return null
      }

      console.log('context | contexto de produto', contextProduct)
      console.log('context | schema vindo do site editor', patch_schema_site_editor_all_quadrants)

      const refinedDataOnProductContext =
        new RefinedDataBuilder()
          .pickBrandField()
          .pickCategory()
          .pickProductField()
          .pickSellerField()
          .pickCollectionField()
          .pickSpecificationField()
          .pickVariationField()
          .pickPriceField()
          .build()
          .get(contextProduct)

      const matchers = [
        new MatchByProduct(),
        new MatchByBrand(),
        new MatchByCategory(),
        new MatchBySpecification(),
        new MatchByVariation(),
        new MatchByCollection()
      ]


      const filter = new FilterLinks(matchers, refinedDataOnProductContext)

      const sortMatchs = new SortMatchs

      const schemaRemapped = new RemapSchema(patch_schema_site_editor_all_quadrants, filter, sortMatchs).remap()

      console.log('context | contexto de produto', contextProduct)
      console.log('context | schema remapeado', schemaRemapped)
      console.log('context | refined data', refinedDataOnProductContext)

      if (!schemaRemapped) {
        return null
      }

      return {
        ...schemaRemapped
      }
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
