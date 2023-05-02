import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../modules'
import { ProductContextProvider } from 'vtex.product-context'
import { ProductListContext } from 'vtex.product-list-context'
import { ProductSummary01 } from '../../product-summary/product-summary'

import { SwiperRef } from 'swiper/react'
import { SwiperSliderCustom } from '../../../common/swiper-slider-custom/swiper-slider-custom'
import { swiperGenerateConfigProps } from '../../../common/swiper-slider-custom/utils'
import { Navigation } from 'swiper'
import { SliderArrows } from "../../shelf/arrows/slider-arrows";
import { ResponseRouteNormalize } from '../../../services/presentation'
import { VtexProductModel } from '../../../services/domain/models'
import { MaybeProduct } from 'vtex.product-context/react/ProductTypes'


// https://github.dev/vtex-apps/product-list-context
// https://github.com/vtex-apps/product-summary/blob/master/docs/ProductSummarySKUSelector.md

export const ShelfMobile = ({ recommendations }: ResponseRouteNormalize) => {
  console.log(`🚀 ~ ShelfMobile ~ recommendations:`, recommendations)
  const css = useCssHandles(CSS_HANDLES)
  const { ProductListProvider } = ProductListContext
  // @ts-ignore
  const refSlider = React.useRef<Array<SwiperRef>>(Array.from({ length: recommendations?.length ?? 0 }, () => React.createRef()))


  const sliderConfig = {
    ...swiperGenerateConfigProps({
      defaultConfig: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        pagination: {
          clickable: true
        },
        navigation: false,
        modules: [Navigation],
        breakpoints: {
          450: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          600: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },

          800: {
            slidesPerView: 4,
            slidesPerGroup: 4
          }
        }
      }
    })
  }

  if (!recommendations || recommendations?.length === 0) {
    return <></>
  }
  return (
    <div className={generateCSS('container-component', ['shelf-list-mobile'], css)}>
      {recommendations?.map((item, index) => {
        console.log(`🚀 ~ {recommendations?.map ~ item:`, item)
        if (item?.products?.length === 0 || !item?.products) {
          return <></>
        }

        return (
          <div className={generateCSS('container-component', ['default'], css, { suffix: ['shelf-mobile', `shelf-number-${index}`] })} key={index}>
            {index === 0 && (
              <div className={generateCSS('container-content', ['title'], css, { suffix: ['shelf'] })}>
                <h3 className={generateCSS('title', ['header'], css, { suffix: ['shelf'] })}>
                  {item?.title}
                </h3>
              </div>
            )}
            <ProductListProvider listName={item?.googleGTMTitle ?? 'Shelf'}>
              <SwiperSliderCustom ref={(refSlider as any)?.current?.[index]} allCustomConfig={sliderConfig}>
                {item?.products?.map((product: VtexProductModel, index: any) => {
                  return (
                    <div key={index}>
                      <ProductContextProvider product={product as unknown as MaybeProduct} query={{ products: item?.products }} >
                        <ProductSummary01 />
                      </ProductContextProvider>
                    </div>
                  )
                })}
              </SwiperSliderCustom>
            </ProductListProvider>
          </div>
        )
      })}
      <div className={generateCSS('container-content', ['shelf', 'slider-arrows'], css)}>
        <SliderArrows
          onClickNext={() => (refSlider as any).current?.forEach((item: any) => item?.current?.swiper.slideNext())}
          onClickPrev={() => (refSlider as any).current?.forEach((item: any) => item?.current?.swiper.slidePrev())} />
      </div>
    </div>
  )
}
