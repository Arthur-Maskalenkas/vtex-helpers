import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS, imageHelper } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { Image, Link, SwiperSliderCustom } from '../../../../common'
import { swiperGenerateConfigProps } from '../../../../common/swiper-slider-custom/utils'
import { Navigation } from 'swiper'
import { SliderArrows } from '../../../../common/swiper-slider-custom/arrows/slider-arrows'
import { SwiperRef } from 'swiper/react'
import { SanitizeText } from '../../../../common/sanitize-text/sanitize-text'

export const Session4 = () => {
  const { _screen_session_4 } = useLandingPage1Provider()
  const contextSession = _screen_session_4?.[0]

  const refSlider = React.useRef<SwiperRef>(null)

  if (!contextSession) {
    return <></>
  }

  const css = useCssHandles(CSS_HANDLES)

  const sliderConfig = {
    ...swiperGenerateConfigProps({
      defaultConfig: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
          clickable: true
        },
        navigation: false,
        modules: [Navigation]
      }
    })
  }

  return (
    <div className={generateCSS('container-component', ['session-4', 'section'], css)}>
      <SanitizeText text={contextSession?.title ?? ''} variations={{ variationColor: 'black', variationFont: '1', variationType: 'title' }} customClass='main' as={'h2'} />
      <SanitizeText text={contextSession?.description ?? ''} variations={{ variationColor: 'black', variationFont: '1', variationType: 'text' }} customClass='main' as={'h3'} />

      <SwiperSliderCustom allCustomConfig={sliderConfig} ref={refSlider}>
        {contextSession?.list_banner?.map((item, index) => {
          const { alt, href, hrefTarget } = imageHelper.getImageContextAttributes(item?._screen_image)

          return (
            <div className={generateCSS('list-item', ['session-4', 'slider'], css)} key={index}>
              <Link href={href} target={hrefTarget} title='saiba mais'>
                <Image alt={alt} srcResponsives={imageHelper.getSrcResponsiveOnContext(item?._screen_image)} />
              </Link>

              <div className={generateCSS('container-content', ['session-4', 'info'], css)}>
                <SanitizeText text={item?.title ?? ''} variations={{ variationColor: 'black', variationFont: '2', variationType: 'title' }} as={'h3'} />
                <SanitizeText text={item?.description ?? ''} variations={{ variationColor: 'black', variationFont: '1', variationType: 'text' }} as={'h4'} />

                <Link href={href} target={hrefTarget} title='saiba mais' >
                  <SanitizeText text={'SAIBA MAIS +'} variations={{ variationColor: 'blue', variationFont: '1', variationType: 'link' }} as={'p'} />
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
