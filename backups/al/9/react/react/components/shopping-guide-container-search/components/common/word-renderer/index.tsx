import React from 'react'
import { CommonProps, commonStylesGenerator } from '../utils'
import styles from './styles.css'

type Variants = 'primary' | 'secondary'
type Tags = 'title' | 'text'

export type WordRendererProps = {} & CommonProps<Variants, Tags>

export const WordRenderer = ({
  children,
  as = 'title',
  variant = "primary",
  className
}: WordRendererProps) => {
  const Tag = as === 'text' ?
    'p' :
    'h3'

  return (
    <div className={commonStylesGenerator('WordRenderer', className, variant)}>
      <Tag className={` ${styles[variant]}`}>{children}</Tag>
    </div>
  )
}
