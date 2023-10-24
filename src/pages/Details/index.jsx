import { Container } from './App'

import { Header } from '../../components/header'
import {CreateButtonSend} from '../../components/button'
export function Details() {
  
  return (
    
    <Container>
      <Header/>
      <CreateButtonSend title= "Voltar"/>
   
    </Container>
      
  )
}

/**
 * a primeira letra da variavel que vai ser exportada tem de 
 * maiuscula pois ele so vai entender desta forma
 * 
 */