import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga';
import App from './App'

function initializeReactGA() {
  ReactGA.initialize('G-RQZ93JCZXT');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

initializeReactGA();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
