import React from 'react'
import ReactDOM from 'react-dom/client'
import { Application } from './application'
import './global.scss'

// Crie um novo elemento para renderizar o componente React
const reactRoot = document.createElement('div')

// Selecione o elemento existente no qual você deseja adicionar o componente React
const existingElement = document.querySelector('body.bg-base') as HTMLElement

// Adicione o novo elemento à árvore DOM, como um filho do elemento existente
existingElement.appendChild(reactRoot)

// Use ReactDOM.createRoot para renderizar o componente React no novo elemento
ReactDOM.createRoot(reactRoot).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
)
