import { type Actions } from './reducer.ts'

export type GlobalActionProps<S, A> = {
  state: S
  action: A
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace StateListOptions {
  export type WithComponents = {
    title: string
    component?: () => any | null
  }

  export type WithItems = {
    title: string
    items?: Record<string, Item> | null
  }

  export type Item = WithItems | WithComponents

  export type ItemMapped = {
    title: string
    component?: Element
  }

  export type State = ItemMapped[]
  export type _State = Map<string, string[] | Element>
}

export interface States {
  isOpened: boolean
  currentComponent: Element | null
  currentTarget: string | null
  breadcrumb: string[]
  listOptions: StateListOptions.State
  privateListOptions: StateListOptions._State
}

export type ReducerParams = GlobalActionProps<States, Actions>