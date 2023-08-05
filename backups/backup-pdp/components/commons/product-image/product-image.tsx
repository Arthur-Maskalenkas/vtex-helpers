import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { changeImageUrlSize } from './utils'


export type ProductImageProps = {
  image: string
  alt: string
}

export const ProductImage = ({
  image = '',
  alt = ''
}: ProductImageProps) => {
  const { deviceInfo: { isMobile } } = useRuntime()

  const size = isMobile ? '120' : '80'
  return (
    <img className='product-image' src={changeImageUrlSize(image, size, size)} alt={alt}
    />
  )
}
