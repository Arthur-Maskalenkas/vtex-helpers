import React from 'react'
import { CommonProps, commonStylesGenerator } from '../utils'
import './styles.css'

type Variants = 'product' | 'block'
type Tags = 'h3' | 'h2' | 'p'

export type WordRendererProps = {} & CommonProps<Variants, Tags>

export const WordRenderer = ({
  children,
  as: Tag = 'p',
  variant = "product",
  className
}: WordRendererProps) => {

  return (
    <Tag className={commonStylesGenerator('BlockWordRenderer', className, variant)}>{children}</Tag>
  )
}
