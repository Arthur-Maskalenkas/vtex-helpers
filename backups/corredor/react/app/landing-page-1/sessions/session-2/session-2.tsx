import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { SanitizeText } from '../../../../common/sanitize-text/sanitize-text'

export const Session2 = () => {
  const { _screen_session_2 } = useLandingPage1Provider()
  const contextSession = _screen_session_2?.[0]

  if (!contextSession) {
    return <></>
  }

  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={generateCSS('container-component', ['session-2', 'section'], css)}>
      <SanitizeText text={contextSession?.title ?? ''} variations={{ variationColor: 'black', variationFont: '1', variationType: 'title' }} as={'h2'} />

      <SanitizeText text={contextSession?.description ?? ''} variations={{ variationColor: 'black', variationFont: '1', variationType: 'text' }} as={'h3'} />

    </div>
  )
}
