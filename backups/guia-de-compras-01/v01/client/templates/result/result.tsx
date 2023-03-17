import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../modules'
import { LeftSide } from './components/left-side'
import { RightSide } from './components/right-side'

export const Result = () => {

  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${applyModifiers(css['container-component'], 'result')}`}>
      <div className={`${applyModifiers(css['container-content'], ['result', 'left-side'])}`}>
        <LeftSide />
      </div>

      <div className={`${applyModifiers(css['container-content'], ['result', 'right-side'])}`}>
        <RightSide />
      </div>
    </div>
  )
}
