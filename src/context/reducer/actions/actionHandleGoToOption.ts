import { type Action } from '../reducer.ts'
import { type ReducerParams, type States } from '../types.ts'

export const ActionHandleGoToOption = (props: ReducerParams): States => {
  const { state, action } = props

  const actionHandle = action as unknown as Action.HandleGoToOption

  const target = actionHandle.payload.data.target

  const targetRoot = state.privateListOptions.get(target)

  if (!targetRoot) return state

  if (typeof targetRoot === 'function') {
    return {
      ...state,
      listOptions: [{
        title: target,
        component: targetRoot
      }],
      currentTarget: targetRoot
    }
  }

  const listOptions = targetRoot.map((option) => ({ title: option }))

  return {
    ...state,
    currentTarget: target,
    listOptions
  }
}