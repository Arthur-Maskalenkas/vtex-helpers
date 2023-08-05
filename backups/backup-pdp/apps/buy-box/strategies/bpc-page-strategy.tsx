import React from 'react'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import { PageStrategyProps } from './types'


export const BPCPageStrategy = ({ productContext }: PageStrategyProps) => {
  return (
    <div>
      normal page
    </div>
  )
}

BPCPageStrategy.canRender = (productContext: Partial<ProductContextState> | undefined) => {
  return productContext?.product?.productReference.match(

    /bpc/i)
}
