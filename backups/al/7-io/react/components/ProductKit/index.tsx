import React from "react";
import BoxKit from "./components/BoxKit";
import styles from './styles.css'
import { useProduct } from 'vtex.product-context'


const ProductKit = () => {
  const productCtx:any = useProduct();
  const kitItems = productCtx?.selectedItem?.kitItems

  const formatPrice = (price:number) => {
    return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
  }
  
  if(kitItems?.length <= 0) return null
  return (
    <div className={styles.container}>
      <p className={styles.kit_title}>Produtos do kit</p>
      {kitItems.map((item:any,index:number) => {
          const imageUrl:string = item?.sku?.images[0]?.imageUrl
          const productName:string = item?.sku?.name
          const sellingPrice:string = formatPrice(item?.sku?.sellers[0]?.commertialOffer?.Price)
          if(index > 1) return <></>
          return (
            <BoxKit
             imageUrl={imageUrl}
             productName={productName}
             sellingPrice={sellingPrice}
             key={index}
            />
          )
      })}
    </div>
  )
}

export default ProductKit