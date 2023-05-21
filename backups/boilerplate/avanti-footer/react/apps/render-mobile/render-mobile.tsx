import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'

import React from 'react'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useCssHandles } from 'vtex.css-handles'
import { OtherSections } from '../../components-context/other-sections/other-sections'


export const RenderMobile = () => {
  const css = useCssHandles(CSS_HANDLES)
  const footerContext = UseGlobalContextAvantiFooter()

  console.log('footerContext', footerContext)
  return (
    <div className={generateCSS('container-component', ['render-mobile'], css)}>
      <OtherSections />
    </div>
  )
}
