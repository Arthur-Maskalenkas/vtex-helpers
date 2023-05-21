import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import { SanitizeText } from '../../common/sanitize-text/sanitize-text'

export const AboutStore = () => {
  const css = useCssHandles(CSS_HANDLES)
  const freeText = UseGlobalContextAvantiFooter()?._screen_config_about_store?.[0].freeText

  return (
    <div className={generateCSS('container-component', ['about-store'], css)}>
      <SanitizeText text={freeText} />
    </div>
  )
}
