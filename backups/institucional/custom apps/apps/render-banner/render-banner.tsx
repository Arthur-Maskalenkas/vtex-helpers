import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { ImageResponsive, ImageResponsiveProps, Link } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useRuntime } from 'vtex.render-runtime'
import { useCmsContext } from '../../context'




export const RenderBanner = () => {
  const css = useCssHandles(CSS_HANDLES)

  const context = useCmsContext()
  const contextMainPath = context?._screen_config_banner

  const { deviceInfo } = useRuntime()

  const thisImageHaveHref = Boolean(contextMainPath?.href)

  const ImageDefaultProps: ImageResponsiveProps = {
    isMobile: deviceInfo?.isMobile,
    mobile: { src: contextMainPath?.srcMobile, width: '400', height: '400' },
    desktop: { src: contextMainPath?.srcDesktop, width: '1920', height: '300' },
    alt: contextMainPath?.alt,
    title: contextMainPath?.titleContent
  };

  if (thisImageHaveHref) {
    return (
      <div className={generateCSS('container-component', [
        'render-banner',
        'with-link',
        'render'
      ], css)}>
        <Link href={contextMainPath?.href} target={contextMainPath?._target} title={contextMainPath?.titleContent} fullWidth={true}>
          <ImageResponsive {...ImageDefaultProps} />
        </Link>
      </div>
    )
  }

  return (
    <div className={generateCSS('container-component', [
      'render-banner',
      'without-link',
      'render'
    ], css)}>
      <ImageResponsive {...ImageDefaultProps} />
    </div>
  )
}
