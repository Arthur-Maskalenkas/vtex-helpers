import React from 'react'
import ReactDOM from 'react-dom/client'
import { Product } from './pages/product'
import './global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="GCE container-main-app">
      <Product />
    </div>
  </React.StrictMode>,
)