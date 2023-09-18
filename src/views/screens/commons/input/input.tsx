import React, { type HTMLInputTypeAttribute, type InputHTMLAttributes } from 'react'
import './styles.scss'

const Container = ({ children }: React.PropsWithChildren) => {
  return (
        <div className="component-input container common">
            {children}
        </div>
  )
}
const Label = ({ children, htmlFor }: React.PropsWithChildren<{ htmlFor: string }>) => {
  return (
        <label htmlFor={htmlFor} className="component-input label common">
            {children}
        </label>
  )
}

export const Input = ({ value, id, name, ...rest }: InputHTMLAttributes<HTMLInputTypeAttribute>) => {
  return <Input {...rest} value={value} id={id} name={name} className="component-input input common" />
}

Input.Container = Container
Input.Label = Label