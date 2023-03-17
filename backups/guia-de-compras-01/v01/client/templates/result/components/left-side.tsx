import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, MediaQuerie } from '../../../modules'
import { Slider01 } from '../../../common/slider/slider-1'
import { useAppProvider } from '../../../app-context'
import { reducer_schema_filter } from '../../../app-context/_interfaces'

export const LeftSide = () => {
  const { state } = useAppProvider()

  const css = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${applyModifiers(css['container-component'], 'left-side')}`}>

      <button className={`${applyModifiers(css['button'], ['left-side', 'reset'])}`}>
        Refazer teste
      </button>


      <h2 className={`${applyModifiers(css['title'], [''])}`}>
        {state?.__schema_configs_result?.[0]?.title}
      </h2>

      <p className={`${applyModifiers(css['description'], [''])}`}>
        {state?.__schema_configs_result?.[0]?.description}
      </p>

      <MediaQuerie renderOnMobile={true}>
        <Slider01 >
          {(state?.filters_answered as reducer_schema_filter[])?.map((item: reducer_schema_filter, index: number) => (
            <div key={index} className={`${applyModifiers(css['container-content'], 'slider-item')}`}>
              <div className={`${applyModifiers(css['container-content'], ['left-side', 'image'])}`}>
                <img
                  className={`${applyModifiers(css['image'], 'left-side')}`}
                  src={item?.__screen_image[0].src}
                  alt={item?.__editorItemTitle} />
              </div>


              <span className={`${applyModifiers(css['title'], ['left-side', 'step-name'])}`}>
                {item?.specificatioID}
              </span>

              <span className={`${applyModifiers(css['title'], ['left-side', 'step-value'])}`}>
                {item?.__editorItemTitle}
              </span>
            </div>
          ))}
        </Slider01 >
      </MediaQuerie>

      <MediaQuerie renderOnMobile={false}>
        <ul className={`${applyModifiers(css['list'], 'steps-checked')}`}>
          {(state?.filters_answered as reducer_schema_filter[])?.map((item: reducer_schema_filter, index: number) => (
            <li key={index} className={`${applyModifiers(css['list-item'], 'step-checked')}`}>
              <div className={`${applyModifiers(css['container-content'], ['left-side', 'image'])}`}>
                <img
                  className={`${applyModifiers(css['image'], 'left-side')}`}
                  src={item?.__screen_image[0].src}
                  alt={item?.__editorItemTitle} />
              </div>


              <span className={`${applyModifiers(css['title'], ['left-side', 'step-name'])}`}>
                {item?.specificatioID}
              </span>

              <span className={`${applyModifiers(css['title'], ['left-side', 'step-value'])}`}>
                {item?.__editorItemTitle}
              </span>
            </li>

          ))}
        </ul>
      </MediaQuerie>
    </div>
  )
}
