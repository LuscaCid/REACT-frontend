import { Container, Links, Content } from './App'
import { Tag } from '../../components/Tags'
import { Header } from '../../components/header'
import {CreateButtonSend} from '../../components/button'
import { Section } from '../../components/section'
import { ButtonText } from '../../components/buttonText'

export function Details() {
 
  return (
    
    <Container>
      <Header/>

      <main>
        <Content>


        
        <ButtonText title= 'excluir nota'/>

        <h1>Introdução ao React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio facilis animi autem consequatur velit, pariatur soluta sint! Minima at perspiciatis ipsa. Numquam ducimus voluptas reprehenderit sunt, officia eligendi praesentium.
        </p>
        <Section title='Links úteis'>
        <Links>
          <li>
            <a href="#" target='_blank'>meu linkedas.com</a>
          </li>
          <li>
            <a href="#" target='_blank'>meu git.com</a>
          </li>

        </Links>
        </Section>
        <Section title='Marcadores'>
          <Tag title='node.js'/>
          <Tag title='node.js'/>
        </Section>
        
          <CreateButtonSend title= "Voltar"/>
        </Content>
      </main>
    </Container>
      
  )
}

/**
 * a primeira letra da variavel que vai ser exportada tem de 
 * maiuscula pois ele so vai entender desta forma
 * 
 */