import React, { forwardRef, useImperativeHandle, useState } from 'react'

import { SchemaFormStep } from '../form-schema';
import { UseFormRegister } from 'react-hook-form'
import { ModalImperativeFunctions, imperativeChangeScreen, imperativeCloseModal, imperativeOpenModal } from './utils/forwardRef';
import { useModalEffect } from './utils/useModalEffect';
import { getScreenComponent } from './utils/getScreenComponent';
import { CSS_HANDLES, generateCSS } from '../../modules';
import { useCssHandles } from 'vtex.css-handles';

export type ModalScreenNames = 'Coupon' | 'Warning' | 'SecondStep'


export type ModalProps = {
  register: UseFormRegister<SchemaFormStep>
}

export const Modal = forwardRef<ModalImperativeFunctions, ModalProps>(({ ...props }, ref) => {
  const [currentScreen, setCurrentScreen] = useState<ModalScreenNames>('SecondStep')
  const [isOpen, setIsOpen] = useState(false);

  const css = useCssHandles(CSS_HANDLES)

  /*
  * Definindo a tela a ser renderizada
  */
  const ScreenComponent = getScreenComponent(currentScreen);
  if (!ScreenComponent) return <></>

  /*
  * Definindo as funções que o pai poderá utilizar
  */
  useImperativeHandle(ref, () => ({
    imperativeOpenModal: () => imperativeOpenModal(setIsOpen),
    imperativeCloseModal: () => imperativeCloseModal(setCurrentScreen, setIsOpen),
    imperativeChangeScreen: (screenName: ModalScreenNames) => imperativeChangeScreen(setCurrentScreen, screenName)
  }));

  /*
  * Aplicando alguns efeitos ao modal, como fechar ao apertar esc e etc.
  */
  useModalEffect(isOpen, setCurrentScreen, setIsOpen);

  return (
    <div className={generateCSS('container-component', ['index', 'modal-render'], css)}>
      <div className={generateCSS('container-content', ['index', 'overlay'], css)} />
      <div className={generateCSS('container-content', ['index', 'modal'], css)}>
        <ScreenComponent {...props} />
      </div>
    </div>
  )
})
