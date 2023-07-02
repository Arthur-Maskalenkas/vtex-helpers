import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Image, ImageProps, SanitizeText } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderPaymentMethods = () => {
  const css = useCssHandles(CSS_HANDLES)
  const context = UseGlobalContextAvantiFooter()?._screen_config_columns_icons?.[0]?.items?.[1]
  const containerClassName = generateCSS('container-component', [
    'context-render',
    'payment-methods'
  ], css)

  return (
    <div className={containerClassName}>
      <SanitizeText text={context?.__editorItemTitle} />

      <ul>

        {context?.items?.map((item, index) => {

          const imageAttrs: ImageProps = {
            allDevices: {
              src: item?.src
            },
            title: item?.__editorItemTitle,
            alt: item?.alt,
            className: 'logo'
          }


          return (

            <li key={index}>
              <Image {...imageAttrs} />
            </li>
          )
        })}
      </ul>

    </div>
  )
}
