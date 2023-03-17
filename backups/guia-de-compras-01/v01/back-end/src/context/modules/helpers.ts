import { type State } from '../_interfaces'

export const getNextStep = (state: State) => {
  const stepAnsweredIndex = state.steps.findIndex((item) => item.status === 1)

  return state.steps[stepAnsweredIndex + 1]
}