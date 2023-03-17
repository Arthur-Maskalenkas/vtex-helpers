import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../../modules';

export const RightSide = () => {

  const css = useCssHandles(CSS_HANDLES)


  return (
    <div className={`${applyModifiers(css['container-component'], 'right-side')}`}>
      shelf
    </div>
  )
}
