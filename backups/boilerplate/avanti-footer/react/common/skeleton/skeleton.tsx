import React from 'react'
import './skeleton.global.css'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'

export type SkeletonSize = {
  height?: string;
  width?: string;
};

type SkeletonProps = {
  mobile?: SkeletonSize;
  desktop?: SkeletonSize;
  className?: string;
  title?: string;
  isMobile?: boolean
} & SkeletonSize

export const Skeleton = ({ title = 'carregando', className, desktop, isMobile, mobile }: SkeletonProps) => {
  const css = useCssHandles(CSS_HANDLES)

  const imageSize = isMobile ? mobile : desktop
  const { width = null, height = null } = imageSize as SkeletonSize;

  const defaultStyle: React.CSSProperties = {
    maxWidth: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
    width: '100%'
  }

  return (
    <div title={title} style={defaultStyle} className={`loadingSkeleton ${className} ${generateCSS('container-component', ['skeleton'], css)}`} />
  )
}
