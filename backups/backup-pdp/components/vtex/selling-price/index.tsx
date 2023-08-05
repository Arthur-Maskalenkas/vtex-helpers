import React from 'react'
import { SellingPrice as VtexSellingPrice} from 'vtex.product-price'
export const SellingPrice = () => {
  return (
    <div className="container-app-selling-price">
      <VtexSellingPrice alwaysShow={true}/>
    </div>
  )
}
