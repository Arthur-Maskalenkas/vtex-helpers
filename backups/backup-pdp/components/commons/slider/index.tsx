import React, { Children, ReactNode } from 'react'
import { SwiperOptions } from "swiper"
import { Swiper as SwiperComponent, SwiperRef, SwiperSlide } from 'swiper/react';
import './swiper-element-bundle-min.global.css'


interface SwiperSliderCustomProps {
  children: ReactNode;
  sliderConfig?: SwiperOptions;
  normalizeChildrens?: boolean
}


export const SwiperSliderCustom = React.forwardRef<SwiperRef, SwiperSliderCustomProps>(({
  children,
  sliderConfig
}, ref) => {
  const normalizedChildren = Children.toArray(children)

  return (
    <SwiperComponent ref={ref} {...sliderConfig} className={'swiper-slider-custom'}>
      {normalizedChildren.map((child, index) => (
        <SwiperSlide className={'slider'} key={index}>
          {child}
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
})
