import React from 'react'
import { Button } from '../../button'
import { Spinner } from 'vtex.styleguide'

export const AddToCart = ({ handleClickQuantity, sellingPriceFormatted = '', isLoading }: { handleClickQuantity: any, sellingPriceFormatted?: string, isLoading: boolean }) => {
  return (
    <div className="container-app-var-add-to-cart">
      <Button
        type="button"
        onClick={() => handleClickQuantity('first-item')}
      >
        {isLoading ? <Spinner size={20} color='#fff' /> : `COMPRAR (R$ ${sellingPriceFormatted})`}
      </Button>
    </div >
  )
}
