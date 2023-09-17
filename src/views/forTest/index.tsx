import './styles.scss'
import { useEffect } from 'react'
import { AllCategories } from '../screens/allCategories/allCategories.tsx'
import { ContainerVisibility } from '../molecules/containerVisibility.tsx'

export const Application = () => {
  useEffect(() => {
    console.log('carregou2')
  }, [])

  return (
      <div className={'container-main-app'}>
          <ContainerVisibility.InsideContent>
              <AllCategories/>
          </ContainerVisibility.InsideContent>
      </div>
  )
}