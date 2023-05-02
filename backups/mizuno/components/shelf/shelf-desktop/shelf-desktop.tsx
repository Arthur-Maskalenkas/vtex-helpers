import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../modules'
import { ProductContextProvider } from 'vtex.product-context'
import { ProductListContext } from 'vtex.product-list-context'
import { ProductSummary01 } from '../../product-summary/product-summary'
import { SwiperSliderCustom } from '../../../common/swiper-slider-custom/swiper-slider-custom'
import { SwiperRef } from 'swiper/react'
import { Navigation } from 'swiper'
import { swiperGenerateConfigProps } from '../../../common/swiper-slider-custom/utils'
import { SliderArrows } from "../../shelf/arrows/slider-arrows";
import { ResponseRouteNormalize } from '../../../services/presentation'
import { VtexProductModel } from '../../../services/domain/models'
import { MaybeProduct } from 'vtex.product-context/react/ProductTypes'

export const ShelfDesktop = ({ recommendations }: ResponseRouteNormalize) => {
  console.log(`🚀 ~ recommendations:`, recommendations)
  const css = useCssHandles(CSS_HANDLES)
  const { ProductListProvider } = ProductListContext

  // @ts-ignore
  const refSlider = React.useRef<Array<SwiperRef>>(Array.from({ length: recommendations?.length ?? 0 }, () => React.createRef()))
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
        modules: [Navigation],
        breakpoints: {
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          }
        }
      }
    })
  }


  if (!recommendations || recommendations?.length === 0) {
    return <></>
  }
  return (
    <div className={generateCSS('container-component', ['shelf-list-desktop'], css)}>
      {recommendations?.map((item, index) => {
        console.log(`🚀 ~ {recommendations?.map ~ item:`, item)
        if (item?.products?.length === 0 || !item?.products) {
          return <></>
        }

        return (
          <div
            className={generateCSS('container-component', ['default'], css, { suffix: ['shelf-desktop', `shelf-number-${index}`] })}
            key={index}>
            <div className={generateCSS('container-content', ['title'], css, { suffix: ['shelf'] })}>
              <h3 className={generateCSS('title', ['header'], css, { suffix: ['shelf'] })}>
                {item?.title}
              </h3>
            </div>
            <ProductListProvider listName={item?.googleGTMTitle || ''}>
              <SwiperSliderCustom ref={(refSlider as any)?.current?.[index]} allCustomConfig={sliderConfig} >
                {[...(item?.products)?.slice(0, 6)]?.map((product: VtexProductModel, index: number) => {
                  return (
                    <ProductContextProvider product={product as unknown as MaybeProduct} query={{ products: item.products }} key={index}>
                      <ProductSummary01 index={index} />
                    </ProductContextProvider>
                  )
                })}
              </SwiperSliderCustom>
            </ProductListProvider>
            <SliderArrows
              onClickNext={() => (refSlider as any).current[index]?.current?.swiper.slideNext()}
              onClickPrev={() => (refSlider as any).current[index]?.current?.swiper.slidePrev()} />
          </div>
        )
      })}

    </div>
  )

}
