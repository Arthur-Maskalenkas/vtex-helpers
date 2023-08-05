import React, { useEffect } from 'react'
import { useBuyBoxContext } from "../../../context";

// @ts-ignore
import { Reviews } from 'olympikusio.trustvox'


export const ProductReviews = () => {
  const { SlotComponentTitleRating } = useBuyBoxContext()
  return (
    <div className="container-app-product-reviews no-reset-nothing no-reset-children">
      <SlotComponentTitleRating />
      <Reviews />
    </div>
  )
}
