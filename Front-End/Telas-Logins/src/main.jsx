import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../HTML e CSS e JS/Style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
