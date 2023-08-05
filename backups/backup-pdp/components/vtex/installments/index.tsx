import React from 'react'
import { Installments as VtexInstallments} from 'vtex.product-price'
export const Installments = () => {
  return (
    <div className="container-app-installments">
      <VtexInstallments message={`ou até {installmentsNumber}x de {installmentValue}`}/>
    </div>
  )
}
