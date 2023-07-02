import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SchemaFormStep, defaultValues, schemaFormStep } from './form-schema';

import React, { createContext, useContext, useRef } from "react";
import { ContextContainerPDP, contextContainerPDPInitialValues } from "./types";
import { ContainerPDP } from '../index'
import { Modal, ModalImperativeFunctions, ModalScreenNames } from '../modal';
const ContextContainerPDP = createContext<ContextContainerPDP.Provider>(contextContainerPDPInitialValues)

export const contextContainerPDPProvider = (props: ContextContainerPDP.OwnerProviderProps) => {
  const handleFormSubmit = (data: SchemaFormStep) => {
    console.log(`🚀 ~ file: index.tsx:45 ~ handleFormSubmit ~ data:`, data)
  };


  const form = useForm<SchemaFormStep>({
    resolver: yupResolver(schemaFormStep),
    defaultValues
  });

  const modalRef = useRef<ModalImperativeFunctions>(null);

  const handleChangeModalScreen = (modalScreenName: ModalScreenNames, event?: any) => {
    console.log(`🚀 ~ file: index.tsx:25 ~ handleChangeModalScreen ~ event:`, event)
    event && event?.preventDefault()
    modalRef?.current?.imperativeChangeScreen(modalScreenName)
  }

  const handleCloseModal = (event?: any) => {
    event && event?.preventDefault()
    modalRef?.current?.imperativeCloseModal()
  }

  const handleOpenModal = (event?: any) => {
    event && event?.preventDefault()
    modalRef?.current?.imperativeOpenModal
  }

  if (!modalRef) return <>olas</>
  return (
    <ContextContainerPDP.Provider value={{ ...props, componentValues: { handleChangeModalScreen, handleCloseModal, handleOpenModal, form }, siteEditorValues: {} }}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <ContainerPDP />
        <Modal ref={modalRef} />
      </form>

    </ContextContainerPDP.Provider>
  )
}

export const useContextContainerPDP = () => useContext(ContextContainerPDP)
