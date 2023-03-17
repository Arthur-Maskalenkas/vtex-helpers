import { type Dispatch, type ReactNode } from 'react'

import { type Actions } from '../reducer'

export type schema_config_result = {
  title: string
  description: string
}

export type schema_configs_search = {
  title: string
  description: string
  idCategorie: string
}

export type schema_step = {
  __editorItemTitle: string
  description: string
  specificationID: string
  filters: schema_filter[]
}

export type schema_filter = {
  __editorItemTitle: string
  specificationValue: string
  __screen_image: [{ src: string }]
}

export type reducer_schema_step = {
  position: number
  filter_answered: reducer_schema_filter | null
  status: number
} & schema_step

export type reducer_schema_filter = {
  parentPosition: number
} & schema_filter

export type schema___ProviderShoppingGuide = {
  __schema_configs_result: [schema_config_result]
  __schema_configs_search: [schema_configs_search]
  __schema_steps: schema_step[]
}

export type PageSiteEditorValues = {
  children: ReactNode
} & schema___ProviderShoppingGuide

export type State = {
  steps: reducer_schema_step[] | []
  currentStep: reducer_schema_step
  steps_answered: reducer_schema_step[] | []
} & schema___ProviderShoppingGuide

export type Reducer = {
  state: State
  dispatch: Dispatch<Actions>
}