import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../../modules'
import { Installments, ListPrice, SellingPrice } from 'vtex.product-price'

type PricesProps = {
  quantityColors?: number
}


export const Prices = ({ quantityColors }: PricesProps) => {
  const css = useCssHandles(CSS_HANDLES)

  const quantityColorsText = quantityColors === 1 ? 'cor disponivel' : 'cores disponiveis'

  return (
    <div className={generateCSS('container-component', ['prices'], css)}>
      <ListPrice message='De {listPriceValue}' />
      <SellingPrice message='Por {sellingPriceValue}' />
      <Installments message='{installmentsNumber}x de {installmentValue}' />
      {!!quantityColors && (
        <p className={generateCSS('identifier', ['prices', 'quantity-colors'], css)}>
          {quantityColors} {quantityColorsText}
        </p>
      )}
    </div>
  )
}
