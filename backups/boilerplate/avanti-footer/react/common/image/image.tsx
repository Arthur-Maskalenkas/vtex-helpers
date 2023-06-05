import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { BuildImageAttrsProps, buildImageAttrs, changeImageUrlSize, loadImage } from './utils'
import { Skeleton } from '../skeleton/skeleton'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useRuntime } from 'vtex.render-runtime'

export type ImageSize = {
  height?: string;
  width?: string;
  src?: string;
};

type ImageProps = {
  mobile?: ImageSize;
  desktop?: ImageSize;
  className?: string;
}

export const Image = ({ desktop = {}, mobile = {}, className = 'default', ...imgProps }: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [img, setImg] = React.useState<Partial<React.ImgHTMLAttributes<HTMLImageElement>> | null>(null)

  const css = useCssHandles(CSS_HANDLES)

  const { deviceInfo } = useRuntime()
  const isMobile = deviceInfo?.isMobile
  const imageSize = isMobile ? mobile : desktop

  const { width = null, height = null, src = null } = imageSize;

  const ClassName = isMobile ? 'mobile' : 'desktop';


  // Apply lazy-loading
  React.useEffect(() => {
    const getImages = async () => {
      setIsLoading(true)
      try {
        if (!Boolean(src)) {
          return
        }

        // fetch image
        const URLImage = changeImageUrlSize(imageSize)

        if (!URLImage) {
          return
        }

        const imgFetched = await loadImage(URLImage)
        const cssGenerated = generateCSS('image', [className, ClassName], css)

        const imageTagProps: BuildImageAttrsProps = {
          className: cssGenerated,
          src: imgFetched?.src,
          ...imgProps,
          widthImg: width,
          heightImg: height,
        }

        const imageToSet = buildImageAttrs(imageTagProps)

        // update list with images builded
        setImg(imageToSet)
      } catch (error) {
        console.error('Erro ao carregar imagem:', error);
      } finally {
        setIsLoading(false)
      }
    }

    getImages()
  }, [deviceInfo?.isMobile])


  if (isLoading) {
    return <Skeleton desktop={imageSize} mobile={imageSize} isMobile={isMobile} />
  }

  if (!img) {
    return <></>
  }
  return (

    <div className={generateCSS('container-component', ['image', ClassName], css)}>
      <img {...img} />
    </div>
  )
}
