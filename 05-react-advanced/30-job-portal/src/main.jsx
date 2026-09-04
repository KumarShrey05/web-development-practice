import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobsDataProvider } from './context/JobsDataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobsDataProvider>
      <App />
    </JobsDataProvider>
  </StrictMode>,
)
