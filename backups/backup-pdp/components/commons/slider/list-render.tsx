import React, { useEffect } from 'react'
import { Navigation, SwiperOptions } from 'swiper'
import { SwiperRef } from 'swiper/react'
import { useRuntime } from 'vtex.render-runtime'
import { SwiperSliderCustom } from '.'


export type ListProductVariationsProps = {
  typeVariation: 'size' | 'color' | 'distance'
  items?: any[]
  prefixClassName?: string
  children: React.ReactNode
  quantitySlidesToShowOnMobile?: number
  quantitySlidesToShowOnDesktop?: number
  ifNotHaveSufficientLengthRenderNormalList?: boolean
}

export const ListRender = ({
  typeVariation = 'distance',
  items,
  children,
  prefixClassName = 'default',
  quantitySlidesToShowOnMobile = 4,
  quantitySlidesToShowOnDesktop = 6,
  ifNotHaveSufficientLengthRenderNormalList = false
}: ListProductVariationsProps) => {
  const { deviceInfo: { isMobile } } = useRuntime()

  const quantitySlidesToShow = isMobile ? quantitySlidesToShowOnMobile : quantitySlidesToShowOnDesktop


  const quantityItems = items?.length || 0
  const refSlider = React.useRef<SwiperRef>(null)



  const sliderConfig: SwiperOptions = {
    slidesPerView: quantitySlidesToShow,
    slidesPerGroup: 1,
    touchStartForcePreventDefault: true,
    rewind: true,

    pagination: {
      clickable: true
    },
    navigation: {
      enabled: true
    },
    modules: [
      Navigation
    ]
  }


  if (quantityItems <= quantitySlidesToShow && ifNotHaveSufficientLengthRenderNormalList) {
    return (
      <ul className={`list-render list ${prefixClassName}`}>
        {React.Children.map(children, (child, index) => (
          <li key={`${typeVariation}-${index}`} className={'list-item'}>
            {child}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={`list-render slider ${prefixClassName}`}>
      <button
        className={`arrow-left`}
        onClick={() =>
          refSlider?.current?.swiper.slidePrev()
        }>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.27733 1.00004L2 7L7.27733 13" stroke="black" stroke-width="2" />
        </svg>

      </button>
      <SwiperSliderCustom normalizeChildrens={true} ref={refSlider} sliderConfig={sliderConfig}>
        {children}
      </SwiperSliderCustom>
      <button
        className={`arrow-right`}
        onClick={() =>
          refSlider?.current?.swiper.slideNext()
        }>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.27735 1.00004L6.55469 7L1.27735 13" stroke="black" stroke-width="2" />
        </svg>
      </button>
    </div>
  )


}
