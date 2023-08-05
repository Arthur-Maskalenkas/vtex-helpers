import React from 'react'
import {ProductContextState} from 'vtex.product-context/react/ProductTypes'
import {PageStrategyProps} from './types'

export const NormalPageStrategy = ({productContext}: PageStrategyProps) => {

  return (
    <div>
      normal page
    </div>
  )
}

NormalPageStrategy.canRender = (productContext: Partial<ProductContextState> | undefined) => {
  return true
}
