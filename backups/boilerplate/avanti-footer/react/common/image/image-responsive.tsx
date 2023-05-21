import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { BuildImageAttrsProps, buildImageAttrs, changeImageUrlSize, loadImage } from './utils'
import { Skeleton } from '../skeleton/skeleton'
import { CSS_HANDLES, generateCSS } from '../../modules'

export type ImageResponsiveProps = {
  isMobile: boolean

  mobile?: {
    height?: string
    width?: string
    src?: string
  }

  desktop?: {
    height?: string
    width?: string
    src?: string
  }

  className?: string

} & Partial<HTMLImageElement>

export const ImageResponsive = ({ isMobile, desktop, mobile, className = 'default', ...imgProps }: ImageResponsiveProps) => {
  const css = useCssHandles(CSS_HANDLES)

  const responsiveWidthImage = isMobile ? mobile?.width : desktop?.width
  const responsiveHeightImage = isMobile ? mobile?.height : desktop?.height
  const responsiveSrcImage = isMobile ? mobile?.src : desktop?.src
  const responsiveClassName = isMobile ? 'mobile' : 'desktop'

  const [isLoading, setIsLoading] = React.useState(true);
  const [img, setImg] = React.useState<Partial<React.ImgHTMLAttributes<HTMLImageElement>> | null>(null)

  // Apply lazy-loading
  React.useEffect(() => {
    const getImages = async () => {
      setIsLoading(true)
      try {
        // fetch image
        const responsiveURLImage = changeImageUrlSize((responsiveSrcImage), `${responsiveWidthImage}`, `${responsiveHeightImage}`) ?? ''

        if (!Boolean(responsiveURLImage)) {
          return
        }

        const imgFetched = await loadImage(responsiveURLImage)
        const cssGenerated = generateCSS('image', [className, responsiveClassName], css)

        const minAttrsToGenerateImage: BuildImageAttrsProps = {
          widthImg: responsiveWidthImage,
          heightImg: responsiveHeightImage,
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
  }, [desktop, mobile, isMobile])


  if (isLoading) {
    return <Skeleton height={Number(responsiveHeightImage ?? 30)} width={Number(responsiveWidthImage ?? 30)} />
  }
  return (

    <div className={generateCSS('container-component', ['image', responsiveClassName], css)}>
      <img {...img} />
    </div>
  )
}
