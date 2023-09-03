import { type ReducerApplicationParams, type StatesApplication } from '../types.ts'

export const actionHandleIsOpen = (props: ReducerApplicationParams): StatesApplication => {
  const { state } = props

  return {
    ...state,
    isOpened: !state.isOpened
  }
}