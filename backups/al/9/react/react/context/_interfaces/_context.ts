import { ReactNode } from 'react'
import {
  __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT,
  __SCHEMA_SITE_EDITOR_MAPPED_STEP, MERGED_ACTIONS_ANSWER, MERGED_ACTIONS_STEPS, __SCHEMA__SITE_EDITOR_MAPPED_RESULT
} from "./_schemas";
import { Form } from './_states';
// types mesclados


//
// ** Valores/funções que o provider vai receber **
//
export type ShoppingGuideProviderProps = {
  children: ReactNode,
  items: any
}

//
// ** valores/funções presentes no useShoppingGuideContext() **
//
type Getters = {
  getCurrentDepartament?: __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT,
  getDepartamentList?: __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT[],
  getCurrentStep?: __SCHEMA_SITE_EDITOR_MAPPED_STEP,
  getStepList?: __SCHEMA_SITE_EDITOR_MAPPED_STEP[],
  getFormWarnings?: Form | {},
  verifyIfStepsIsFinished: boolean,
  getMaxSteps: number
}

type Actions = {
  dispatchDepartament: (departament: number) => void,
  dispathFormWarnings: (warnings: Form) => void,
  dispatchStep: (type: MERGED_ACTIONS_STEPS, step?: number) => void,
  dispatchFinalizeTheDepartmentAndGoToTheSteps: () => void,
  dispathReset: () => void,
  dispathForm: (data: MERGED_ACTIONS_ANSWER) => void,
  dispathStepsFinished: () => void,
}

export type ShoppingGuideContextProps = {} & Getters & Actions

//
// ** Objeto padrão que o contexto vai ser inicializado **
//
export const ShoppingGuideContextValuesDefault: ShoppingGuideContextProps = {
  verifyIfStepsIsFinished: false,
  getFormWarnings: undefined,
  getCurrentDepartament: undefined,
  getCurrentStep: undefined,
  getDepartamentList: undefined,
  getStepList: undefined,
  getMaxSteps: 0,
  dispathStepsFinished: () => { },
  dispathFormWarnings: () => { },
  dispatchStep: () => null,
  dispatchDepartament: () => null,
  dispatchFinalizeTheDepartmentAndGoToTheSteps: () => null,
  dispathReset: () => null,
  dispathForm: () => null,
}
