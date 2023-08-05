import React, {PropsWithChildren} from 'react'

export const ContainerRightSide = ({children}: PropsWithChildren<any>) => {
  return (
    <div className="container-app-container-right-side">
      {children}
    </div>
  )
}
