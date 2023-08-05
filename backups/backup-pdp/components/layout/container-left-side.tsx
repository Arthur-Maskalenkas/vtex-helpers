import React, {PropsWithChildren} from 'react'

export const ContainerLeftSide = ({children}: PropsWithChildren<any>) => {
  return (
    <div className="container-app-container-left-side">
      {children}
    </div>
  )
}
