import React, { createContext, type Dispatch, useContext } from 'react'
import { type States } from './reducer/types.ts'
import { statesDefault } from './reducer/generateDefaultStates'
import { type ActionsApplication, reducer } from './reducer/reducer.ts'

type ApplicationReducerProvider = {
  state: States
  dispatch: Dispatch<ActionsApplication>
}

const ApplicationReducerContext = createContext<ApplicationReducerProvider>({
  state: statesDefault,
  dispatch: {} as unknown as Dispatch<ActionsApplication>
})
export const ProviderApplication = ({ children }: React.PropsWithChildren) => {
  const [stateApplication, dispatchApplication] = React.useReducer(reducer, statesDefault)

  return (
        <ApplicationReducerContext.Provider value={{ dispatch: dispatchApplication, state: stateApplication }}>
            {children}
        </ApplicationReducerContext.Provider>
  )
}
export const useApplicationReducerContext = () => useContext(ApplicationReducerContext)