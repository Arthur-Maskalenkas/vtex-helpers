import { actionHandleIsOpen } from './actions/actionHandleIsOpen.ts'
import { ActionHandleGoToOption } from './actions/actionHandleGoToOption.ts'
import { type States } from './types.ts'
import { ActionHandleSearchOption } from './actions/actionHandleSearchOption.ts'

export namespace Action {
  export type HandleIsOpen = {
    type: 'ACTION_HANDLE_IS_OPEN'
  }

  export type HandleGoToOption = {
    type: 'ACTION_HANDLE_GO_TO_OPTION'
    payload: {
      data: {
        target: string
      }
    }
  }

  export type HandleSearchOption = {
    type: 'ACTION_HANDLE_SEARCH_OPTION'
    payload: {
      data: {
        typeSearch: 'all'
        target: string
      }
    }
  }

}

export type Actions = Action.HandleIsOpen | Action.HandleGoToOption | Action.HandleSearchOption

export function reducer (state: States, action: Actions) {
  const commonProps = {
    state,
    action
  }

  switch (action.type) {
    case 'ACTION_HANDLE_IS_OPEN':
      return actionHandleIsOpen(commonProps)
    case 'ACTION_HANDLE_GO_TO_OPTION':
      return ActionHandleGoToOption(commonProps)
    case 'ACTION_HANDLE_SEARCH_OPTION':
      return ActionHandleSearchOption(commonProps)
    default:
      return state
  }
}