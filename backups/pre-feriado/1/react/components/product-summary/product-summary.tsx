import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useProduct } from 'vtex.product-context'
import { CSS_HANDLES, generateCSS } from '../../modules/utilities/generate-css'
import { AddToCart, Prices, SimilarSelector } from './components'
import { RefinedData } from './modules/refined-data'
import { Link } from 'vtex.render-runtime'
import { changeImageUrlSize } from './modules/image/normalize'
import { useRuntime } from 'vtex.render-runtime'
import { VTEXProduct } from '../../services/modules/api-manager-smart-hint/types-api-vtex'


export const ProductSummary01 = () => {
  const [listProductSimilar, setListProductSimilar] = React.useState<VTEXProduct[] | null>(null)
  const [listSimilarisLoading, setListSimilarIsLoading] = React.useState<boolean>(true)

  const css = useCssHandles(CSS_HANDLES)
  const ctx = useProduct()

  const { deviceInfo } = useRuntime()

  const isMobile = deviceInfo.isMobile
  const isDesktop = !deviceInfo?.isMobile

  const sizeImage = isMobile ? '160' : '300'
  const image1 = changeImageUrlSize((ctx?.selectedItem?.images?.[0]?.imageUrl ?? ''), `${sizeImage}`, `${sizeImage}`)
  const image2 = changeImageUrlSize((ctx?.selectedItem?.images?.[1]?.imageUrl ?? ''), `${sizeImage}`, `${sizeImage}`)


  console.log(`🚀 ~ ProductSummary01 ~ ctx:`, ctx)
  const currentProduct = ctx?.product as unknown as VTEXProduct

  const refinedData = new RefinedData()
  const skuList = refinedData.getSku(currentProduct)
  if (ctx?.product?.productId === '4844') {
    console.log(`🟢🟢 ~ ProductSummary01 ~ ctx:`, ctx)
  }

  React.useEffect(() => {
    setListSimilarIsLoading(true)
    refinedData?.getVariants(currentProduct)?.then(response => {
      setListProductSimilar(response)
      setListSimilarIsLoading(false)
    })
  }, [])

  console.log(`🚀 ~ ProductSummary01 ~ image1:`, image1)


  return (
    <div className={generateCSS('container-component', ['product-summary'], css)}>
      <Link
        className={generateCSS('link', ['product-summary'], css)}
        page='store.product'
        params={{
          slug: currentProduct && currentProduct?.linkText,
          id: currentProduct && currentProduct.productId,
          __listName: 'shelf',
        }}
      >
        <div className={generateCSS('container-content', ['product-summary', 'product-image'], css)}>
          <img
            loading='lazy'
            height={`${sizeImage}px`}
            width={`${sizeImage}px`}
            decoding='async'
            className={generateCSS('image', ['product-summary', '1'], css)} src={image1} title={ctx?.selectedItem?.name} />
          <img
            loading='lazy'
            height={`${sizeImage}px`}
            width={`${sizeImage}px`}
            decoding='async'

            className={generateCSS('image', ['product-summary', '2'], css)} src={image2} title={ctx?.selectedItem?.name} />
          {isDesktop && (
            <AddToCart skuList={skuList} />
          )}
        </div>
        <div className={generateCSS('container-content', ['product-summary', 'product-info'], css)}>
          <div>
            <h3 className={generateCSS('title', ['product-summary', 'product-name'], css)}>{ctx?.selectedItem?.name}</h3>
          </div>
          <div className={generateCSS('container-content', ['product-summary', 'rest'], css)}>
            <Prices quantityColors={listProductSimilar?.length} />
          </div>
          {isDesktop && (
            <div>
              <SimilarSelector
                listProductSimilar={listProductSimilar}
                listSimilarisLoading={listSimilarisLoading}
              />
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
