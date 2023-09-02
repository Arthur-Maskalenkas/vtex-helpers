import React from 'react'
import './styles.scss'

export type InputProps = {
  className?: string
  id: string
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Text = ({ className, ...props }: InputProps) => {
  return (
    <input type='text' {...props} className={`container-app-input text ${className} atom}`} />
  )
}

export const Input = {
  Text
}
