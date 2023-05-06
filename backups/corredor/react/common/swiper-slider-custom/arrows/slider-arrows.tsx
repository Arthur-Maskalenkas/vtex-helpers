import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../modules'

import arrowRight from './arrow-right.svg'
import arrowLeft from './arrow-left.svg'

export type SliderArrowsProps = {
  onClickNext: () => void
  onClickPrev: () => void

}

export const SliderArrows = ({ onClickNext, onClickPrev }: SliderArrowsProps) => {
  const css = useCssHandles(CSS_HANDLES)
  return (
    <div className={generateCSS('container-component', ['slider-arrows'], css)}>
      <button
        className={generateCSS('button', ['shelf', 'left-arrow'], css)}
        onClick={() => {
          onClickPrev()
        }}>
        <img src={arrowLeft} title='Voltar sliders' alt='icone de flecha apontando para a esquerda' />
      </button>
      <button
        className={generateCSS('button', ['shelf', 'right-arrow'], css)}
        onClick={() => onClickNext()}>
        <img src={arrowRight} title='Avançar sliders' alt='icone de flecha apontando para a direita' />
      </button>
    </div>
  )
}
