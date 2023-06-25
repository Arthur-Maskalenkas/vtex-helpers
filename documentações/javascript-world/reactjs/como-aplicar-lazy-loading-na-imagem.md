import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../../modules'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import { buildImageAttrs, changeImageUrlSize, loadImage } from './utils'
import { Skeleton } from '../../../../common'

export type ProductImageProps = {
  ctx: Partial<ProductContextState> | undefined,
  isMobile: boolean

  mobileSize?: string
  desktopSize?: string
}


export  const loadImage = async (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export const buildImageAttrs = (imgElement?:HTMLImageElement ,size?:number, customClass?: string, title?:string):Partial<React.ImgHTMLAttributes<HTMLImageElement>> => {
  const data ={
    loading: 'lazy',
    decoding: 'async',
    height: size,
    width: size,
    src: imgElement?.src,
    alt: title,
    title,
    className: customClass,
  }

  return data as any
}

export const ProductImage = ({ isMobile, ctx, mobileSize = '160', desktopSize = '300' }: ProductImageProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const sizeImage = isMobile ? mobileSize : desktopSize

  const [isLoading, setIsLoading] = React.useState(true);
  const [listImg, setImgList] = React.useState<Partial<Array<React.ImgHTMLAttributes<HTMLImageElement>>> | []>()

  // Apply lazy-loading
  React.useEffect(() => {
    const getImages = async () => {
      setIsLoading(true)
      const pathImgList = ctx?.selectedItem?.images ?? []

      try {
        // fetch image
        const imgFetchedList = await Promise.all(pathImgList?.slice(0, 2)
          ?.map((item) => {
            const sizeImageUrl = changeImageUrlSize((item?.imageUrl ?? ''), `${sizeImage}`, `${sizeImage}`) ?? ''

            if (!Boolean(sizeImageUrl)) {
              return
            }

            return loadImage(sizeImageUrl)
          })) ?? []


        // build a image object
        const imgToSetList = imgFetchedList?.map((item, index) => {
          const cssGenerated = generateCSS('image', ['product-summary', `${index + 1}`], css)
          const currentTitle = ctx?.selectedItem?.name

          return buildImageAttrs(item, Number(sizeImage), cssGenerated, currentTitle)
        })

        // update list with images builded
        setImgList(imgToSetList ?? [])
      } catch (error) {
        console.error('Erro ao carregar imagem:', error);
      } finally {
        setIsLoading(false)
      }
    }

    getImages()
  }, [ctx?.selectedItem?.images])

  const hasSecondImage = Boolean(listImg?.[1])

  if (isLoading) {
    return <Skeleton height={Number(sizeImage)} width={Number(sizeImage)} />
  }

  return (

    <div className={generateCSS('container-component', ['product-image', hasSecondImage ? 'hide-on-hover' : 'hover'], css)}>
      {(listImg as any)?.map((item: any, index: number) => {
        return <img key={index} {...item} />
      })}
    </div>
  )
}
