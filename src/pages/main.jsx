import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './Details/'

import { ThemeProvider } from 'styled-components'
import colors from "../styles/theme"
import GlobalStyle  from '../styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={colors}>
      <GlobalStyle/>
    <Details/>
    </ThemeProvider>
  </React.StrictMode>,
)
//dentro de details está se encontrando a pagina 