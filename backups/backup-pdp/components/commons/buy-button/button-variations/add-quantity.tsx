import React from 'react'
import { Button } from '../../button'
import { Spinner } from '../../../../context/vtex.styleguide'

export const AddQuantity = ({ handleClickQuantity, productQuantity }: { handleClickQuantity: any, productQuantity: number }) => {
  return (
    <div className="container-app-add-quantity">
      <div className="container-operation">
        <Button type="button" preventDefault={true} stopPropagation={true}
          onClick={() => handleClickQuantity('removeFromCart')}      >
          -
        </Button>

        <span className='quantity-text'>{productQuantity}</span>

        <Button type="button"
          onClick={() => handleClickQuantity('addToCart')}      >
          +
        </Button>
      </div>

      <p className='add-text'>Adicionado</p>
    </div >
  )
}
