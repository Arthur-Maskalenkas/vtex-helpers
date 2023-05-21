import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'
import { SanitizeText } from '../../common/sanitize-text/sanitize-text'
import { Link } from '../../common/link'

export const OtherSections = () => {
  const css = useCssHandles(CSS_HANDLES)
  const context = UseGlobalContextAvantiFooter()
  console.log(`🚀 ~ file: other-sections.tsx:11 ~ OtherSections ~ context:`, context)

  return (
    <ul className={generateCSS('container-component', ['other-sections'], css)}>
      {context?._screen_config_other_section?.[0]?.items?.map((item, index) => (
        <li className={generateCSS('list-item', ['other-sections', 'section-1'], css)} key={index}>
          <SanitizeText text={item.__editorItemTitle} customClass='title' />
          <ul className={generateCSS('list', ['other-sections', 'sections-2'], css)}>
            {item?.items?.map((item, index) => (
              <li className={generateCSS('list-item', ['other-sections', 'section-2'], css)} key={index}>
                <Link href={item.href} target={item.target ? '_blank' : '_self'}>
                  <SanitizeText text={item?.__editorItemTitle} />
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
