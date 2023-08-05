import React, { InputHTMLAttributes } from 'react'
import { ListPrice } from 'vtex.product-price'
import { useRuntime } from 'vtex.render-runtime';
import { changeImageUrlSize } from './utils';

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  src: string;
  alt: string;
  id: string
  name: string
  active: boolean
}


export const InputImage = ({ active = false, name = '', src = '', id = '', alt = '', ...restProps }: ImageInputProps) => {


  const { deviceInfo: { isMobile } } = useRuntime()
  const size = isMobile ? '120' : '80'

  return (
    <div className="container-app-input-image">
      <label htmlFor={id} className={active ? 'active' : 'disabled'}>
        <input type="radio" id={id} name={name} {...restProps} />
        <img src={changeImageUrlSize(src, size, size)} alt={alt} />
      </label>
    </div>
  )
}
