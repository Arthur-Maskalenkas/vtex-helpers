import { ProviderApplication } from '../context'
import { Box } from '../molecules/box'
import { useEffect } from 'react'

export const Application = () => {
  useEffect(() => {
    console.log('Carregou Application 123122321323211')
  }, [])
  return (
        <div className={'.container-main-app'}>
            <ProviderApplication>
                <Box.Overlay/>
                <Box.Content/>
                <Box.ButtonSwitchVisibility/>
            </ProviderApplication>
        </div>
  )
}