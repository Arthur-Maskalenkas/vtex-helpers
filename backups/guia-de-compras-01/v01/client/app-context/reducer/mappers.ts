import { reducer_schema_filter, reducer_schema_step, schema___ProviderShoppingGuide } from "../_interfaces"

export const mapSteps = (state: schema___ProviderShoppingGuide, operation: 'next' | 'back'): reducer_schema_step[] => {
  return (state.steps as reducer_schema_step[])?.map((item: reducer_schema_step, index: number) => {
    let currentPosition = state?.currentStep?.position + (operation === 'next' ? 1 : -1)
    console.log("🚀 -------  ~ file: mappers.ts:6 ~ return ~ currentPosition:", currentPosition)
    if (isNaN(currentPosition)) {
      console.log('currentPosition opa')
      currentPosition = state?.steps?.length - 1
    }
    const stepsAnswered = index < currentPosition
    const currentStep = index === currentPosition
    const unknownStep = index + 2 > currentPosition


    if (currentStep) {
      return { ...item, status: 1 }
    }

    if (stepsAnswered) {
      return { ...item, status: 2 }
    }


    if (unknownStep) {
      return { ...item, status: 3 }
    }
    return item
  })
}

export const mapStepsAnswered = (state: schema___ProviderShoppingGuide): reducer_schema_step[] => {
  return ([...state.steps_answered,
  { ...state.currentStep, specificationID: state?.currentStep?.specificationID }]) as reducer_schema_step[]
}

export const mapFiltersAnswered = (state: schema___ProviderShoppingGuide): reducer_schema_filter[] => {
  return ([...state.filters_answered,
  { ...state.currentStep, specificationID: state?.currentStep?.specificationID }]) as reducer_schema_filter[]
}
