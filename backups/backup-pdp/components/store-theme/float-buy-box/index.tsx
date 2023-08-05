import React from 'react'
import { useBuyBoxContext } from "../../../context";


export const FloatBuyBox = () => {
  const { SlotComponentFloatBuybox } = useBuyBoxContext()

  return (
    <div className="container-app-float-buy-box no-reset-nothing no-reset-children">
      <SlotComponentFloatBuybox />
    </div>
  )
}
