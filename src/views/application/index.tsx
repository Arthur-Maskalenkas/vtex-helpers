import './styles.scss'
import { Header } from '../molecules/header.tsx'
import { ListOptions } from '../molecules/listOptions.tsx'
import { SwitcherVisibility } from '../molecules/switcher-visibility.tsx'
import { ContainerVisibility } from '../molecules/containerVisibility.tsx'

export const Application = () => {
  return (
        <div className={'container-main-app'}>
            <ContainerVisibility.InsideContent>
                <Header>
                    <Header.Input/>
                </Header>
                <ListOptions/>
            </ContainerVisibility.InsideContent>

            <ContainerVisibility.OutsideContent>
                <SwitcherVisibility>
                    <SwitcherVisibility.Icon/>
                </SwitcherVisibility>
            </ContainerVisibility.OutsideContent>
        </div>
  )
}