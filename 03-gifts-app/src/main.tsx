import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftsApp } from './GiftsApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GiftsApp/>
  </StrictMode>,
)
