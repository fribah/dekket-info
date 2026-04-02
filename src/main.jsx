import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Hide SEO content once React loads
document.body.classList.add('react-loaded')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
