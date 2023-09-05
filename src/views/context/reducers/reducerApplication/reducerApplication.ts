import { actionHandleIsOpen } from './actions/actionHandleIsOpen.ts'
import { type StatesApplication } from './types.ts'

export namespace ActionApplication {
  export type HandleIsOpen = {
    type: 'ACTION_HANDLE_IS_OPEN'
  }

}

export type ActionsApplication = ActionApplication.HandleIsOpen

export function reducerApplication (state: StatesApplication, action: ActionsApplication) {
  const commonProps = {
    state,
    action
  }

  switch (action.type) {
    case 'ACTION_HANDLE_IS_OPEN':
      return actionHandleIsOpen(commonProps)
    default:
      return state
  }
}