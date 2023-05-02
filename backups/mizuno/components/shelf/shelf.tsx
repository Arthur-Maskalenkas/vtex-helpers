import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'

export const Shelf = () => {
  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={generateCSS('container-component', ['shelf'], css)}>
      section-1
    </div>
  )
}
