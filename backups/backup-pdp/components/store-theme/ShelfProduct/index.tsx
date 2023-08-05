import React, { useEffect } from 'react'
import { useBuyBoxContext } from "../../../context";
import { canUseDOM } from 'vtex.render-runtime';


export const ShelfProduct = () => {
  const { SlotComponentShelfProduct } = useBuyBoxContext()

  return (
    <div className="container-app-shelf-product no-reset-nothing">
      <SlotComponentShelfProduct />
    </div>
  )
}
