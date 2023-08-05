import React, { useEffect, useState } from 'react'
import { ContextProps, ContextProvider } from './types';
import { BuyBox } from "../apps/buy-box";
import { getVariationsFactory } from "../api/factories/get-variations";
import { useProduct } from "vtex.product-context";
import { useApolloClient } from "react-apollo";
import { GetProductVariationsQuery } from "../api/repository/product-repository/graphql/get-product-variations";


export const BuyBoxContext = React.createContext<ContextProvider>({} as any)

export const useBuyBoxContext = () => {
  return React.useContext(BuyBoxContext)
}

export const BuyBoxProvider = ({ ...slotComponents }: ContextProps) => {
  console.log(`🚀 ~ file: index.tsx:17 ~ BuyBoxProvider ~ slotComponents:`, slotComponents)
  const [variations, setVariations] = useState<GetProductVariationsQuery.MappedResponse | undefined>(undefined); // State for listColors
  const productContext = useProduct()
  const apolloClient = useApolloClient()

  useEffect(() => {
    (async () => {

      const getVariations = getVariationsFactory(apolloClient)

      const variations = await getVariations.handle(productContext?.product?.productReference!, productContext?.product?.productId!)

      setVariations(variations)
    })()
  }, [apolloClient, productContext?.product?.productId])

  if (!variations) return <>loading</>

  return <BuyBoxContext.Provider
    value={{ listColors: variations.listProductsReference, listSizes: variations.listProductsSkus, ...slotComponents }}>
    <BuyBox />
  </BuyBoxContext.Provider>
}
