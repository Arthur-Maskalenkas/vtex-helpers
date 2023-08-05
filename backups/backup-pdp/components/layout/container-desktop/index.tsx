import React, { PropsWithChildren } from 'react'
import '../../../styles.global.css'

export const ContainerDesktop = ({ children, classContainer }: PropsWithChildren<{ classContainer?: string }>) => {
  return (
    <div className={`container-app-container-desktop ${classContainer}`}>
      {children}
    </div>
  )
}
