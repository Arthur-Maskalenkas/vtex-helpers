import React from 'react'
import { Input as InputAtom } from '../atoms/input'

const Icon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
  className="feather feather-search" viewBox="0 0 24 24">
  <circle cx="11" cy="11" r="8"></circle>
  <path d="M21 21l-4.35-4.35"></path>
</svg>)

const Input = () => {
  return (
    <InputAtom.Text id="search" name="search" placeholder="Buscar Opção" />
  )
}

export const Header = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className={'container-app-header' + ' ' + className}>
      {children}
    </header>
  )
}

Header.Input = Input
Header.Icon = Icon