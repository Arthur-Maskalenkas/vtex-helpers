import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import { useRuntime } from 'vtex.render-runtime'
import { Link } from '../../common/link'
import { ImageResponsive, ImageResponsiveProps } from '../../common/image/image-responsive'

export const Logo = () => {
  const css = useCssHandles(CSS_HANDLES)
  const context = UseGlobalContextAvantiFooter()
  const logo = context?._screen_config_logo?.[0]

  const { deviceInfo } = useRuntime()
  const isMobile = deviceInfo.isMobile

  const imageAttrs: ImageResponsiveProps = {
    isMobile,
    mobile: {
      height: '30',
      width: '165',
      src: logo?.srcMobile ?? ''
    },

    desktop: {
      height: '30',
      width: '165',
      src: logo?.srcDesktop ?? ''
    },

    title: logo?.__editorItemTitle,
    alt: logo?.alt,
    className: 'logo'
  }



  return (
    <div className={generateCSS('container-component', ['logo'], css)}>
      <Link href='/'>
        <ImageResponsive {...imageAttrs} />
      </Link>
    </div>
  )
}
