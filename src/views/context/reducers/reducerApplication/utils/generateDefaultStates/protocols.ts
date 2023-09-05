import { type StatesApplication } from '../../types.ts'

type ManualItem = ItemWithItems | ItemWithFn

type ItemWithItems = {
  title: string
  items?: Record<string, ManualItem> | null
}

type ItemWithFn = {
  title: string
  fn?: () => any | null
}

export type ManualItems = Record<string, ManualItem>

export type ParamsBuildDefaultStates = {
  manualList: ManualItems
}
export interface ProtocolMapperDefaultStates {
  field: keyof StatesApplication
  map: (params: ParamsBuildDefaultStates) => any
}