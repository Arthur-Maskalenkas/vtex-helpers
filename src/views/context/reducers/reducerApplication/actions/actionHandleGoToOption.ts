import { type ReducerApplicationParams, type StatesApplication } from '../types.ts'
import { type ActionApplication } from '../reducerApplication.ts'

export const ActionHandleGoToOption = (props: ReducerApplicationParams): StatesApplication => {
  const { state, action } = props

  const actionHandle = action as unknown as ActionApplication.HandleGoToOption

  const target = actionHandle.payload.data.target

  const targetRoot = state.privateListOptions.get(target)

  if (!targetRoot) return state

  if (typeof targetRoot === 'function') {
    return {
      ...state,
      listOptions: [{
        title: target,
        fn: targetRoot
      }],
      currentTarget: targetRoot as any
    }
  }

  const listOptions = targetRoot.map((option) => ({ title: option }))

  return {
    ...state,
    currentTarget: target,
    listOptions
  }
}