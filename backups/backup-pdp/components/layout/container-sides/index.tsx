import React, { PropsWithChildren } from 'react'
import '../../../styles.global.css'

export const ContainerSides = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className="container-app-container-sides">
      {children}
    </div>
  )
}
