import React, { InputHTMLAttributes } from 'react'
import { CommonProps, commonStylesGenerator } from '../utils'
import './styles.css'

export type InputRadioProps = {
  label: string
  name: string
  id: string | number
  value: {
    ProductFieldReferenceID: string,
    ProductFieldReferenceValue: string
  }
} & CommonProps & InputHTMLAttributes<HTMLInputElement>

export const InputRadio = ({ children, variant = 'primary', className, label, name, value, id, ...props }: InputRadioProps) => {
  return (
    <label hidden className={commonStylesGenerator('InputRadio', variant, className)} aria-label={`Selecionar a opção ${label}`}>
      <input type="radio" name={name} data-product-field-reference-id={value?.ProductFieldReferenceID} data-product-field-reference-value={value?.ProductFieldReferenceValue} {...props} value={label} />
      {children}
    </label>
  )
}


