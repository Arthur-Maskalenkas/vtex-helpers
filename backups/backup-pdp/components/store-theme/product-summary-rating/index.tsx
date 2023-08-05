import React from 'react'
import { useBuyBoxContext } from "../../../context";
// @ts-ignore
import { RatingSummary } from 'olympikusio.trustvox'
export const ProductRatingSummary = () => {

  return (
    <div className="container-app-product-summary-rating">
      <RatingSummary />
    </div>
  )
}
