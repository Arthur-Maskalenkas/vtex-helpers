import React from 'react'
import { useBuyBoxContext } from '../../../context';


export const ProductDescription = () => {
  const { SlotComponentProductDescription } = useBuyBoxContext()

  return (
    <div className="container-app-product-description no-reset-children no-reset-nothing">
      <SlotComponentProductDescription />
    </div>
  )
}
