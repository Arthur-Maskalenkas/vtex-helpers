import { ShoppingGuideState } from "../_interfaces/_states";
import { __SCHEMA_SITE_EDITOR_MAPPED_STEP } from "../_interfaces/_schemas";

export enum ENUM_ACTIONS {
  CURRENT_DEPARTAMENT = "CURRENT_DEPARTAMENT",
  FINALIZE_THE_DEPARTMENT_AND_GO_TO_THE_STEPS = "FINALIZE_THE_DEPARTMENT_AND_GO_TO_THE_STEPS",
  NEXT_STEP = "NEXT_STEP",
  CURRENT_STEP = "CURRENT_STEP",
  PREVIOUS_STEP = "PREVIOUS_STEP",
  INITIAL_STATE_WITHOUT_OPTIONS_TO_CHOOSE_DEPARTAMENT = "INITIAL_STATE_WITHOUT_OPTIONS_TO_CHOOSE_DEPARTAMENT",
  INITIAL_STATE_WITH_OPTIONS_TO_CHOOSE_DEPARTAMENT = "INITIAL_STATE_WITH_OPTIONS_TO_CHOOSE_DEPARTAMENT",
  RESET = "RESET",
  SUBMIT_FORM = "SUBMIT_FORM",
  SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS",
  FORM_WARNINGS = "FORM_WARNINGS",

  STEPS_FINISHED = "STEPS_FINISHED",
  GO_TO_STEP = "GO_TO_STEP"
}


export type ShoppingGuideActions =
  {
    type: ENUM_ACTIONS.INITIAL_STATE_WITHOUT_OPTIONS_TO_CHOOSE_DEPARTAMENT,
    payload: { initialState: ShoppingGuideState }
  }
  |
  {
    type: ENUM_ACTIONS.STEPS_FINISHED
  }
  |
  {
    type: ENUM_ACTIONS.CURRENT_DEPARTAMENT,
    payload: {
      departament: number
    }
  }
  |
  {
    type: ENUM_ACTIONS.FINALIZE_THE_DEPARTMENT_AND_GO_TO_THE_STEPS,
    payload: {
      currentDepartament: number
      stepList: __SCHEMA_SITE_EDITOR_MAPPED_STEP[]
      totalStep: number
    }
  }
  |
  {
    type: ENUM_ACTIONS.NEXT_STEP
  }
  |
  {
    type: ENUM_ACTIONS.GO_TO_STEP,
    payload: {
      step: number
    }
  }
  |
  {
    type: ENUM_ACTIONS.PREVIOUS_STEP
  }
  |
  {
    type: ENUM_ACTIONS.CURRENT_STEP,
    payload: {
      step: number
    }
  }
  |
  {
    type: ENUM_ACTIONS.INITIAL_STATE_WITH_OPTIONS_TO_CHOOSE_DEPARTAMENT,
    payload: {
      initialState: ShoppingGuideState
    }
  }
  |
  {
    type: ENUM_ACTIONS.RESET,
    payload: {
      currentDepartament: number
      stepList: __SCHEMA_SITE_EDITOR_MAPPED_STEP[]
      totalStep: number
    }
  }
  |
  {
    type: ENUM_ACTIONS.SUBMIT_FORM,
    payload: {
      form: {
        title: string
        name: string
        value: string
      }
    }
  }
  |
  {
    type: ENUM_ACTIONS.SUBMIT_FORM_SUCCESS
  }
  |
  {
    type: ENUM_ACTIONS.FORM_WARNINGS,
    payload: {
      formWarning: {
        error?: string
        message?: string
      }
    }
  }
