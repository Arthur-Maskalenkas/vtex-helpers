import { type ReducerParams, type States } from '../types.ts'

export const actionHandleIsOpen = (props: ReducerParams): States => {
  const { state } = props

  return {
    ...state,
    isOpened: !state.isOpened
  }
}