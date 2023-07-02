import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Image, ImageProps, SanitizeText, Link } from '../../common'
import { CSS_HANDLES, generateCSS } from '../../modules'


export const ContextRenderSocialLinks = () => {
  const css = useCssHandles(CSS_HANDLES)
  const socialLinks = UseGlobalContextAvantiFooter()?._screen_config_columns_icons?.[0]?.items?.[0]
  const containerClassName = generateCSS('container-component', [
    'context-render',
    'social-links'
  ], css)


  return (
    <div className={containerClassName}>
      <SanitizeText text={socialLinks?.__editorItemTitle} />

      <ul>

        {socialLinks?.items?.map((item, index) => {

          const imageAttrs: ImageProps = {
            mobile: {
              src: item?.src,
              height: '20',
              width: '20'
            },
            desktop: {
              src: item?.src,
              height: '40',
              width: '40'
            },
            title: item?.__editorItemTitle,
            alt: item?.alt,
            className: 'logo'
          }


          return (

            <li key={index}>
              <Link href={item.href}>
                <Image {...imageAttrs} />
              </Link>
            </li>
          )
        })}
      </ul>

    </div>
  )
}
