
import { createRoot } from 'react-dom/client'
import './scss/main.scss'
import App from './App.jsx'

import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
 <StrictMode>
   <App />
 </StrictMode>
  
  
)
