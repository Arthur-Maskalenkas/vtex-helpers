import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, TFallback, generateCSS, imageHelper } from '../modules'
import { useDevice } from 'vtex.device-detector'
import { ResponsiveImages } from '../context/landing-page-1/types'

export type ImageProps = {
  renderOn?: Array<'phone' | 'desktop' | 'tablet'>
  srcResponsives?: ResponsiveImages
  fallback?: TFallback
  modifier?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

export const Image = ({ renderOn = ['desktop', 'phone', 'tablet'], srcResponsives, src = '', fallback, modifier = '', ...imageProps }: ImageProps) => {
  const { device } = useDevice()
  const srcImage = Boolean(srcResponsives)
    ? imageHelper.generateResponsiveSrc(srcResponsives, device as any)
    : imageHelper?.generateSrc(src)

  const css = useCssHandles(CSS_HANDLES)

  if (!renderOn.includes(device as any)) {
    return <></>
  }

  return (<img {...imageProps} src={srcImage} className={generateCSS('container-component', ['image', modifier], css)} />)
}
