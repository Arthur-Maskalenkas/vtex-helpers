import React, { InputHTMLAttributes } from 'react'
import { CommonProps, commonStylesGenerator } from '../utils'
import './styles.css'

export type InputRadioProps = {
  label: string
  name: string
  id: string | number
} & CommonProps & InputHTMLAttributes<HTMLInputElement>

export const InputRadio = ({ children, variant = 'primary', className, label, name, ...props }: InputRadioProps) => {
  return (
    <label className={commonStylesGenerator('InputRadio', variant, className)} aria-label={`Selecionar a opção ${label}`}>
      <input type="radio" name={name} value={label} {...props} />
      {children}
    </label>
  )
}
