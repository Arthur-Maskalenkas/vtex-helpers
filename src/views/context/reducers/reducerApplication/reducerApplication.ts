import { actionHandleIsOpen } from './actions/actionHandleIsOpen.ts'
import { type ActionsApplication, type StatesApplication } from './types.ts'

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