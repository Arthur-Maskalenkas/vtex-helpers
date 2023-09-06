import { type Action } from '../reducer.ts'
import { type ListOptions, type ReducerParams, type States } from '../types.ts'
import { ModelListOptions } from '../domain/models/modelListOptions.ts'

export const ActionHandleGoToOption = (props: ReducerParams): States => {
  const { state, action } = props

  if (!state.internalListOptions) return state

  const actionHandle = action as unknown as Action.HandleGoToOption

  const listOptionsMapped: ListOptions.Items = []

  for (const [key, value] of state.internalListOptions) {
    if (value.parent === actionHandle.payload.data.target) {
      const { title, parent, component } = value
      listOptionsMapped.push(new ModelListOptions(title, key, component, parent))
    }
  }

  const componentOnParent = listOptionsMapped.find(item => item.component !== null)?.component

  if (componentOnParent) {
    return {
      ...state,
      currentTarget: actionHandle.payload.data.target,
      currentComponent: componentOnParent,
      listOptions: []
    }
  }

  return {
    ...state,
    listOptions: listOptionsMapped,
    currentComponent: null,
    currentTarget: actionHandle.payload.data.target
  }
}