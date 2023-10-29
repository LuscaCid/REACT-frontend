import { Container, Form , Background} from "./style";
import { Input } from "../../components/input";
import { ButtonText } from "../../components/buttonText";
import { CreateButtonSend } from "../../components/button";
import { FiMail} from 'react-icons/fi'
import { FiLock} from 'react-icons/fi'
import { FiUser} from 'react-icons/fi'

export function SingUp(){
  return (
    <Container>
      <Form>
      <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links únicos</p>
        <label>Crie sua Conta</label>
        <Input icon={FiUser} type= "text" placeholder="Nome"/>
        
        <Input icon={FiMail} type="email" placeholder="E-mail"/>


        <Input icon={FiLock} type= "password" placeholder="Senha"/>

        <CreateButtonSend title= "Cadastrar"/>


        <ButtonText title="Voltar para o login" isActive/>
 
      </Form>  
      <Background></Background>

    </Container>
  )
}