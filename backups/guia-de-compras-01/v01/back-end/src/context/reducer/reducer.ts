import { type reducer_schema_step, type State } from '../_interfaces'
import { mapSteps } from '@/context/modules/mappers'
import { getNextStep } from '@/context/modules/helpers'

export type Actions =
| { type: 'next_step' }
| {
  type: 'answer_step'
  payload: {

    data: reducer_schema_step
  }
}

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'next_step':
      return {
        ...state,
        steps: mapSteps(state, 'next'),
        currentStep: { ...getNextStep(state), status: 1 },
        steps_answered: [...state.steps_answered, { ...state.currentStep, status: 2 }]
      }

    case 'answer_step':
      return {
        ...state,
        steps_answered: [...state.steps_answered,
          {
            ...action.payload.data,
            position: action?.payload?.data?.position,
            filter_answered: action?.payload?.data?.filter_answered
          }]
      }

    default:
      return state
  }
}