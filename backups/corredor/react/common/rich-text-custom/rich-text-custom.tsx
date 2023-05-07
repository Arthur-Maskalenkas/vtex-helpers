import { index as RichText } from 'vtex.rich-text'
import './styles.global.css'
import React from 'react'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useCssHandles } from 'vtex.css-handles'


export interface RichTextCustomProps {
  text: string
}

export const RichTextCustom = ({ text }: RichTextCustomProps) => {
  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${generateCSS('container-component', ['rich-text-custom', ''], css)} container-rich-text-custom`}>
      <RichText
        text={text}
      />
    </div>
  )
}
