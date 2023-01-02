import React from 'react'
import { CommonProps, commonStylesGenerator } from '../utils'

import './styles.css'

type Tags = 'a' | 'button'
type Variants = "default" | "product" | 'tab'

export type ButtonProps = {
  isActive?: boolean;
}
  & CommonProps<Variants, Tags>
  & React.ButtonHTMLAttributes<HTMLButtonElement>
  & React.AnchorHTMLAttributes<HTMLAnchorElement>



export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'default',
  as: Tag = 'button',
  isActive = false,
  ...props
}: ButtonProps) => {

  return (
    <Tag
      className={commonStylesGenerator('BlockButton', className, variant)}
      {...props} type={type}
      {...(isActive && { 'aria-current': 'true' })}
      data-component-button={true}>
      <span>
        {children}
      </span>
    </Tag>
  )
}