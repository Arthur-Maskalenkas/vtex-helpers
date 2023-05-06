import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { Image, Link, RichTextCustom } from '../../../../common'
import { ResponsiveImages } from '../../../../context/landing-page-1/types'

export const Session1 = () => {
  const { _screen_session_1 } = useLandingPage1Provider()

  const contextSession = _screen_session_1?.[0]
  const imageSession = contextSession?._screen_image?.[0]

  if (!contextSession) {
    return <></>
  }

  const css = useCssHandles(CSS_HANDLES)

  const srcImage: ResponsiveImages = {
    srcDesktop: imageSession?.srcDesktop,
    srcMobile: imageSession?.srcMobile,
    srcTablet: imageSession?.srcTablet
  }

  return (
    <section className={generateCSS('container-component', ['session-1'], css)}>
      <Link href={imageSession?.href} target={imageSession?.hrefTarget}>
        <Image srcResponsives={srcImage} alt={imageSession?.alt} />
        <div className={generateCSS('container-content', ['session-1', 'image-text'], css)}>
          <h2 className={generateCSS('title', ['session-1', ''], css)}><RichTextCustom text={contextSession?.title} /></h2>
          <h3 className={generateCSS('text', ['session-1', ''], css)}><RichTextCustom text={contextSession?.description} /></h3>
        </div>
      </Link>
    </section>
  )
}
