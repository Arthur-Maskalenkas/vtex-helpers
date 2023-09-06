import { type ListOptions, type ReducerParams, type States } from '../types.ts'
import { type Action } from '../reducer.ts'
import { ModelListOptions } from '../domain/models/modelListOptions.ts'

export const ActionHandleSearchOption = (props: ReducerParams): States => {
  const { state, action } = props
  if (!state.internalListOptions) return state
  const handleAction = action as unknown as Action.HandleSearchOption
  const searchableListOptions: ListOptions.Items = []

  for (const [key, value] of state.internalListOptions) {
    const title = value.title.toLowerCase()
    const target = handleAction.payload.data.target.toLowerCase()

    if (title.includes(target)) {
      const { title, parent, component } = value
      searchableListOptions.push(new ModelListOptions(title, key, component, parent))
    }
  }

  const sortedListOptions = searchableListOptions.sort((a, b) => {
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
    return 0
  })

  return {
    ...state,
    searchableListOptions: sortedListOptions,
    query: handleAction.payload.data.target
  }
}