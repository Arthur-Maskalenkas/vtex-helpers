import React from 'react'
import ReactDOM from 'react-dom/client'
import { Application } from './forTest'
import './global.scss'
import { ProviderApplication } from '../context'

// Crie um novo elemento para renderizar o componente React
const reactRoot = document.createElement('div')

// Selecione o elemento existente no qual você deseja adicionar o componente React
let existingElement = document.querySelector('div.main') as HTMLElement

if (!existingElement) {
		existingElement = document.querySelector('body.bg-base') as HTMLElement
}

// Adicione o novo elemento à árvore DOM, como um filho do elemento existente
existingElement.appendChild(reactRoot)

// Use ReactDOM.createRoot para renderizar o componente React no novo elemento
ReactDOM.createRoot(reactRoot).render(
			<React.StrictMode>
					<div className="root-app">
							<ProviderApplication>
									<Application/>
							</ProviderApplication>
					</div>
			</React.StrictMode>
)