import React from 'react'
import { ProductImages } from 'vtex.store-components'
export const SliderMainImages = () => {
  return (
    <div className="container-app-slider-main-images no-reset-children">
      <ProductImages aspectRatio={{ desktop: "auto", mobile: "auto" }} zoomMode={"in-place-click"} displayThumbnailsArrows={false} />
    </div>
  )
}
