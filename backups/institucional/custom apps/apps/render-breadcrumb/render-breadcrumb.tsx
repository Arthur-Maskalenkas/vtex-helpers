import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useCmsContext } from '../../context'
import { IconArrow } from './icon-arrow'
import { Link } from '../../common'

export const RenderBreadcrumb = () => {
  const css = useCssHandles(CSS_HANDLES)

  const context = useCmsContext()
  const contextMainPath = context?._screen_config_breadcrumb

  const homeTitle = 'Início'
  const pageTitle = contextMainPath?.pageTitle ?? context?._screen_config_dev?.title ?? 'Institucional'


  return (
    <div className={generateCSS('container-component', ['render-breadcrumb'], css)}>
      <Link href='/' title='Ir para home' modifier={generateCSS('identifier', ['render-breadcrumb', 'home'], css)}>
        {homeTitle}
      </Link>
      <IconArrow />
      <p title={`pagina atual: ${pageTitle}`} className={generateCSS('identifier', ['render-breadcrumb', 'page-title'], css)}>
        {pageTitle}
      </p>
    </div>
  )
}
