import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../../modules'
import { useAppProvider } from '../../../app-context'

export const LeftSide = () => {
  const { state, dispathState } = useAppProvider();
  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${applyModifiers(css['container-component'], 'left-side')}`}>
      {!state?.is_first_step && (
        <button onClick={() => dispathState({ type: 'back_step' })} className={`${applyModifiers(css['button'], ['back-step'])}`}>
          Voltar
        </button>
      )}

      <h2 className={`${applyModifiers(css['title'], [''])}`}>
        {state?.currentStep?.__editorItemTitle}
      </h2>

      <p className={`${applyModifiers(css['description'], [''])}`}>
        {state?.currentStep?.description}
      </p>
    </div>
  )
}
