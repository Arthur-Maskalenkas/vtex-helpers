import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { RichTextCustom } from '../../../../common'

export const Session2 = () => {
  const { _screen_session_2 } = useLandingPage1Provider()
  const contextSession = _screen_session_2?.[0]

  if (!contextSession) {
    return <></>
  }

  const css = useCssHandles(CSS_HANDLES)

  return (
    <section className={generateCSS('container-component', ['session-2'], css)}>
      <h3 className={generateCSS('title', ['session-2', ''], css)}>
        <RichTextCustom text={contextSession?.title ?? ''} />
      </h3>

      <h4 className={generateCSS('text', ['session-2', ''], css)}>
        <RichTextCustom text={contextSession?.description ?? ''} />
      </h4>

    </section>
  )
}
