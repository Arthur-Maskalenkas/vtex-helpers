import { actionHandleIsOpen } from './actions/actionHandleIsOpen.ts'
import { type StatesApplication } from './types.ts'
import { ActionHandleGoToOption } from './actions/actionHandleGoToOption.ts'

export namespace ActionApplication {
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

}

export type ActionsApplication = ActionApplication.HandleIsOpen | ActionApplication.HandleGoToOption

export function reducerApplication (state: StatesApplication, action: ActionsApplication) {
  const commonProps = {
    state,
    action
  }

  switch (action.type) {
    case 'ACTION_HANDLE_IS_OPEN':
      return actionHandleIsOpen(commonProps)
    case 'ACTION_HANDLE_GO_TO_OPTION':
      return ActionHandleGoToOption(commonProps)
    default:
      return state
  }
}