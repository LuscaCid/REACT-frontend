import { Container, Form, Links } from "./style";
import { Input } from "../../components/input";
import {Header} from '../../components/header'
import { Textarea } from "../../components/Textarea";
import {Section} from '../../components/section'
import {FiLink} from 'react-icons/fi'
export const NewNote = () => {
  return (
    <Container>
      <Header/>

      <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <a href="/">Voltar</a>
            </header>
            <Input type="text" placeholder = "Título"/>
            <Textarea placeholder="Observações"/>
            <Section title="Links úteis"/>
              <Links>
                <Input placeholder="Link" icon={FiLink}/>
                <button>&times;</button>
              </Links>
              <span>
                Novo link
              </span>
          </Form>
      </main>
    </Container>
  )
}
/**
 * esse li serve apenas para demonstrar como fica
 * ou seja, ele aperta em novo link e gera mais um espaco
 * deste dai
 */