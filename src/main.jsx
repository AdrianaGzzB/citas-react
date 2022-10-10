import React from 'react' //este import esta obsoleto a menso que se use con versiones anteriores
import ReactDOM from 'react-dom/client' //es quien tiene todos los eventos del DOM
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
