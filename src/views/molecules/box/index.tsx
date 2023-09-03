import { Header } from './chunks/header.tsx'
import { ListOptions } from './chunks/listOptions.tsx'
import { SwitcherVisibility } from './chunks/switcher-visibility.tsx'
import './styles.scss'
import { useEffect } from 'react'
const Content = () => {
  useEffect(() => {
    console.log('Carregou Content 132132133233212121321')
  }, [])

  return (
        <div className="container-app-content">
            <Header.Container>
                <Header.Input/>
                <Header.Icon/>
            </Header.Container>
            <ListOptions/>
        </div>
  )
}

const ButtonSwitchVisibility = () => {
  return (
        <div className="container-app-button-switch-visibility">
            <SwitcherVisibility.Button>
                <SwitcherVisibility.Icon/>
            </SwitcherVisibility.Button>
        </div>
  )
}

const Overlay = () => {
  return (
        <div className="container-app-overlay"/>
  )
}

export const Box = {
  Content,
  ButtonSwitchVisibility,
  Overlay
}