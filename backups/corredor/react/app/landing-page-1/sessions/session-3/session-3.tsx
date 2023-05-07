import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS, imageHelper } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { Image, Link, SwiperSliderCustom } from '../../../../common'
import { swiperGenerateConfigProps } from '../../../../common/swiper-slider-custom/utils'
import { Navigation, Pagination } from 'swiper'
import { SliderArrows } from '../../../../common/swiper-slider-custom/arrows/slider-arrows'
import { SwiperRef } from 'swiper/react'
import { SanitizeText } from '../../../../common/sanitize-text/sanitize-text'

export const Session3 = () => {
  const { _screen_session_3 } = useLandingPage1Provider()
  const contextSession = _screen_session_3?.[0]

  const refSlider = React.useRef<SwiperRef>(null)

  if (!contextSession) {
    return <></>
  }

  const css = useCssHandles(CSS_HANDLES)

  const sliderConfig = {
    ...swiperGenerateConfigProps({
      defaultConfig: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop: true,
        pagination: {
          clickable: true
        },
        navigation: false,
        modules: [Navigation, Pagination]
      }
    })
  }

  return (
    <div className={generateCSS('container-component', ['session-3', 'section'], css)}>
      <SanitizeText text={contextSession?.title ?? ''} variations={{ variationColor: 'black', variationFont: '1', variationType: 'title' }} as={'h2'} customClass='main' />

      <SwiperSliderCustom allCustomConfig={sliderConfig} ref={refSlider}>
        {contextSession?.list_banner?.map((item, index) => {
          const { alt, href, hrefTarget } = imageHelper.getImageContextAttributes(item?._screen_image)

          return (
            <div className={generateCSS('list-item', ['session-3', 'slider'], css)} key={index}>
              <Link href={href} target={hrefTarget} title='comprar agora' >
                <Image alt={alt} srcResponsives={imageHelper.getSrcResponsiveOnContext(item?._screen_image)} />
              </Link>

              <div className={generateCSS('container-content', ['session-3', 'info'], css)}>
                <div className={generateCSS('container-content', ['session-3', 'icon-and-title'], css)}>
                  <Image alt={item?.title} title={item?.title} src={item?.screen_icon?.[0]?.src} />
                  <SanitizeText text={item?.title ?? ''} variations={{ variationColor: 'black', variationFont: '2', variationType: 'title' }} as={'h3'} />
                </div>

                <SanitizeText text={item?.description ?? ''} variations={{ variationColor: 'black', variationFont: '1', variationType: 'text' }} as={'p'} />

                <Link href={href} target={hrefTarget} title='comprar agora' >
                  <SanitizeText text={'COMPRAR AGORA >'} variations={{ variationColor: 'blue', variationFont: '1', variationType: 'link' }} as={'p'} />
                </Link>
              </div>
            </div>
          )
        })}
      </SwiperSliderCustom>
      <SliderArrows
        onClickNext={() => refSlider?.current?.swiper?.slideNext()}
        onClickPrev={() => refSlider?.current?.swiper?.slidePrev()} />
    </div>
  )
}
