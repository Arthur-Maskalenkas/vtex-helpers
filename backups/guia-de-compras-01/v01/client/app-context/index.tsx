import React, { useReducer } from "react"
import { createContext } from "react"
import { PageSiteEditorValues, PageUseContextProps } from "./_interfaces"
import { Search } from "../apps"
import { ActionManager } from "./reducer"
import { DebuggerStates } from "../modules/debugger/debugger-states"

const AppContext = createContext<PageUseContextProps>({} as PageUseContextProps)

export const useAppProvider = () => {
  return React.useContext(AppContext)
}

export const AppProvider = (
  { __schema_configs_result, __schema_configs_search, __schema_steps }: PageSiteEditorValues
) => {

  const reducerObject: PageUseContextProps = {
    __schema_configs_result: __schema_configs_result,
    __schema_configs_search: __schema_configs_search,
    __schema_steps: __schema_steps,
    steps: __schema_steps?.map((item, index) => ({ ...item, status: index === 0 ? 1 : 3, position: index })) as any,
    currentStep: { ...__schema_steps[0], status: 2, position: 0 },
    nextStep: { ...__schema_steps[1], status: 3, position: 1 },
    steps_answered: [],
    filters_answered: [],
    query_see_all: '',
    query_filters: '',
    state: null as any,
    dispathState: null as any,
    is_first_step: true,
    is_last_step: false,
    is_result: false,
  }



  const [state, dispathState] = useReducer(ActionManager, reducerObject)
  return (
    <AppContext.Provider value={
      { ...state, state, dispathState, __schema_configs_result, __schema_configs_search, __schema_steps }
    }>
      <DebuggerStates state={state} />
      <Search />
    </AppContext.Provider>
  )
}


AppProvider.schema = {
  title: "App Shopping Guide",
};
