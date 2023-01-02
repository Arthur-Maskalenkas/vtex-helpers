import React from 'react'
import { CommonProps, commonStylesGenerator } from '../utils'

import './styles.css'

type Tags = 'a' | 'button'
type Variants = "default" | "primary" | "secondary" | "tertiary"

export type ButtonProps = {}
  & CommonProps<Variants, Tags>
  & React.ButtonHTMLAttributes<HTMLButtonElement>
  & React.AnchorHTMLAttributes<HTMLAnchorElement>



export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  as: Tag = 'button',
  ...props
}: ButtonProps) => {

  return (
    <Tag
      className={commonStylesGenerator('Button', className, variant)}
      {...props} type={type}
      data-component-button={true}>
      <span>
        {children}
      </span>
    </Tag>
  )
}
