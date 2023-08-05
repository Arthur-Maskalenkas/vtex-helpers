import React from 'react'
import { ListPrice } from 'vtex.product-price'

export const OldPrice = () => {
  return (
    <div className="container-app-old-price">
        <ListPrice alwaysShow={true} />
    </div>
  )
}
