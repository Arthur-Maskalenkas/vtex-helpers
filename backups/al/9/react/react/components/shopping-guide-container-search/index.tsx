import React from 'react'
import { useShoppingGuideContext } from '../../context'
import { ENUM_ACTIONS } from '../../context/reducer'
import { CollectionStepsInfo } from './components/collections/collection-steps-info'
import { Button } from './components/common'
import { HeaderLayout, LeftSideLayout, Result, RightSideLayout } from './components/index-components'

import { ToastConsumer, ToastProvider } from 'vtex.styleguide'


import styles from './styles.css'


export const ShoppingGuideContainerSearch = () => {
  const {
    verifyIfStepsIsFinished,
    dispathForm,
    dispatchStep,
    getCurrentStep
  } = useShoppingGuideContext()

  const handleSubmit = (e: React.FormEvent, showToast: any) => {
    try {
      e.preventDefault()

      let inputElement = []

      for (const element of e.target as any) {
        if (element.checked) {
          inputElement.push({
            label: element.value,
            ProductFieldReferenceID: element.getAttribute('data-product-field-reference-id'),
            ProductFieldReferenceValue: element.getAttribute('data-product-field-reference-value')
          })
          element.checked = false
          showToast({ message: `filtro ${element.value} adicionado com sucesso!` })
        }
      }

      if (!inputElement.length) {
        showToast({ message: `Seleciona algum filtro para dar continuidade.` })

        return
      }

      const inputValid = inputElement[0]



      dispathForm({
        __editorItemTitle: inputValid.label,
        ProductFieldReferenceID: inputValid.ProductFieldReferenceID,
        ProductFieldReferenceValue: inputValid.ProductFieldReferenceValue
      })


      dispatchStep(ENUM_ACTIONS.NEXT_STEP)
    } catch (error) {
      showToast({ message: `Houve algum erro. Tente novamente mais tarde.` })
      console.error(error)

    }
  }


  return (
    <ToastProvider positioning="window">
      <ToastConsumer>
        {({ showToast }: { showToast: any }) => (
          <div className={styles.containerShoppingGuideContainerSearch}>
            <HeaderLayout />
            {verifyIfStepsIsFinished ?
              (
                <div>
                  <Result />
                </div>
              )
              :
              (
                <form onSubmit={e => handleSubmit(e, showToast)}
                  className={`${styles.containerBottom}`}>
                  <CollectionStepsInfo />

                  <div className={styles.containerContent}>
                    {getCurrentStep && getCurrentStep.currentPosition >= 1 ?
                      (
                        <Button onClick={() => dispatchStep(ENUM_ACTIONS.PREVIOUS_STEP)} className='button-back'
                          variant='secondary'>Voltar</Button>
                      )
                      :
                      (
                        <div className={styles.invisibleContainerShoppingGuide} />
                      )
                    }

                    <div className={styles.containerSides}>
                      <LeftSideLayout />
                      <RightSideLayout />
                    </div>
                    <Button type='submit' className='button-next' variant='primary'>Próximo</Button>
                  </div>
                </form>
              )
            }


          </div>
        )}
      </ToastConsumer>
    </ToastProvider>
  )
}
