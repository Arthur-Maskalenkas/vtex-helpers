import React from 'react'

export const SubmitButton = ({ children }: React.PropsWithChildren<any>) => {
  return (
    <div className="container-app-submit-button">
      {children}
    </div>
  )
}
