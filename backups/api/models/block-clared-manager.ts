import {RuntimeRoute} from "./runtime-route";

export type BlockClearedModel = {
  props?: any
  contentIds?: string[]
  blockId?: string
  ['three-path']?: string
  ['props-on-code']
  page: RuntimeRoute
}
