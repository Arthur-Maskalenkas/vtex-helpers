import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../modules'
import { TInputRadioProps } from './interfaces'

export type TInputRadio1 = {
  __editorItemTitle: string
  src: string
  specificationValue: string
} & TInputRadioProps

export const InputRadio1 = (props: TInputRadio1) => {
  const { id, name, modifier, __editorItemTitle, src, specificationValue } = props
  const css = useCssHandles(CSS_HANDLES)


  return (
    <button type='button' className={`${applyModifiers(css['container-component'], ['input-radio-1', `${modifier}`])}`}>
      <label className={`${applyModifiers(css['container-content'], ['input-radio-1', 'radio'])}`}>
        <input
          {...props}
          type='radio'
          className={`${applyModifiers(css['input'], ['input-radio-1', 'radio'])}`}
          id={id}
          name={name}
          value={specificationValue}
        />

        <div className={`${applyModifiers(css['container-content'], ['input-radio-1', 'image-radio'])}`}>
          <img
            className={`${applyModifiers(css['image'], ['input-radio-1', ''])}`}
            src={src}
            alt={__editorItemTitle} />
        </div>
      </label>
      <span className={`${applyModifiers(css['title'], ['input-radio-1'])}`}>
        {__editorItemTitle}
      </span>

    </button>
  )
}


