import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../modules'
import { Questions, Result } from '../templates'


export const Search = () => {
  const css = useCssHandles(CSS_HANDLES)

  const mock_stepsFinished = false

  return (
    <div className={`${applyModifiers(css['container-component'], 'search')}`}>
      <div className={`${applyModifiers(css['container-children'], '')}`}>
        {mock_stepsFinished
          ? <Result />
          : <Questions />
        }
      </div>
    </div>
  )
}
