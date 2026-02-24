import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstSteps } from './FirstSteps'
import { MyAwesomeApp } from './MyAwesomeApp'



createRoot(document.getElementById('root')!).render(
  <>
    {/* <FirstSteps></FirstSteps> */}
    <FirstSteps/>
  </>,
)
