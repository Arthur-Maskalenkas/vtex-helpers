import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { SanitizeText } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderAboutStore = () => {
  const css = useCssHandles(CSS_HANDLES)
  const containerClassName = generateCSS('container-component', [
    'context-render',
    'about-store'
  ], css)

  const context = UseGlobalContextAvantiFooter()?._screen_config_attendance_text_column?.[0]

  return (
    <div className={containerClassName}>
      <SanitizeText text={context?.freeText} />
    </div>
  )
}
