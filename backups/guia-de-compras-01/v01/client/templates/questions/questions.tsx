import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../modules'
import { TopSide } from './components/top-side'
import { LeftSide } from './components/left-side'
import { RightSide } from './components/right-side'

export const Questions = () => {

  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${applyModifiers(css['container-component'], 'questions')}`}>
      <div className={`${applyModifiers(css['container-content'], ['questions', 'top-side'])}`}>
        <TopSide />
      </div>
      <div className={`${applyModifiers(css['container-content'], ['questions', 'bottom-side'])}`}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )
}
