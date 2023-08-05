import React from 'react'
import { useProduct } from "vtex.product-context";

export const Title = () => {
  const title = useProduct()?.product?.productName ?? ''

  return (
    <div className="container-app-title">
      {/* <h1>{title}</h1> */}
      {/* <h1>CAMISETA DE COMPRESSÃO FUNCIONALIDADE OLYMPIKUS MASCULINA LOREM YPSUM LOREM LOREM</h1> */}
      <h1>CAMISETA</h1>
    </div>
  )
}
