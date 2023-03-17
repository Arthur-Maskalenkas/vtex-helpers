import React from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, MediaQuerie } from '../../../modules'
import { schema_filter } from '../../../app-context/_interfaces'
import { InputRadio1, TInputRadio1 } from '../../../common/input-radio/input-radio-1'
import { Slider01 } from '../../../common/slider/slider-1'
import { useAppProvider } from '../../../app-context'

export const RightSide = () => {
  const [currentCheckbox, setCurrentCheckbox] = React.useState<TInputRadio1>({} as any)
  const { state, dispathState } = useAppProvider()


  console.log("🚀 -------  ~ file: right-side.tsx:14 ~ RightSide ~ state:", state)

  const css = useCssHandles(CSS_HANDLES)

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      console.log("🚀🚀🚀🚀 -------  ~ file: right-side.tsx:12 ~ RightSide ~ currentCheckbox:", currentCheckbox)

      const data: schema_filter = {
        __editorItemTitle: currentCheckbox.__editorItemTitle,
        specificationValue: currentCheckbox.specificationValue,
        __screen_image: [{ src: currentCheckbox.src }]
      }

      dispathState({
        type: 'answer_step', payload: { filter_answer: data }
      })

    } catch (error) {
      console.log(error)
    }
  }


  const buildRadioInputProps = (item: schema_filter): TInputRadio1 => ({
    name: state?.currentStep?.specificationID,
    id: item.specificationValue,
    src: item.__screen_image[0].src,
    specificationValue: item.specificationValue,
    __editorItemTitle: item.__editorItemTitle,
    modifier: 'right-side',
    onClick: () => {
      setCurrentCheckbox({
        ...item,
        specificationID: item.specificationValue,
        specificationValue: item.specificationValue,
      } as any)
    }
  })

  return (
    <form onSubmit={handleFormSubmit} className={`${applyModifiers(css['container-component'], 'right-side')}`}>
      <MediaQuerie renderOnMobile={true}>
        <Slider01 >
          {state?.currentStep?.filters?.map((item, index) => (
            <div key={index}>
              <InputRadio1
                {...buildRadioInputProps(item)}
                onClick={() => setCurrentCheckbox(buildRadioInputProps(item))}
              />
            </div>
          ))}
        </Slider01>
      </MediaQuerie>
      <MediaQuerie renderOnMobile={false}>
        <ul className={`${applyModifiers(css['list'], 'questions')}`}>
          {state?.currentStep?.filters?.map((item, index) => (
            <li key={index} className={`${applyModifiers(css['list-item'], 'question')}`}>
              <InputRadio1
                {...buildRadioInputProps(item)}
                onClick={() => setCurrentCheckbox(buildRadioInputProps(item))} />
            </li>
          ))}
        </ul>
      </MediaQuerie>

      <button className={`${applyModifiers(css['button'], ['right-side', 'submit'])}`}>
        Proximo
      </button>
    </form>
  )
}
