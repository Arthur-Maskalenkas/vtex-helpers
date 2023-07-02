
import { UseFormReturn } from 'react-hook-form';
import { ModalScreenNames } from '../modal';

export const contextContainerPDPInitialValues = {} as any

export namespace ContextContainerPDP {
  //
  // * Tipo utilizado para se referir aos valores que são estados ou incluem alguma lógica
  //
  type ComponentValues = {
    form: UseFormReturn<any, any, undefined>
    handleChangeModalScreen: (modalScreenName: ModalScreenNames,event?: any) => void
handleCloseModal: (event?: any) => void
handleOpenModal: (event?: any) => void
  }

  //
  // * Tipo utilizado para se referir aos valores que são recebidos pelo site editor
  //
  type SiteEditorValues = {}

  //
  // * Tipo utilizado pelo provider
  // * exp:  <ContextContainerPDP.Provider value={{ componentValues: {}, siteEditorValues: {} }}>
  //
  export type Provider = {
    siteEditorValues: SiteEditorValues
    componentValues: ComponentValues
  }

  //
  // * Tipo utilizado pelo criador do provider, para se referir as props recebidas
  // * exp:  export const contextContainerPDPProvider = (props: ContextContainerPDP.OwnerProviderProps) => {
  //
  export type OwnerProviderProps = {
    children: JSX.Element
  } & SiteEditorValues
}
