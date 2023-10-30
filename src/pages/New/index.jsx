import { Container, Form, Links } from "./style";
import { Input } from "../../components/input";
import {Header} from '../../components/header'
import { Textarea } from "../../components/Textarea";
import {Section} from '../../components/section'
import { NoteItem } from "../../components/NoteItem";
import { CreateButtonSend } from '../../components/button'
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
            <NoteItem 
            value = "https://github.com/luscacid"
            isNew = {false}/>
            <NoteItem 
            placeholder = "Novo link"
            isNew/>

            <Section title="Marcadores"/>
            <div className="flex">
            <NoteItem 
            value = "https://github.com/luscacid"
            isNew = {false}/>
            <NoteItem 
            placeholder = "Novo link"
            isNew/>
            </div>
            <CreateButtonSend title= "Salvar" />
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