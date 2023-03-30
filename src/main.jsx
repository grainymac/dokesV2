import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar'
import App from './Components/App/App'
import Footer from './Components/Footer/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
