import React, { createContext, useCallback } from 'react'

import { GlobalSiteEditorValues, GlobalUseContextProps, schema_remapped } from "./_interfaces";

import { MOCK_USE_CONTEXT_VALUES } from './_mocks/mock-states';
import { RefinedDataBuilder } from './helpers/refined-data';
import {
  FilterLinks,
  MatchByBrand,
  MatchByCategory,
  MatchByCollection,
  MatchByProduct,
  MatchByPromotionDiscount,
  MatchBySpecification,
  MatchByVariation
} from './helpers/filter-links';
import { RemapSchema } from './helpers/remap-schema/remap-schema';
import { SortMatchs } from './helpers/sort-matchs/sort-matchs';
import { TextReplacer } from './helpers/text-replacer/text-replacer';
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
    ): schema_remapped => {
      const patch_schema_site_editor_all_quadrants = props?.schemaAppFlagCustom?.[0]

      if (patch_schema_site_editor_all_quadrants === undefined || null) {
        return {
          quadrants: null,
          refinedData: null
        }
      }




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
          .pickPromotionDiscountField()
          .build()
          .get(contextProduct)

      const matchers = [
        new MatchByProduct(),
        new MatchByBrand(),
        new MatchByCategory(),
        new MatchBySpecification(),
        new MatchByVariation(),
        new MatchByCollection(),
        new MatchByPromotionDiscount()
      ]

      const textReplacer = new TextReplacer()


      const filter = new FilterLinks(matchers, refinedDataOnProductContext, textReplacer)

      const sortMatchs = new SortMatchs

      const schemaRemapped = new RemapSchema(patch_schema_site_editor_all_quadrants, filter, sortMatchs).remap()


      console.log('custom flag - schema vindo do site editor', props)
      console.log('custom flag - filter', filter)
      console.log('custom flag - schema remapped', schemaRemapped)


      if (!schemaRemapped) {
        return {
          quadrants: null,
          refinedData: null
        }
      }

      return {
        quadrants: {
          ...schemaRemapped
        },
        refinedData: refinedDataOnProductContext
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
