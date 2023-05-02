import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../../modules/utilities/generate-css'
import { useProductDispatch } from 'vtex.product-context'
import { RefinedData } from '../../modules/refined-data'
import { changeImageUrlSize } from '../../modules/image/normalize'
import { Skeleton } from '../../../../common'
import { VtexProductModel } from '../../../../services/domain/models'

export type SimilarSelectorProps = {
  listProductSimilar: VtexProductModel[] | null
  listSimilarisLoading: boolean
}

export const SimilarSelector = ({ listSimilarisLoading, listProductSimilar }: SimilarSelectorProps) => {
  const refinedData = new RefinedData()
  const css = useCssHandles(CSS_HANDLES)


  const productDispatch = useProductDispatch()

  const handleSwitchSimilar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: VtexProductModel) => {
    e.preventDefault()
    e.stopPropagation()

    productDispatch?.({
      type: 'SET_PRODUCT',
      args: { product: { ...product, clusterHighlights: [], pickValidArray: [] } as any },
    })

    productDispatch?.({
      type: 'SET_SELECTED_ITEM',
      args: { item: product?.items?.find(item => item?.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0) }
    })


  }

  if (listSimilarisLoading) {
    return (
      <div className={generateCSS('container-content', ['similar-selector', 'skeleton'], css)}>
        <Skeleton height={50} />
      </div>
    )
  }

  return (
    <div className={generateCSS('container-component', ['similar-selector'], css)}>
      <ul
        className={generateCSS('list', ['similar-selector', 'products-similar'], css)}
        aria-label='Lista de cores' style={{ display: 'flex' }}>
        {listProductSimilar?.map((item, index) => {
          const colorTitle = String(`visualizar ${refinedData?.getColor(item)}`).toLowerCase()
          const image1 = changeImageUrlSize((item?.items?.[0]?.images?.[0]?.imageUrl ?? ''), '45', '45')
          return (
            <li title={colorTitle} className={generateCSS('list-item', ['similar-selector', 'product-similar'], css)} key={index} >
              <button className={generateCSS('button', ['similar-selector', 'switch-product-similar'], css)} onClick={e => handleSwitchSimilar(e, item)}>
                <img
                  loading='lazy'
                  decoding='async'
                  className={generateCSS('image', ['similar-selector', 'similar'], css)}
                  width={45} height={45} src={image1} alt={colorTitle} />
              </button>
            </li>
          )
        })}
      </ul>

    </div>
  )
}
