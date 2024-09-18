import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarProvider } from './Context/sidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>,
)
