import React, { createContext } from 'react'
import { ProviderReducerApplication } from './reducerApplicationContext.tsx'

const contextApplication = createContext(null)
export const ProviderApplication = ({ children }: React.PropsWithChildren) => {
  return (
        <contextApplication.Provider value={null}>
            <ProviderReducerApplication>
                {children}
            </ProviderReducerApplication>
        </contextApplication.Provider>
  )
}
