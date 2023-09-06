import { type States } from '../types.ts'

export namespace ManualItem {
  export type Item = {
    title: string
    items?: Record<string, Item> | null
    component?: Element | null
  }

  export type Items = Record<string, ManualItem.Item>
}

export type ParamsBuildDefaultStates = {
  manualList?: ManualItem.Items
} & Partial<States>
export interface ProtocolMapperDefaultStates {
  field: keyof States
  map: (params: ParamsBuildDefaultStates) => any
}