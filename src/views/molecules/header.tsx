import React from 'react'
import { Input as InputAtom } from '../atoms/input'



const InputSearch = () => {
		return (
					<InputAtom.Text id="search" name="search" placeholder="Buscar Opção"/>
		)
}

export const Header = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
		return (
					<header className={'container-app-header' + ' ' + className}>
							{children}
					</header>
		)
}

Header.InputSearch = InputSearch