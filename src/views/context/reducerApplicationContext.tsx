import React, { createContext, type Dispatch } from 'react'
import {
  reducerApplication,
  statesDefault
} from './reducers/reducerApplication/reducerApplication.ts'
import { type ActionsApplication, type StatesApplication } from './reducers/reducerApplication/types.ts'

const ApplicationStatesContext = createContext<StatesApplication>(statesDefault)
const ApplicationDispatchContext = createContext<Dispatch<ActionsApplication>>({} as unknown as Dispatch<ActionsApplication>)

export const ProviderReducerApplication = ({ children }: React.PropsWithChildren) => {
  const [stateApplication, dispatchApplication] = React.useReducer(reducerApplication, statesDefault)

  return (
        <ApplicationStatesContext.Provider value={stateApplication}>
            <ApplicationDispatchContext.Provider value={dispatchApplication}>
                {children}
            </ApplicationDispatchContext.Provider>
        </ApplicationStatesContext.Provider>
  )
}