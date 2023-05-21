import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import { SanitizeText } from '../../common/sanitize-text/sanitize-text'
import { ImageNormal, ImageNormalProps } from '../../common/image/image-normal'

export const PaymentMethods = () => {
  const css = useCssHandles(CSS_HANDLES)
  const context = UseGlobalContextAvantiFooter()?._screen_config_payment_methods?.[0]

  return (
    <div className={generateCSS('container-component', ['payment-methods'], css)}>
      <SanitizeText text={context?.__editorItemTitle} />

      <ul>

        {context?.items?.map((item, index) => {

          const imageAttrs: ImageNormalProps = {
            src: item?.src,
            title: item?.__editorItemTitle,
            alt: item?.alt,
            className: 'logo'
          }


          return (

            <li key={index}>
              <ImageNormal {...imageAttrs} />
            </li>
          )
        })}
      </ul>

    </div>
  )
}
