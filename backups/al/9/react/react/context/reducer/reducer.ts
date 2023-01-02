import { ENUM_ACTIONS, ShoppingGuideActions } from "./actions";
import { ShoppingGuideState } from "../_interfaces/_states";

export const shoppingGuideReducer = (state: ShoppingGuideState, action: ShoppingGuideActions): ShoppingGuideState => {
  switch (action.type) {
    case ENUM_ACTIONS.GO_TO_STEP:
      return {
        ...state,
        currentStep: action.payload.step
      }

    case ENUM_ACTIONS.STEPS_FINISHED:
      return {
        ...state,
        stepsFinished: true
      }




    case ENUM_ACTIONS.FORM_WARNINGS:
      return {
        ...state,
        formWarnings: action.payload.formWarning
      }

    case ENUM_ACTIONS.CURRENT_DEPARTAMENT:
      return {
        ...state,
        currentDepartament: action.payload.departament
      }
    case ENUM_ACTIONS.FINALIZE_THE_DEPARTMENT_AND_GO_TO_THE_STEPS:
      return {
        ...state,
        currentDepartament: action.payload.currentDepartament,
        stepList: action.payload.stepList,
        totalStep: action.payload.stepList.length,
        currentStep: 0,
      }

    case ENUM_ACTIONS.NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
        maxStep: state.maxStep === state.currentStep ? state.maxStep + 1 : state.maxStep
      }
    case ENUM_ACTIONS.PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1
      }
    case ENUM_ACTIONS.CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload.step
      }
    case ENUM_ACTIONS.INITIAL_STATE_WITHOUT_OPTIONS_TO_CHOOSE_DEPARTAMENT:
      return {
        ...action.payload.initialState
      }
    case ENUM_ACTIONS.INITIAL_STATE_WITH_OPTIONS_TO_CHOOSE_DEPARTAMENT:
      return {
        ...action.payload.initialState
      }
    case ENUM_ACTIONS.RESET:
      return {
        ...state,
        currentDepartament: action.payload.currentDepartament,
        stepList: action.payload.stepList,
        totalStep: action.payload.stepList.length,
        currentStep: 0,
        stepsFinished: false,
        maxStep: 0,
        formWarnings: {}
      }

    case ENUM_ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        stepList: state.stepList?.map((step, index) => {
          if (index === state.currentStep) {
            return {
              ...step,
              answer: {
                __editorItemTitle: action.payload.form.title,
                ProductFieldReferenceID: action.payload.form.name,
                ProductFieldReferenceValue: action.payload.form.value
              }
            }
          }

          return step
        })
      }

    case ENUM_ACTIONS.SUBMIT_FORM_SUCCESS:
      return {
        ...state
      }

    default:
      return state
  }
}
