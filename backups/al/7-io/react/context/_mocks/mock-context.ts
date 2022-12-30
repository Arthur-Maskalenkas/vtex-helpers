import { ShoppingGuideState } from "../_interfaces/_states";
import { __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT, __SCHEMA_SITE_EDITOR_MAPPED_STEP } from "../_interfaces/_schemas";

export const MOCK_DEFAULT_INITIAL_STATE: ShoppingGuideState = {
  currentDepartament: 0,
  totalStep: 0,
  totalDepartament: 0,
  currentStep: 0,
  departamentList: [],
  stepList: [],
  stepsFinished: false,
  maxStep: 0,
  formWarnings: {
    error: '',
    message: ''
  }
}

export const MOCK_DISPATH_INITIAL_STATE = (totalDepartaments: number, schemaDepartament: any[], totalSteps?: number, schemaStep?: any[]): ShoppingGuideState => ({
  currentDepartament: 0,
  currentStep: 0,
  totalDepartament: totalDepartaments,
  totalStep: totalSteps || 0,
  stepList: schemaStep || [],
  departamentList: schemaDepartament,
  stepsFinished: false,
  formWarnings: {},
  maxStep: 0
})


export const MOCK_DEFAULT_DEPARTAMENT: __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT = {
  currentPosition: 0,
  __editorItemTitle: '',
  items: [],
  description: '',
  resultDescription: '',
  resultTitle: '',
}
