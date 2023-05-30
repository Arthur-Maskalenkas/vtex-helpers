import React, { useContext } from 'react'
import { GlobalContext } from '../../context-global'
import { useRuntime } from 'vtex.render-runtime'
import InstMenuMobile from '../InstMenuMobile/InstMenuMobile'
import InstMenuDesktop from '../InstMenuDesktop/InstMenuDesktop'


const InstMenu = () => {
  const { schemaAppInstitutionalMenu } = useContext(GlobalContext)

  const { deviceInfo } = useRuntime()

  return deviceInfo.isMobile ? <InstMenuMobile schema={schemaAppInstitutionalMenu} /> : <InstMenuDesktop schema={schemaAppInstitutionalMenu} />
}

export default InstMenu