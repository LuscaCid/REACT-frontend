import {Link} from 'react-router-dom'
import {useState} from "react"
import { Container, Form , Background} from "./style";
import { Input } from "../../components/input";
import { ButtonText } from "../../components/buttonText";
import { CreateButtonSend } from "../../components/button";
import { FiMail} from 'react-icons/fi'
import { FiLock} from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom';

export function SingIn(){
  
  const {signIn} = useAuth()

  function handleSignIn(){
     signIn({email,password})
  }


  
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container>
      <Form>
      <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links únicos</p>
        <label>Faça seu login</label>
        <Input 
        onChange = {(e)=> {
          return setEmail(e.target.value)
        }}
        icon={FiMail} 
        type="email" 
        placeholder="E-mail"/>

        <Input 
        onChange ={(e)=> setPassword(e.target.value)}
        icon={FiLock}
        type= "password" 
        placeholder="Senha"/>

        <CreateButtonSend 
        onClick = {handleSignIn}
        title= "Entrar"/>

        <Link to="/register">
          <ButtonText 
          title="Criar conta" 
          isActive/>
        </Link>
 
      </Form>  
      <Background></Background>

    </Container>
  )
}