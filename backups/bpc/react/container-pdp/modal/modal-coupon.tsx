import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { buildServicePostWarningForm } from '../../services/container-pdp/main/post-warning-form';

export const ModalCoupon = () => {
  const css = useCssHandles(CSS_HANDLES)
  const [couponCode, setCouponCode] = useState('');
  const [hasError, setHasError] = useState(false)

  const handleFormSubmit = async (data: any) => {
    const orderform = await fetch('/api/checkout/pub/orderForm')
    const orderformJson = await orderform.json()

    const postWarningForm = buildServicePostWarningForm(orderformJson)

    const response = await postWarningForm.handle(data?.couponCode)

    if (!response) {
      setHasError(true)
      return
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(event.target.value);
  };

  return (
    <div className={generateCSS('container-component', ['modal-coupon'], css)}>
      <div className={generateCSS('form', ['main'], css)}>
        <h3 className={generateCSS('title', ['main'], css)}>
          Titulo
        </h3>

        <input
          name="couponCode"
          className={generateCSS('input', ['coupon'], css)}
          type="text"
          placeholder="cupom"
          value={couponCode}
          onChange={handleInputChange}
        />

        {!!hasError && <p>tem algo de errado</p>}


        <button
          className={generateCSS('button', ['index', 'submit'], css)}
          onClick={handleFormSubmit}
        >
          Enviar
        </button>

        <button className={generateCSS('button', ['change-screen'], css)}>botão abrir tela para colocar cupom</button>
        <button className={generateCSS('button', ['change-screen'], css)}>botão voltar para etapa 2</button>
      </div>
    </div>
  )
}

