import './slick.global.css'
import './slick-theme.global.css'
import './custom-slick.global.css'

import Slider, { default as SliderImport, Settings } from "react-slick"


import React from 'react'

import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../modules'

export type TSliderProps = {
  children: any,
  configs?: Settings,
  ref?: React.RefObject<Slider>
}

export const SliderCustom = React.forwardRef<Slider, TSliderProps>(({ children, configs }, ref) => {

  const css = useCssHandles(CSS_HANDLES)


  return (
    <div className={`${applyModifiers(css['container-component'], 'slider')}`}>
      <SliderImport
        {...(!!configs ? { ...configs } : {})}
        dotsClass={applyModifiers(css['container-content'], ['dots'])}
        ref={ref}
      >
        {children}
      </SliderImport>
    </div>
  )
})
