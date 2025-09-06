import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carrito from './components/Carrito'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carrito />
  </StrictMode>,
)

