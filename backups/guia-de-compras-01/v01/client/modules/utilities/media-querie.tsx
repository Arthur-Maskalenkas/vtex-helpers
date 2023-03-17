import React from 'react'
import { useRuntime } from 'vtex.render-runtime'


export type TMediaQuerie = {
  renderOnMobile: boolean,
  children: React.ReactNode
}

export const MediaQuerie = ({ children, renderOnMobile }: TMediaQuerie) => {
  const { deviceInfo } = useRuntime()
  const isMobile = deviceInfo?.isMobile

  if ((!!isMobile && !!renderOnMobile) || (!isMobile && !renderOnMobile)) {
    return <>{children}</>
  }

  return <></>
}
