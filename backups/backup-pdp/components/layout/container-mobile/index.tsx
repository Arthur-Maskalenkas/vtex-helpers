import React, { PropsWithChildren } from 'react'
import '../../../styles.global.css'

export const ContainerMobile = ({ children, classContainer }: PropsWithChildren<{ classContainer?: string }>) => {
  return (
    <div className={`container-app-container-mobile ${classContainer}`}>

      {children}
    </div>
  )
}
