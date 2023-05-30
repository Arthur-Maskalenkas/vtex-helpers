import React from 'react'
import './skeleton.global.css'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'

export interface SkeletonProps {
  width?: number
  height?: number
  borderRadius?: number
  title?: string
}

export const Skeleton = ({ borderRadius, height, width, title = 'carregando' }: SkeletonProps) => {
  const css = useCssHandles(CSS_HANDLES)


  const style: React.CSSProperties = {
    maxWidth: `${width}px` ?? '100%',
    height: `${height}px` ?? '100%',
    width: '100%',
    borderRadius: `${borderRadius}px` ?? '0px'
  }

  return (
    <div title={title} style={style} className={`loadingSkeleton ${generateCSS('container-component', ['skeleton'], css)}`} />
  )
}
