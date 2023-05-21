import { UseGlobalProvider } from 'avantiimplantacao.global-context'
import { GlobalContextTypeAvantiFooter } from 'avantiimplantacao.global-context/react/global-context/contexts/global-avanti-footer-context/global-context-type-avanti-footer'

import React from 'react'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useCssHandles } from 'vtex.css-handles'


export const RenderMobile = () => {
  const css = useCssHandles(CSS_HANDLES)
  const footerContext: GlobalContextTypeAvantiFooter = UseGlobalProvider()
  console.log('footerContext', footerContext)
  return (
    <div className={generateCSS('container-component', ['render-mobile'], css)}>
      section-13
    </div>
  )
}
