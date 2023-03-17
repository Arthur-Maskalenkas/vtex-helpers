import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, GenerateCMSLink } from '../modules'

export type TImage = {
  fallback?: string
  modifier?: string
  isMobile?: boolean
  useResponsive?: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

export const Image = ({ isMobile, useResponsive = false, src = '', fallback = '100x100', modifier }: TImage) => {
  const css = useCssHandles(CSS_HANDLES)
  const srcImage = src !== '' ? GenerateCMSLink(src) : GenerateCMSLink(fallback)
  const classNameIfIsMobile = isMobile ? 'mobile-only' : 'desktop-only'

  return (
    <img
      src={srcImage}
      className={`
      ${applyModifiers(css['container-component'], ['image', `image-${modifier}`])}
      ${useResponsive ? css[classNameIfIsMobile] : ''}`}>
      image
    </img>
  )
}
