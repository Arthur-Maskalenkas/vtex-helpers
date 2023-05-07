import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS, imageHelper } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { Image, Link, RichTextCustom, SwiperSliderCustom } from '../../../../common'
import { swiperGenerateConfigProps } from '../../../../common/swiper-slider-custom/utils'
import { Navigation } from 'swiper'
import { SliderArrows } from '../../../../common/swiper-slider-custom/arrows/slider-arrows'
import { SwiperRef } from 'swiper/react'

export const Session6 = () => {
  const { _screen_session_6 } = useLandingPage1Provider()
  const contextSession = _screen_session_6?.[0]

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
    <div className={generateCSS('container-component', ['session-6', 'section'], css)}>
      <div className={generateCSS('container-content', ['session-6', 'left'], css)}>
        <h3 className={generateCSS('title', ['session-6', 'variation-1'], css)}>
          <RichTextCustom text={contextSession?.title} />
        </h3>

        <h4 className={generateCSS('text', ['session-6', 'variation-1'], css)}>
          <RichTextCustom text={contextSession?.description} />
        </h4>
        <SliderArrows
          onClickNext={() => refSlider?.current?.swiper?.slideNext()}
          onClickPrev={() => refSlider?.current?.swiper?.slidePrev()} />
      </div>

      <div className={generateCSS('container-content', ['session-6', 'right'], css)}>
        <SwiperSliderCustom allCustomConfig={sliderConfig}>
          {contextSession?.list_banner?.map((item, index) => {
            return (
              <div className={generateCSS('container-component', ['session-6', 'slider-item'], css)} key={index}>
                <Link {...item}>
                  <Image srcResponsives={imageHelper.getSrcResponsiveOnContext(item?._screen_image)} />

                  <h3 className={generateCSS('title', ['session-6', 'variation-1'], css)}>
                    {item?.title}
                    <RichTextCustom text={item?.title} />
                  </h3>

                  <h4 className={generateCSS('text', ['session-6', 'variation-1'], css)}>
                    <RichTextCustom text={item?.description} />
                  </h4>

                  <p className={generateCSS('link', ['session-6', 'variation-1'], css)}>
                    SAIBA MAIS +
                  </p>
                </Link>
              </div>
            )
          })}
        </SwiperSliderCustom>
      </div>

    </div>
  )
}
