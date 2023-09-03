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

const Container = ({ children }: React.PropsWithChildren) => {
  const hasIcon = React.Children.count(children) > 1
  const classNameVar = hasIcon ? 'container-app-input has-icon' : 'container-app-input'

  return (
      <div className={`container-app-input ${classNameVar}`}>
        {children}
      </div>
  )
}

export const Input = () => null

Input.Container = Container
Input.Text = Text