import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { BuildImageAttrsProps, buildImageAttrs, changeImageUrlSize, loadImage } from './utils'
import { Skeleton } from '../skeleton/skeleton'
import { CSS_HANDLES, generateCSS } from '../../modules'

export type ImageNormalProps = {
  heightImg?: string
  widthImg?: string
  src: string

  className?: string
} & Partial<HTMLImageElement>

export const ImageNormal = ({ className = 'default', heightImg, src, widthImg, ...imgProps }: ImageNormalProps) => {
  const css = useCssHandles(CSS_HANDLES)

  const widthImage = widthImg
  const heightImage = heightImg
  const srcImage = src

  const [isLoading, setIsLoading] = React.useState(true);
  const [img, setImg] = React.useState<Partial<React.ImgHTMLAttributes<HTMLImageElement>> | null>(null)

  // Apply lazy-loading
  React.useEffect(() => {
    const getImages = async () => {
      if (!srcImage) {
        return
      }

      setIsLoading(true)
      try {
        // fetch image
        const responsiveURLImage = changeImageUrlSize((srcImage), `${widthImage}`, `${heightImage}`) ?? ''

        if (!Boolean(responsiveURLImage)) {
          return
        }

        const imgFetched = await loadImage(responsiveURLImage)
        const cssGenerated = generateCSS('image', [className], css)

        const minAttrsToGenerateImage: BuildImageAttrsProps = {
          widthImg: widthImage,
          heightImg: heightImage,
          className: cssGenerated,
          src: imgFetched?.src,
          ...imgProps
        }

        const imageToSet = buildImageAttrs(minAttrsToGenerateImage)

        // update list with images builded
        setImg(imageToSet)
      } catch (error) {
        console.error('Erro ao carregar imagem:', error);
      } finally {
        setIsLoading(false)
      }
    }

    getImages()
  }, [])


  if (isLoading) {
    return <Skeleton height={Number(heightImage ?? 30)} width={Number(widthImage ?? 30)} />
  }
  return (

    <div className={generateCSS('container-component', ['image'], css)}>
      <img {...img} />
    </div>
  )
}
