import { Container, Form , Background} from "./style";
import { Input } from "../../components/input";
import { ButtonText } from "../../components/buttonText";
import { CreateButtonSend } from "../../components/button";
import { FiMail} from 'react-icons/fi'
import { FiLock} from 'react-icons/fi'
export function SingIn(){
  return (
    <Container>
      <Form>
      <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links únicos</p>
        <label>Faça seu login</label>
        <Input icon={FiMail} type="email" placeholder="E-mail"/>

        <Input icon={FiLock} type= "password" placeholder="Senha"/>

        <CreateButtonSend title= "Entrar"/>


        <ButtonText title="Criar conta" isActive/>
 
      </Form>  
      <Background></Background>

    </Container>
  )
}