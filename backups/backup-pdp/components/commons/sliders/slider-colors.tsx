import React from 'react'
import { ListRender } from '../slider/list-render'
import { Link } from 'vtex.render-runtime'
import { useBuyBoxContext } from '../../../context'
import { useProduct } from 'vtex.product-context'
import { InputImage } from "../input-image";

export const SliderColors = () => {
  const { listColors } = useBuyBoxContext()
  const currentProductId = useProduct()?.product?.productId

  return (
    <div className={'container-app-list-selector container-with-border container-app-slider-colors slider list-selector container color'}>
      <div className="container-title">
        <h3 className={'list-title'}>CORES</h3>
      </div>

      <ListRender
        ifNotHaveSufficientLengthRenderNormalList={true}
        quantitySlidesToShowOnDesktop={6}
        quantitySlidesToShowOnMobile={4}
        prefixClassName={'color'}
        items={listColors ?? []}
        typeVariation={'color'}
      >
        {listColors?.map((item, index) => {
          const isActive = item.productId === currentProductId

          const { productName = '', firstItemId = '', href = '', image = '', productId = '' } = item

          return (
            <div key={index} className="list-selector color content">
              <Link to={item?.href ?? ''}>
                <InputImage
                  active={isActive}
                  alt={image}
                  id={productId}
                  name={productName}
                  src={image}
                />
              </Link>
            </div>
          )
        })}
      </ListRender>
    </div>
  )
}
