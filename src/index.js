import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import { ThemeProvider } from '@emotion/react'
import { mmdictionaryTheme } from './styles/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mmdictionaryTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
