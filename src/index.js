import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4';
import App from './App'

ReactGA.initialize('G-E1DVFKRBKC');
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
