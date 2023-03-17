import { ReducerActions } from "../reducer"

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
  __editorItemTitle: string;
  description: string;
  specificationID: string;
  filters: schema_filter[];
}

export type schema_filter = {
  __editorItemTitle: string;
  specificationValue: string;
  __screen_image: [{ src: string }]
}

export type reducer_schema_step = {
  status: 1 | 2 | 3,
  position: number
} & schema_step

export type reducer_schema_filter = {
  specificatioID: string
} & schema_filter

export type Reducer = {
  steps: reducer_schema_step[] | []
  currentStep: reducer_schema_step
  nextStep: reducer_schema_step
  steps_answered: reducer_schema_step[] | []

  query_see_all: string
  query_filters: string

  filters_answered: reducer_schema_filter[] | []

  is_first_step: boolean
  is_last_step: boolean

  is_result: boolean
}

export type schema___ProviderShoppingGuide = {
  __schema_configs_result: [schema_config_result],
  __schema_configs_search: [schema_configs_search],
  __schema_steps: schema_step[],
} & Reducer

export type PageSiteEditorValues = {
  children: React.ReactNode
} & schema___ProviderShoppingGuide



export type PageUseContextProps = {
  state: schema___ProviderShoppingGuide,
  dispathState: React.Dispatch<ReducerActions>
} & schema___ProviderShoppingGuide
