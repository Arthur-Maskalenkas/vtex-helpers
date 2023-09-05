import React, { createContext, type Dispatch, useContext } from 'react'
import {
  type ActionsApplication,
  reducerApplication
} from './reducers/reducerApplication/reducerApplication.ts'
import { type StatesApplication } from './reducers/reducerApplication/types.ts'
import { statesDefault } from './reducers/reducerApplication/utils/generateDefaultStates'

type ApplicationReducerProvider = {
  state: StatesApplication
  dispatch: Dispatch<ActionsApplication>
}

const ApplicationReducerContext = createContext<ApplicationReducerProvider>({
  state: statesDefault,
  dispatch: {} as unknown as Dispatch<ActionsApplication>
})

export const ProviderReducerApplication = ({ children }: React.PropsWithChildren) => {
  const [stateApplication, dispatchApplication] = React.useReducer(reducerApplication, statesDefault)

  return (
        <ApplicationReducerContext.Provider value={{ dispatch: dispatchApplication, state: stateApplication }}>
                {children}
        </ApplicationReducerContext.Provider>
  )
}

export const useApplicationReducerContext = () => useContext(ApplicationReducerContext)