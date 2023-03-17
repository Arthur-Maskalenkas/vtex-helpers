import './slick.global.css'
import './slick-theme.global.css'

import Slider, { Settings } from "react-slick"

import React, { useRef } from 'react'

import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../modules'

export type TSliderVariation02 = {
  children: any
}


export const Slider01 = ({ children }: TSliderVariation02) => {
  const sliderRef = useRef(null)

  const handleBeforeChange = () => {
    const slider = sliderRef.current as any
    slider?.slick.unslick()
  }

  const css = useCssHandles(CSS_HANDLES)


  const defaultSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: true,
    speed: 200,
    nextArrow: <span className={`${applyModifiers(css['icon'], 'arrow-right')}`}></span>,
    prevArrow: <span className={`${applyModifiers(css['icon'], 'arrow-left')}`}></span>,
    slidesToShow: 2.5,
    slidesToScroll: 3,

  }





  return (
    <div className={`${applyModifiers(css['container-component'], ['slider-products-variation-01'])}`}>
      <Slider
        {...defaultSettings}
        beforeChange={handleBeforeChange}
        dotsClass={applyModifiers(css['container-content'], ['dots'])}
      >
        {children}
      </Slider>
    </div>
  )
}
