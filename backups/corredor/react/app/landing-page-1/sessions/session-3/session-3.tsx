import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS, imageHelper } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { Image, Link, RichTextCustom, SwiperSliderCustom } from '../../../../common'
import { swiperGenerateConfigProps } from '../../../../common/swiper-slider-custom/utils'
import { Navigation } from 'swiper'
import { SliderArrows } from '../../../../common/swiper-slider-custom/arrows/slider-arrows'
import { SwiperRef } from 'swiper/react'

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
        modules: [Navigation]
      }
    })
  }

  return (
    <section className={generateCSS('container-component', ['session-3'], css)}>
      <h2 className={generateCSS('title', ['session-3', 'main'], css)}>
        <RichTextCustom text={contextSession?.title} />
      </h2>

      <SwiperSliderCustom allCustomConfig={sliderConfig}>
        {contextSession?.list_banner?.map((item, index) => {
          return (
            <div className={generateCSS('container-component', ['session-3', 'slider-item'], css)} key={index}>
              <Link {...item}>
                <Image srcResponsives={imageHelper.getSrcResponsiveOnContext(item?._screen_image)} />

                <div className={generateCSS('container-content', ['session-3', 'icon-and-title'], css)}>
                  <Image src={item?.screen_icon?.[0]?.src} />
                  <h3 className={generateCSS('title', ['session-3', ''], css)}>
                    <RichTextCustom text={item?.title} />
                  </h3>
                </div>

                <h4 className={generateCSS('text', ['session-3', ''], css)}>
                  <RichTextCustom text={item?.description} />
                </h4>

                <p className={generateCSS('text', ['session-3', 'buy-now'], css)}>
                  COMPRAR AGORA {'>'}
                </p>
              </Link>
            </div>
          )
        })}
      </SwiperSliderCustom>
      <SliderArrows
        onClickNext={() => refSlider?.current?.swiper?.slideNext()}
        onClickPrev={() => refSlider?.current?.swiper?.slidePrev()} />
    </section>
  )
}
