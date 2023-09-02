import React, { type ButtonHTMLAttributes, type DetailedHTMLProps, type PropsWithChildren } from 'react'
import './styles.scss'
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ className, children, ...props }) => {
  const classNameResolved = `container-app-button  ${className} atom`

  return <button className={classNameResolved} {...props}>{children}</button>
}
