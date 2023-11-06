import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes} from '../routes'
import { ThemeProvider } from 'styled-components'
import colors from "../styles/theme"
import GlobalStyle  from '../styles/global'
import { AuthProvider } from '../hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={colors}>
      <GlobalStyle/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
//dentro de details está se encontrando a pagina
// que contem os detalhes da nota  

/**
 * authProvider eh basicamente o contexto da minha app
 * onde eu consigo passar dentro do arquivo presente no 
 * hooks o contexto que vai conter um objeto como valor,
 * contendo a funcao de sigin, signout e o objeto que carrega
 * as informacoes do usuario, isso vai prover as informações 
 * para todas as minhas rotas de toda a aplicacao
 * 
*/