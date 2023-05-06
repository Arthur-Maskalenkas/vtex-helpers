// https://swiperjs.com/demos
import React from 'react'
import { SwiperOptions } from "swiper";

import { Swiper as SwiperComponent, SwiperSlide, SwiperRef } from 'swiper/react';
import './swiper-element-bundle-min.global.css';
import { chooseConfig, normalizeQuantityElements, swiperGenerateConfigProps } from './utils';


export type SwiperSliderCustomProps = {
  children: React.ReactNode,
  allCustomConfig?: SwiperOptions | null
  partialCustomConfig?: Pick<SwiperOptions, 'navigation' | 'slidesPerView' | 'loop' | 'pagination'> | null
}

export const SwiperSliderCustom = React.forwardRef<SwiperRef, SwiperSliderCustomProps>(({ children, allCustomConfig = null, partialCustomConfig = null }, ref) => {

  const normalizedChildren = normalizeQuantityElements(React.Children.toArray(children));
  const sliderConfigDefault = swiperGenerateConfigProps({ generateDefaultConfig: true })
  const sliderConfigChoosed = chooseConfig(allCustomConfig, partialCustomConfig, sliderConfigDefault)

  return (
    <div>
      <SwiperComponent {...sliderConfigChoosed} ref={ref}  >
        {React.Children.map(normalizedChildren, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  )
})
