import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import { SanitizeText } from '../../common/sanitize-text/sanitize-text'
import { Link } from '../../common/link'
import { ImageNormal, ImageNormalProps } from '../../common/image/image-normal'

export const SocialLinks = () => {
  const css = useCssHandles(CSS_HANDLES)
  const socialLinks = UseGlobalContextAvantiFooter()?._screen_config_social_links?.[0]

  return (
    <div className={generateCSS('container-component', ['social-links'], css)}>
      <SanitizeText text={socialLinks?.__editorItemTitle} />

      <ul>

        {socialLinks?.items?.map((item, index) => {

          const imageAttrs: ImageNormalProps = {
            src: item?.src,
            title: item?.__editorItemTitle,
            alt: item?.alt,
            className: 'logo'
          }


          return (

            <li key={index}>
              <Link href={item.href}>
                <ImageNormal {...imageAttrs} />
              </Link>
            </li>
          )
        })}
      </ul>

    </div>
  )
}
