import { type States } from '../types.ts'

type ManualItem = ItemWithItems | ItemWithFn

type ItemWithItems = {
  title: string
  items?: Record<string, ManualItem> | null
}

type ItemWithFn = {
  title: string
  component?: Element
}

export type ManualItems = Record<string, ManualItem>

export type ParamsBuildDefaultStates = {
  manualList: ManualItems
} & Partial<States>
export interface ProtocolMapperDefaultStates {
  field: keyof States
  map: (params: ParamsBuildDefaultStates) => any
}