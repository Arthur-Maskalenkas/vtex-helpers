import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { SanitizeText } from "../../../common"
import { CmsRenderCommonProps } from "../../../context"
import { CSS_HANDLES, generateCSS } from "../../../modules"


export type CmsTextInternalAttributes = {
  text: string
}

export type CmsTextProps = {} & CmsRenderCommonProps<'text', CmsTextInternalAttributes>

export const CmsText = (props: CmsTextProps) => {
  const { _screen_content } = props
  const css = useCssHandles(CSS_HANDLES)
  const cmsContent = _screen_content?.[0]

  return (
    <div className={generateCSS('container-component', ['cms-render-text', 'render'], css)}>
      <SanitizeText text={cmsContent?.text} />
    </div>
  )
}