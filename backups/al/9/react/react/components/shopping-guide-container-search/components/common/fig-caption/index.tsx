import React from 'react'
import { CommonProps, commonStylesGenerator, transformWordsToDashCase } from '../utils'
import './styles.css'

export type FigCaptionProps = {} & CommonProps<'primary' | 'secondary'>

export const FigCaption = ({ children, className, variant = 'primary' }: FigCaptionProps) => {
  return (
    <figcaption className={commonStylesGenerator('FigCaption', className, variant)} id={transformWordsToDashCase(`caption-text-${children}`)} >
      <span>
        {children}
      </span>
    </figcaption>
  )
}
