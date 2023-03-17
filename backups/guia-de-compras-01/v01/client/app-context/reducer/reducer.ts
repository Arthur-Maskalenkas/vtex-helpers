import { schema___ProviderShoppingGuide, schema_filter } from "../_interfaces";
import { mapFiltersAnswered, mapSteps, mapStepsAnswered } from "./mappers";
// colocar um freio para parar de ser possivel apertar o botão de proximo passo quando o passo atual não tiver sido respondido ou o proximo passo não existir

export type ReducerActions =
  | { type: "reset" }
  | { type: "back_step" }
  | {
    type: 'answer_step',
    payload: {
      filter_answer: schema_filter
    }
  }

export const ActionManager = (state: schema___ProviderShoppingGuide, action: ReducerActions): schema___ProviderShoppingGuide => {
  const is_last_step = state?.steps?.length === state?.steps_answered?.length + 1
  const is_first_step = false
  const is_result = state.steps.length - 1 === state.steps_answered.length
  const currentStep = state.steps[state.steps_answered.length + 1]
  const nextStep = state.steps[state.steps_answered.length + 2]

  switch (action.type) {
    case "reset":
      return {
        __schema_configs_result: state?.__schema_configs_result,
        __schema_configs_search: state?.__schema_configs_search,
        __schema_steps: state?.__schema_steps,
        steps: state?.__schema_steps?.map((item, index) => ({ ...item, status: index === 0 ? 1 : 3, position: index })) as any,
        currentStep: { ...state?.__schema_steps[0], status: 2, position: 0 },
        nextStep: { ...state?.__schema_steps[1], status: 3, position: 1 },
        steps_answered: [],
        filters_answered: [],
        query_see_all: '',
        query_filters: '',
        is_first_step: true,
        is_last_step: false,
        is_result: false,
      };
    case 'answer_step':
      if (state?.steps_answered?.length === state?.steps?.length) {
        return {
          ...state,
          is_result: true
        }
      }

      return {
        ...state,
        steps_answered: mapStepsAnswered(state),
        filters_answered: mapFiltersAnswered(state),
        steps: mapSteps(state, 'next'),

        currentStep: { ...currentStep, status: 2 },
        nextStep: { ...nextStep, status: 3 },

        is_first_step,
        is_last_step,
        is_result
      }
    case 'back_step':
      const previousStep = state.steps[state.steps_answered.length - 1]
      console.log("🚀 -------  ~ file: reducer.ts:62 ~ ActionManager ~ previousStep:", previousStep)
      const previousStepAnswered = state.steps_answered[state.steps_answered.length - 1]
      console.log("🚀 -------  ~ file: reducer.ts:64 ~ ActionManager ~ previousStepAnswered:", previousStepAnswered)

      return {
        ...state,
        steps_answered: state.steps_answered.slice(0, state.steps_answered.length - 1),
        filters_answered: state.filters_answered.slice(0, state.filters_answered.length - 1),
        steps: mapSteps(state, 'back'),

        currentStep: { ...previousStep, status: 2 },
        nextStep: { ...previousStepAnswered, status: 3 },

        is_first_step: previousStep?.specificationID === state?.__schema_steps[0]?.specificationID,
        is_last_step,
        is_result
      }
    default:
      return state;
  }
}
