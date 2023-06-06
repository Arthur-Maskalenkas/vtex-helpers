import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Image, ImageProps, Link } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderLogo = () => {
  const css = useCssHandles(CSS_HANDLES)
  const containerClassName = generateCSS('container-component', [
    'context-render',
    'logo'
  ], css)
  const context = UseGlobalContextAvantiFooter()?._screen_config_logo?.[0]


  const imageAttrs: ImageProps = {
    mobile: {
      height: '30',
      width: '165',
      src: context?.srcMobile ?? ''
    },

    desktop: {
      height: '30',
      width: '165',
      src: context?.srcDesktop ?? ''
    },

    title: context?.__editorItemTitle,
    alt: context?.alt,
    className: 'logo'
  }


  return (
    <div className={containerClassName}>
      <Link href='/'>
        <Image {...imageAttrs} />
      </Link>
    </div>
  )
}
