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

// Adicionar Link
// Exportar os schemas a partir do componente

export type ImageProps = {
  mobile?: ImageSize;
  desktop?: ImageSize;
  allDevices?: ImageSize
  className?: string;
  title?: string
  alt?: string
}

export const Image = ({ desktop = {}, mobile = {}, className = 'default', allDevices = {}, ...imgProps }: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [img, setImg] = React.useState<Partial<React.ImgHTMLAttributes<HTMLImageElement>> | null>(null)
  console.log(`🚀 ~ file: image.tsx:26 ~ Image ~ img:`, img)

  const css = useCssHandles(CSS_HANDLES)
  console.log(`🚀 ~ file: image.tsx:95 ~ Image ~ allDevices:`, allDevices)
  console.log(`🚀 ~ file: image.tsx:95 ~ Image ~ mobile:`, mobile)
  console.log(`🚀 ~ file: image.tsx:95 ~ Image ~ desktop:`, desktop)
  const { deviceInfo } = useRuntime()
  const isMobile = deviceInfo?.isMobile

  const deviceChoosed = isMobile ? mobile : desktop
  const hasSrcOnDevice = deviceChoosed?.src !== '' && !!deviceChoosed?.src

  const imageSize = hasSrcOnDevice ? deviceChoosed : allDevices
  console.log(`🚀 ~ file: image.tsx:32 ~ Image ~ imageSize:`, imageSize)

  const { width = null, height = null, src = null } = imageSize
  console.log(`🚀 ~ file: image.tsx:38 ~ Image ~ src:`, src)

  const ClassName = isMobile ? 'mobile' : 'desktop';
  console.log(`🚀 ~ file: image.tsx:41 ~ Image ~ ClassName:`, ClassName)


  // Apply lazy-loading
  React.useEffect(() => {
    const getImages = async () => {
      setIsLoading(true)
      try {
        console.log(`🚀 ~ file: image.tsx:50 ~ getImages ~ src:`, src)

        if (!Boolean(src)) {
          return
        }

        // fetch image
        const URLImage = changeImageUrlSize(imageSize)
        console.log(`🚀 ~ file: image.tsx:53 ~ getImages ~ URLImage:`, URLImage)

        if (!URLImage) {
          return
        }

        const imgFetched = await loadImage(URLImage)
        console.log(`🚀 ~ file: image.tsx:59 ~ getImages ~ imgFetched:`, imgFetched)
        const cssGenerated = generateCSS('image', [className, ClassName], css)

        const imageTagProps: BuildImageAttrsProps = {
          className: cssGenerated,
          src: imgFetched?.src,
          ...imgProps,
          widthImg: width,
          heightImg: height,
        }

        const imageToSet = buildImageAttrs(imageTagProps)
        console.log(`🚀 ~ file: image.tsx:70 ~ getImages ~ imageToSet:`, imageToSet)

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

