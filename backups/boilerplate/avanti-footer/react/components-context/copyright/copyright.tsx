import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import { SanitizeText } from '../../common/sanitize-text/sanitize-text'

export const Copyright = () => {
  const css = useCssHandles(CSS_HANDLES)
  const context = UseGlobalContextAvantiFooter()?._screen_config_copyright?.[0]

  return (
    <div className={generateCSS('container-component', ['copyright'], css)}>
      <SanitizeText text={context?.text} customClass='copyright' />
    </div>
  )
}
