import {FiPlus, FiSearch} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'
import { ButtonText } from '../../components/buttonText'
import {Header} from '../../components/header'
import { Input } from '../../components/input'
import { Note } from '../../components/notes'
import { Section } from '../../components/section'
export function Home(){
  return (
    <Container>
      <Header/>
      <Brand>
        <h1>Rocketnotes</h1>
      
      </Brand>

      <Menu>
        <li><ButtonText title='Todos' isActive/></li>
        <li><ButtonText title='react' /></li>
        <li><ButtonText title='javascript' /></li>
      
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title='Minhas notas'>
          <Note data={{title: 'reactNotes'
          , tags : [
            {id : '1', 
            name : 'React'},
            {id : '2', 
            name : 'node.js'},
            {id : 3, 
            name : 'lucas'}
          ,
        ]}}
          />
          
        </Section>
      
      </Content>

        <NewNote to= "/newnote">
          <FiPlus/>Criar Nota
        </NewNote>
    </Container>
  )
}