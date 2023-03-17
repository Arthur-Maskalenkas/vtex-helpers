import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, GenerateMockText, MediaQuerie } from '../../../modules'
import { reducer_schema_step, schema_configs_search } from '../../../app-context/_interfaces'
import { Slider01 } from '../../../common/slider/slider-1'
import { useAppProvider } from '../../../app-context'

export const TopSide = () => {
  const { state } = useAppProvider()
  const css = useCssHandles(CSS_HANDLES)


  const mock_schema_configs_search = {
    title: GenerateMockText(3),
    description: GenerateMockText(70),
  } as schema_configs_search

  const handleClick = (goToStep: string = '0') => {
    console.log(goToStep)
    //@ts-ignore
  }
  return (
    <div className={`${applyModifiers(css['container-component'], 'top-side')}`}>
      <h2 className={`${applyModifiers(css['title'], ['main'])}`}>
        {mock_schema_configs_search.title}
      </h2>

      <p className={`${applyModifiers(css['description'], ['main'])}`}>
        {mock_schema_configs_search.description}
      </p>
      <MediaQuerie renderOnMobile={true}>
        <div className={`${applyModifiers(css['list'], 'steps')}`}>
          <Slider01 >
            {(state?.steps as reducer_schema_step[])?.map((item: reducer_schema_step, index: number) => (
              <div key={index} className={`${applyModifiers(css['list-item'], ['step'])}`}>
                <button
                  onClick={() => handleClick(item?.specificationID)}
                  className={`${applyModifiers(css['button'], ['top-side', 'go-to-step', `go-to-step-status-${item?.status}`])}`}>

                  <span className={`${applyModifiers(css['status'], ['current'])}`} />
                  <span className={`${applyModifiers(css['status'], `title`)}`}>{item.__editorItemTitle}</span>
                </button>
              </div>
            ))}
          </Slider01 >
        </div>
      </MediaQuerie>
      <MediaQuerie renderOnMobile={false}>
        <ul className={`${applyModifiers(css['list'], 'steps')}`}>
          {(state?.steps as reducer_schema_step[])?.map((item: reducer_schema_step, index: number) => {
            return (
              <li key={index} className={`${applyModifiers(css['list-item'], ['step'])}`}>
                <button
                  onClick={() => handleClick(item?.specificationID)}
                  className={`${applyModifiers(css['button'],
                    ['top-side', 'go-to-step',
                      `go-to-step-status-${item?.status}`])}`}>

                  <span className={`${applyModifiers(css['status'], ['current'])}`} />
                  <span className={`${applyModifiers(css['status'], `title`)}`}>{item.__editorItemTitle}</span>
                </button>
              </li>
            )
          })
          }

        </ul>

      </MediaQuerie>
    </div >
  )
}
