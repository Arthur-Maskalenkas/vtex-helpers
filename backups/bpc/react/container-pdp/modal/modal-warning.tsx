import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'

export const ModalWarning = () => {
  const css = useCssHandles(CSS_HANDLES)


  return (
    <div className={generateCSS('container-component', ['modal-warning'], css)}>
      <div className={generateCSS('container-content', ['main'], css)}>
        <h3 className={generateCSS('title', ['main'], css)}>
          Titulo
        </h3>

        <p className={generateCSS('text', ['main'], css)}>Descrição</p>
        <button className={generateCSS('button', ['change-screen'], css)}>botão abrir tela para colocar cupom</button>
        <button className={generateCSS('button', ['change-screen'], css)}>botão voltar para etapa 2</button>
      </div>
    </div>
  )
}
