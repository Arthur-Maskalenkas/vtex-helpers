import React from 'react'
import { useProduct } from 'vtex.product-context'
import { BPCPageStrategy, NormalPageStrategy, Premium1PageStrategy, Premium2PageStrategy } from './strategies'


export const BuyBox = () => {
  const productContext = useProduct()

  const strategies = [
    BPCPageStrategy,
    Premium1PageStrategy,
    Premium2PageStrategy,
    NormalPageStrategy
  ]

  const Component = strategies.find(Component => {
    return Component?.canRender(productContext)
  }) as any
  return (
    <div className={"container-master-app-buy-box extra-class"}>
      <Component productContext={productContext} />
    </div>
  )
}
