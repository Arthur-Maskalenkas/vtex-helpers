import React, { type ButtonHTMLAttributes, type DetailedHTMLProps, type PropsWithChildren } from 'react'
import './styles.scss'
import { Icon, type IconProps } from '../icon'
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

export type ContainerProps = {
  icon?: IconProps
} & PropsWithChildren<ButtonProps>
export const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => {
  const classNameResolved = `container-app-button  ${className} atom`

  return (
      <button className={classNameResolved} {...props}>{children}
        {props.icon && <Icon {...props.icon} />}
      </button>
  )
}

export const Text = ({ children }: React.PropsWithChildren) => {
  const classNameResolved = 'container-app-text'

  return (
      <button className={classNameResolved}>{children}</button>
  )
}

export const Button = () => null
Button.Container = Container