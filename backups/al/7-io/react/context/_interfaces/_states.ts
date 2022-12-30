import { __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT, __SCHEMA_SITE_EDITOR_MAPPED_STEP } from "./_schemas";

//
// ? Estados presentes no reducer e consequentemente no schema.
//

export type Form = {
  error?: string
  message?: string
}

export interface ShoppingGuideState {
  currentDepartament: number
  totalDepartament: number
  totalStep: number
  maxStep: number
  currentStep: number
  formWarnings?: Form
  departamentList: __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT[]
  stepList?: __SCHEMA_SITE_EDITOR_MAPPED_STEP[],
  stepsFinished: boolean
}
