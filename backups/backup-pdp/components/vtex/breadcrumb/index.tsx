import React from 'react'
import { ProductBreadcumb } from 'vtex.breadcrumb'
import { useProduct } from 'vtex.product-context'

export const Breadcrumb = () => {
  const product = useProduct()?.product
  return (
    <div className="container-app-breadcrumb">
      <ProductBreadcumb categories={[]} showOnMobile={true} />
    </div>
  )


}
