import {actionHandleIsOpen} from "./actions/actionHandleIsOpen.ts";

export interface StatesApplication {
    isOpened: boolean
}

export type ActionsApplication = {
    type: 'ACTION_HANDLE_IS_OPEN'
}

export function reducerApplication(state: StatesApplication, action: ActionsApplication) {
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

export const statesDefault: StatesApplication = {
    isOpened: false
}