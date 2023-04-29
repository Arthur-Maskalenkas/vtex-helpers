import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { ProductContextProvider } from 'vtex.product-context'
import { ProductListContext } from 'vtex.product-list-context'
import Slider, { Settings } from 'react-slick'
import { ProductSummary01 } from '../product-summary/product-summary'

import arrowRight from './arrow-right.svg'
import arrowLeft from './arrow-left.svg'
import { ShelfSmartHintProps } from '../../apps'
import { generateCommonSliderConfigs } from '../../common/slider/utils'
import { SliderCustom } from '../../common'
// https://github.dev/vtex-apps/product-list-context
// https://github.com/vtex-apps/product-summary/blob/master/docs/ProductSummarySKUSelector.md

export const ShelfDesktop = ({ products, title }: ShelfSmartHintProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const { ProductListProvider } = ProductListContext


  const sliderConfig: Settings = {
    ...generateCommonSliderConfigs(css, products ?? [])
  }

  const sliderRef = React.useRef<Slider>(null)

  return (
    <div className={generateCSS('container-component', ['default'], css, { suffix: ['shelf-desktop'] })}>
      <div className={generateCSS('container-content', ['title'], css, { suffix: ['shelf'] })}>
        <h3 className={generateCSS('title', ['header'], css, { suffix: ['shelf'] })}>
          {title}
        </h3>
      </div>
      <ProductListProvider listName="ShelfRecommendationsByPage">
        <SliderCustom
          ref={sliderRef}
          configs={{ ...sliderConfig }}>
          {products?.map((product: any, index: any) => {
            return (
              <div key={index}>
                <ProductContextProvider product={product} query={{ products } as any} >
                  <ProductSummary01 />
                </ProductContextProvider>
              </div>
            )
          })}
        </SliderCustom>
        <button
          className={generateCSS('button', ['shelf', 'left-arrow'], css)}
          onClick={() => { sliderRef.current?.slickPrev() }}>
          <img src={arrowLeft} title='Voltar sliders' alt='icone de flecha apontando para a esquerda' />
        </button>
        <button
          className={generateCSS('button', ['shelf', 'right-arrow'], css)}
          onClick={() => { sliderRef.current?.slickNext() }}>
          <img src={arrowRight} title='Avançar sliders' alt='icone de flecha apontando para a direita' />
        </button>
      </ProductListProvider>
    </div>
  )
}
