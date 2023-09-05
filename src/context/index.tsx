import React, { createContext, type Dispatch, useContext } from 'react'
import { type StatesApplication } from './reducer/types.ts'
import { statesDefault } from './reducer/generateDefaultStates'
import { type ActionsApplication, reducerApplication } from './reducer/reducerApplication.ts'

type ApplicationReducerProvider = {
  state: StatesApplication
  dispatch: Dispatch<ActionsApplication>
}

const ApplicationReducerContext = createContext<ApplicationReducerProvider>({
  state: statesDefault,
  dispatch: {} as unknown as Dispatch<ActionsApplication>
})
export const ProviderApplication = ({ children }: React.PropsWithChildren) => {
  const [stateApplication, dispatchApplication] = React.useReducer(reducerApplication, statesDefault)

  return (
        <ApplicationReducerContext.Provider value={{ dispatch: dispatchApplication, state: stateApplication }}>
            {children}
        </ApplicationReducerContext.Provider>
  )
}
export const useApplicationReducerContext = () => useContext(ApplicationReducerContext)