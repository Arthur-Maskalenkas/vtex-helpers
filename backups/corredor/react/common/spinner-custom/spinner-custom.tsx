import React from 'react'

import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { Spinner as SpinnerImport } from 'vtex.styleguide'
import { CSS_HANDLES } from '../../modules'

export interface SpinnerProps {
  color?: string
  size?: string
}
export const SpinnerCustom = ({ color, size }: SpinnerProps) => {
  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${applyModifiers(css['container-component'], 'spinner-custom')}`}>
      <SpinnerImport color={color} size={size} />
    </div>
  )
}
