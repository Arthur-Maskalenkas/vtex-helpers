import { type GlobalActionProps } from '../../../../types/reducer.ts'
import { type ActionsApplication, type StatesApplication } from '../reducerApplication.ts'

export const actionHandleIsOpen = (props: GlobalActionProps<StatesApplication, ActionsApplication>): StatesApplication => {
  const { state } = props

  return {
    ...state,
    isOpened: !state.isOpened
  }
}
