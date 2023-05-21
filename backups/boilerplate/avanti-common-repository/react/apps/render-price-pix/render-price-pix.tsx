import React, { useContext } from 'react'
import { useProduct } from 'vtex.product-context'

import { CSS_HANDLES, formatCurrency, generateCSS } from '../../modules'

export type RenderPricePixProps = {
  type: 'shelf' | 'pdp'
}

export const RenderPricePix = ({ type = 'shelf' }: RenderPricePixProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const context: any = 3
  const product = useProduct()

  const pixDiscountPresentOnContext = context?.schemaPix?.[0]?.percentageDiscountPix
  const productPrice = product?.selectedItem?.sellers?.[0]?.commertialOffer?.Price

  const discountFraction = (pixDiscountPresentOnContext ?? 5) / 100;
  const discountedPrice = Number(productPrice) * (1 - discountFraction);
  const priceWithDiscountFormatted = formatCurrency(discountedPrice)

  const texts = {
    shelf: <p >Por <strong>{priceWithDiscountFormatted}</strong> à vista</p>,
    pdp: <p ><strong>{priceWithDiscountFormatted}</strong> à vista</p>,
  }
  return (
    <div className={generateCSS('container-component', ['render-price-pix'], css)}>
      {texts[type]}

    </div>
  )
}

