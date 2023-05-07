import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { Image, Link } from '../../../../common'
import { ResponsiveImages } from '../../../../context/landing-page-1/types'
import { SanitizeText } from '../../../../common/sanitize-text/sanitize-text'

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
    <div className={generateCSS('container-component', ['session-1', 'section'], css)}>
      <Link href={imageSession?.href} target={imageSession?.hrefTarget}>
        <Image srcResponsives={srcImage} alt={imageSession?.alt} />
        <div className={generateCSS('container-content', ['session-1', 'image-text'], css)}>
          <SanitizeText as={'h2'} text={contextSession?.title} variations={{ variationColor: 'white', variationFont: '1', variationType: 'title' }} />
          <SanitizeText as={'h3'} text={contextSession?.description} variations={{ variationColor: 'white', variationFont: '1', variationType: 'text' }} />
        </div>
      </Link >
    </div >
  )
}
