import React  from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { UseGlobalProvider } from 'avantiimplantacao.global-context'
export const RenderMobile = () => {
  const css = useCssHandles(CSS_HANDLES)
  console.log('usecontext', [UseGlobalProvider()])
  return (
    <div className={generateCSS('container-component', ['render-mobile'], css)}>
      section-13
    </div>
  )
}