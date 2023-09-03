import React from 'react'

export const OpenBox = ({ children }: React.PropsWithChildren) => {
  return (
        <div className="container-app-open-box">
            {children}
        </div>
  )
}

const Icon = () => {
  return (
        <div className={'container-app-icon'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 className="feather feather-search" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
            </svg>
        </div>
  )
}

OpenBox.Icon = Icon