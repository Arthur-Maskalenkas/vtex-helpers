import React, { Dispatch, forwardRef, useState } from 'react'

export type SetCurrentScreen = Dispatch<React.SetStateAction<ModalScreenNames>>
export type SetIsOpen = Dispatch<React.SetStateAction<boolean>>

import { useModalEffect } from './utils/useModalEffect';
import { getScreenComponent } from './utils/getScreenComponent';
import { CSS_HANDLES, generateCSS } from '../../modules';
import { useCssHandles } from 'vtex.css-handles';
export type ModalScreenNames = 'Coupon' | 'Warning' | 'SecondStep'
export interface ModalImperativeFunctions {
  imperativeOpenModal: () => void;
  imperativeCloseModal: () => void;
  imperativeChangeScreen: (modalScreenName: ModalScreenNames) => void;
}


export const Modal = forwardRef<ModalImperativeFunctions>((_, ref) => {
  console.log(`🚀 ~ file: index.tsx:19 ~ Modal ~ ref:`, ref)
  const [currentScreen, setCurrentScreen] = useState<ModalScreenNames>('SecondStep')
  console.log(`🚀 ~ file: index.tsx:20 ~ Modal ~ currentScreen:`, currentScreen)
  const [isOpen, setIsOpen] = useState(false);
  console.log(`🚀 ~ file: index.tsx:22 ~ Modal ~ isOpen:`, isOpen)

  const css = useCssHandles(CSS_HANDLES)

  /*
  * Definindo a tela a ser renderizada
  */
  const ScreenComponent = getScreenComponent(currentScreen);
  if (!ScreenComponent) return <></>

  /*
  * Definindo as funções que o pai poderá utilizar
  */
  const imperativeOpenModal = () => {
    setIsOpen(true);
  };

  const imperativeCloseModal = () => {
    setCurrentScreen('SecondStep');
    setIsOpen(false);
  };

  const imperativeChangeScreen = (modalScreenName: ModalScreenNames) => {
    setCurrentScreen(modalScreenName);
  };


  React.useImperativeHandle(ref, () => ({
    imperativeOpenModal,
    imperativeCloseModal,
    imperativeChangeScreen
  }));

  /*
  * Aplicando alguns efeitos ao modal, como fechar ao apertar esc e etc.
  */
  useModalEffect(isOpen, setCurrentScreen, setIsOpen, imperativeCloseModal);

  /*
  * Renderizando o componente
  */
  return (
    <div className={generateCSS('container-component', ['index', 'modal-render', isOpen ? 'isOpened' : 'isClosed'], css)}>
      <div className={generateCSS('container-content', ['index', 'overlay'], css)} />
      <div className={generateCSS('container-content', ['index', 'modal'], css)}>
        <ScreenComponent />
      </div>
    </div>
  )
})
