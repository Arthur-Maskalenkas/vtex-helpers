import { type reducer_schema_step, type State } from '../_interfaces/_context'

export const mapSteps = (state: State, operation: 'next' | 'back'): reducer_schema_step[] => {
  const stepAnsweredIndex = state.steps.findIndex((item) => item.status === 1)

  return (state.steps as reducer_schema_step[])?.map((item: reducer_schema_step, index: number) => {
    if (index < stepAnsweredIndex + 1) {
      return { ...item, status: 2 }
    }

    if (index === stepAnsweredIndex + 1) {
      return { ...item, status: 1 }
    }

    if (index > stepAnsweredIndex + 1) {
      return { ...item, status: 3 }
    }

    return item
  })
}