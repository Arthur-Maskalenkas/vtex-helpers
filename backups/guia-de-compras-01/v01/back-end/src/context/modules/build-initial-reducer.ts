import { type PageSiteEditorValues, type State } from '../_interfaces'

export const buildInitialReducer = (state: PageSiteEditorValues): State => {
  const {
    __schema_configs_result,
    __schema_configs_search,
    __schema_steps
  } =
		state

  const initialStatus = 1
  const initalPosition = 0

  return {
    steps: __schema_steps?.map((item, index) => ({
      ...item,
      status: index === 0
        ? initialStatus
        : 3,
      position: index,
      filter_answered: null
    })),
    currentStep: { ...__schema_steps[0], status: initialStatus, position: initalPosition, filter_answered: null },
    steps_answered: [],
    // @ts-expect-error
    __schema_configs_result,
    // @ts-expect-error
    __schema_configs_search,
    // @ts-expect-error
    __schema_steps,
    ...state
  }
}