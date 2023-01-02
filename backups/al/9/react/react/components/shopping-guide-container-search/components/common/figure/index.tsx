import React from 'react'
import { CommonProps, commonStylesGenerator, transformWordsToDashCase } from '../utils'
import './styles.css'

type Variants = 'primary' | 'secondary'

export type FigureProps = {
  label: string
} & CommonProps<Variants>

export const Figure = ({ label, variant = 'primary', className, children }: FigureProps) => {
  return (
    <figure className={commonStylesGenerator('Figure', className, variant)} aria-labelledby={transformWordsToDashCase(`caption-text-${label}`)}>
      {children}
    </figure>
  )
}
