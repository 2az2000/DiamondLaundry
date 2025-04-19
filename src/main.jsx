import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ProviderData } from './context/ProviderData.jsx'
import './assets/fonts/font.css'
createRoot(document.getElementById('root')).render(

    <ProviderData>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProviderData>

)
  // <StrictMode>