import { Container, Form, Avatar  }  from './style'
import {FiCamera, FiMail, FiLock, FiArrowLeft, FiUser} from 'react-icons/fi'
import {Input} from '../../components/input'
import { CreateButtonSend } from '../../components/button' 
import { Button } from 'style-components'
import { Link } from 'react-router-dom'
export function Profile(){
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/luscacid.png" alt="foto do usuario" />        

          <label htmlFor="avatar"> 
            <FiCamera/>  
            <input type="file" id='avatar'/>
          </label> 


        </Avatar>
        <Input 
        icon={FiUser} 
        placeholder="Nome"
        type="text"
        />
        <Input 
        icon={FiMail} 
        placeholder="E-mail"
        type="email"
        />
        <Input 
        icon={FiLock} 
        placeholder="Senha atual"
        type="password"
        />
        <Input 
        icon={FiLock} 
        placeholder="Nova senha"
        type="password"
        />
        <CreateButtonSend title ="Salvar"/>
      </Form>
    </Container>
  )
} 