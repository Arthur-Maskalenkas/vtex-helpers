import React, { createContext, useContext, useReducer } from 'react'
import { type PageSiteEditorValues, type Reducer, type State } from './_interfaces'
import { reducer } from './reducer'
import { buildInitialReducer } from './modules/build-initial-reducer'

export const AppContext = createContext<Reducer>({} as Reducer)

export const useAppProvider = () => {
  return useContext(AppContext)
}

export const AppProvider = (
  props: PageSiteEditorValues
) => {
  const { children } = props
  const initialState: State = buildInitialReducer(props)

  const [state, dispatch] = useReducer(reducer, initialState)

  return (<AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>)
}