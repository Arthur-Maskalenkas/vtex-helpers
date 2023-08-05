import React, { InputHTMLAttributes } from 'react'
import { ListPrice } from 'vtex.product-price'
interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  isActive: boolean
  text: string
  isDisabled: boolean
  value: any
}


export const InputText = ({ value = '', isActive = false, isDisabled, name = '', text, src = '', id = '', alt = '', ...restProps }: ImageInputProps) => {


  return (
    <div className="container-app-input-text">
      <label htmlFor={id} className={`${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}>
        <input value={value} disabled={isDisabled} type="radio" id={id} name={name} {...restProps} />
        <span>{text}</span>
      </label>
    </div>
  )
}
