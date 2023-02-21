import React, { useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import SellerItem from './SellerItem'
import style from './style.css'
// @ts-ignore
import iconSearch from './icon.svg'

import { cepMask } from './cepMask'

export const SellerSelector = () => {
  const contextProduct: ProductContextState = useProduct()
  const sellers = contextProduct?.selectedItem?.sellers
  const productId = Number(contextProduct?.selectedItem?.itemId)
  const orderedSellers = sellers?.sort((a: any, b: any) => a?.commertialOffer?.Price - b?.commertialOffer?.Price)
  const [inputValue, setInputValue] = useState('')
  const [sendButtonValue, setSendButtonValue] = useState('')

  function handleClickButton() {
    if (inputValue.length === 9) {
      setSendButtonValue(inputValue)
    }
  }



  return (
    <div className={style.containerAppSellerSelector}>
      <div className={style.topSide} >
        <p className={style.titleFrete}>Informe seu CEP para previsão de entrega</p>
        <div className={style.containerShipping}>
          <input className={style.containerInput} placeholder='Digite seu CEP' onChange={(e) => setInputValue(e.target.value)} maxLength={9} value={cepMask(inputValue)}></input>
          <button className={style.containerButton} onClick={handleClickButton}><img src={iconSearch} /></button>
        </div>
        <a className={style.textCep} target='__blank' href='https://buscacepinter.correios.com.br/app/endereco/index.php?t'>Não sei meu CEP. </a>
      </div>
      <div className={style.bottomSide}>
        <div className={style.containerHeaderSeller}>
          <p className={style.titleTable1}>Vendedor</p>
          <p className={style.titleTable}>Valor</p>
          <p className={style.titleTable}>Entrega</p>
          <p className={style.titleTable}>Total</p>

        </div>
        {productId
          ? orderedSellers?.map((item: any) => (
            <SellerItem hasMoreThanOneChildren={true} productId={productId} itemSeller={item} sendButtonValue={sendButtonValue} />
          ))
          : null}
      </div>
    </div>
  )
}

