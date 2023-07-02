import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { SanitizeText } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderCopyright = () => {
  const css = useCssHandles(CSS_HANDLES)
  const context = UseGlobalContextAvantiFooter()?._screen_config_text_copyright?.[0]
  const containerClassName = generateCSS('container-component', [
    'context-render',
    'copyright'
  ], css)

  return (
    <div className={containerClassName}>
      <SanitizeText text={context?.text} customClass='copyright' />
    </div>
  )
}
