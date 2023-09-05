import { type GlobalActionProps } from '../../../types/reducer.ts'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace StateListOptions {
  export type WithComponents = {
    title: string
    fn?: () => any | null
  }

  export type WithItems = {
    title: string
    items?: Record<string, Item> | null
  }

  export type Item = WithItems | WithComponents

  export type State = Item[]
  export type _State = Map<string, string[] | (() => any) | undefined>
}

export interface StatesApplication {
  isOpened: boolean

  currentLevel: number
  breadcrumb: string[]
  listOptions: StateListOptions.State
  privateListOptions: StateListOptions._State
}

export type ActionsApplication = {
  type: 'ACTION_HANDLE_IS_OPEN'
}

export type ReducerApplicationParams = GlobalActionProps<StatesApplication, ActionsApplication>