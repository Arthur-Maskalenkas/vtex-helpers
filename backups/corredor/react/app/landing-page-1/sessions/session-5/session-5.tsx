import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS, imageHelper } from '../../../../modules'
import { useLandingPage1Provider } from '../../../../context/landing-page-1'
import { Image, RichTextCustom } from '../../../../common'

export const Session5 = () => {
  const { _screen_session_5 } = useLandingPage1Provider()
  const contextSession = _screen_session_5?.[0]


  if (!contextSession) {
    return <></>
  }

  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={generateCSS('container-component', ['session-5', 'section'], css)}>
      <h2 className={generateCSS('title', ['session-5', 'variation-1'], css)}>
        <RichTextCustom text={contextSession?.title} />
      </h2>

      <h2 className={generateCSS('text', ['session-5', 'variation-1'], css)}>
        <RichTextCustom text={contextSession?.description} />
      </h2>

      <ul className={generateCSS('list', ['session-5', ''], css)}>
        {contextSession?.list_banner?.map((item, index) => {
          return (
            <li className={generateCSS('list-item', ['session-5', ''], css)} key={index}>
              <div className={generateCSS('container-content', ['session-5', 'title'], css)}>
                <h3 className={generateCSS('title', ['session-5', ''], css)}>
                  <RichTextCustom text={item?.title} />
                </h3>

                <h4 className={generateCSS('text', ['session-5', ''], css)}>
                  <RichTextCustom text={item?.description} />
                </h4>
              </div>

              {
                item?.typeContent === 'image'
                  ? <Image srcResponsives={imageHelper.getSrcResponsiveOnContext(item?._screen_image ?? [])} />
                  : <Image srcResponsives={imageHelper.getSrcResponsiveOnContext(item?._screen_image ?? [])} />
              }
            </li>
          )
        })}
      </ul>

    </div>
  )
}
