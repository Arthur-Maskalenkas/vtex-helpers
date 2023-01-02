import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime';
import ProductSummary from 'vtex.product-summary/ProductSummaryCustom'
//import type { ProductSummaryTypes } from 'vtex.product-summary-context'

export const ShelfCustom = ({ data }: any) => {
  const product = React.useMemo(
    () => ProductSummary.mapCatalogProductToProductSummary(data),
    [data]
  )




  return (
    <div>
      {!!product && (

        <ExtensionPoint
          id="product-summary"
          product={product}
        />

      )}

    </div>
  )
}











