import { ProviderApplication } from '../context'
import { useEffect } from 'react'
import 'styles.scss'
import { Header } from '../molecules/header.tsx'
import { ListOptions } from '../molecules/listOptions.tsx'
import { SwitcherVisibility } from '../molecules/switcher-visibility.tsx'

export const Application = () => {
  return (
        <div className={'.container-main-app'}>
            <ProviderApplication>
                <div className="container-app-overlay"/>

                <div className="container-app-box">
                    <Header>
                        <Header.Input/>
                        <Header.Icon/>
                    </Header>
                    <ListOptions/>
                </div>

                <SwitcherVisibility>
                    <SwitcherVisibility.Icon/>
                </SwitcherVisibility>

            </ProviderApplication>
        </div>
  )
}