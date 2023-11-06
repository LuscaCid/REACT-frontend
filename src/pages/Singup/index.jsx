import { Container, Form , Background} from "./style";
import { Input } from "../../components/input";
import { ButtonText } from "../../components/buttonText";
import { CreateButtonSend } from "../../components/button";
import { FiMail} from 'react-icons/fi'
import { FiLock} from 'react-icons/fi'
import { FiUser} from 'react-icons/fi'
import {Link, useNavigate} from 'react-router-dom'
import {api} from '../../services/api'

import { useState } from "react";
export function SingUp(){
  const [userName, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  function handleSignup(){
    if(!email || !password || !userName){
      return window.alert('Preencha todos os campos!')
    }
    api.post("/create", {userName, email, password})
    .then(()=>{
      alert('usuario cadastrado')
      navigate('/')
    })
    .catch(error => {
      if(error.response)alert(error.message)
      else alert('nao foi possivel cadastrar')
    })

  }

  return (
    
    <Container>
      <Form>
      <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links únicos</p>
        <label>Crie sua Conta</label>
        <Input 
        icon={FiUser} 
        type= "text" 
        placeholder="Nome"
        onChange= {e =>setName(e.target.value)}
        
        />
        
        <Input
        onChange = {e => setEmail(e.target.value) } 
        icon={FiMail} 
        type="email" 
        placeholder="E-mail"/>


        <Input
        onChange = {e => setPassword(e.target.value) }  
        icon={FiLock} 
        type= "password" 
        placeholder="Senha"/>

        <CreateButtonSend 
        onClick = {handleSignup}
        title= "Cadastrar"
        />

        <Link to= "/">
          <ButtonText 
          title="Voltar para o login" 
          isActive/>
        </Link>
 
      </Form>  
      <Background></Background>

    </Container>
  )
}