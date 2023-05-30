import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Helmet, useRuntime } from 'vtex.render-runtime'
import { useCmsContext } from "../../context"
import { CSS_HANDLES, generateCSS } from '../../modules'
import { Cmsimage, CmsText } from "./components"


export const RenderContent = () => {

  const css = useCssHandles(CSS_HANDLES)
  const {
    _screen_config_dev,
    items
  } = useCmsContext()
  const { deviceInfo } = useRuntime()

  return (
    <div className={generateCSS('container-component', ['render-content'], css)}>

      <Helmet>
        <title>{_screen_config_dev?.title ?? 'Institucional'}</title>
        {Boolean(_screen_config_dev?.description) && (
          <meta name="description" content={_screen_config_dev?.description} />
        )}
      </Helmet>

      <h1 className={generateCSS('title', [
        'render-content',
        'main'
      ], css)}>
        {_screen_config_dev?.title}
      </h1>

      {items?.map((item, index) => {
        console.log(`🚀 ~ file: render-content.tsx:29 ~ {Memoized?.items?.map ~ item:`, item)
        return (
          <div
            key={index}
            className={generateCSS('container-content', [
              'render-content',
              'item-rendered',
              item?.contentType
            ], css)}>
            {item?.contentType === 'text' && <CmsText {...item} />}
            {item?.contentType === 'image-responsive' && <Cmsimage  {...item} isMobile={deviceInfo?.isMobile} />}
          </div>
        )
      })}
    </div>
  )
}
