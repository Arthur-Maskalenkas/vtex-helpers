import { LandingPage1 } from '../../app';
import React from 'react'
import { LandingPage1ProviderProps, SiteEditorLandingPage1Props } from './types';


export const LandingPage1Context = React.createContext<LandingPage1ProviderProps>({} as any)

export const useLandingPage1Provider = () => {
  return React.useContext(LandingPage1Context)
}

export const LandingPage1Provider = (props: SiteEditorLandingPage1Props) => {

  return <LandingPage1Context.Provider value={props}> <LandingPage1 /> </LandingPage1Context.Provider >
}


LandingPage1Provider.schema = {
  title: "Configuração Landing Page"
}
