import { Container, Links, Content } from './App'
import { Tag } from '../../components/Tags'
import { Header } from '../../components/header'
import {CreateButtonSend} from '../../components/button'
import { Section } from '../../components/section'
import { ButtonText } from '../../components/buttonText'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Link, useNavigate, useParams } from 'react-router-dom'
export function Details() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [id, setId] = useState(null)
  const [links, setLinks] = useState(null)
  const [tags, setTags] = useState(null)

  const navigate = useNavigate()

  const params = useParams()

  async function handleDeleteNote(){
  
    const sureDelete = confirm('tem certeza disso?')
    console.log(sureDelete)
    if(sureDelete){
      await api.delete(`/deletenote/${id}`)
      alert('deletado com sucesso.')
      navigate(-1)
    }
  }
  function handleBack(){
    navigate(-1)//volta para a pagina anterior
  }

  useEffect(()=>{
    async function loadClickedNote(){
      const response = await api.get(`/show/${params.id}`)
      console.log(response)
      const note = response.data.actualNote
      const arrayLinks = response.data.links
      const arrayTags = response.data.tags
      setId(note.id)
      setTitle(note.tittle)
      setDescription(note.description)
      setLinks(arrayLinks)
      setTags(arrayTags)
    } 
    loadClickedNote()
  }, [] )

  return (
    
    <Container>
      <Header/>

      <main>
        <Content>        
        <ButtonText
        onClick = {handleDeleteNote}
        title= 'excluir nota'/>

        <h1>{title}</h1>
        <p>
          {description}
        </p>
        <Section title='Links úteis'>
        <Links>
          {
            links && links.map(link => {
              return <li key ={String(link.id)}>
                <a href={link.url} target='_blank'>{link.url}</a>
                </li>
            })
          }

        </Links>
        </Section>
        <Section title='Marcadores'>
          {
            tags && tags.map(tag => {
              return <Tag 
              key = {String(tag.id)}
              title={tag.name}/>
            })
          }
        </Section>
        
        <CreateButtonSend 
        onClick = {handleBack}
        title= "Voltar"/>
        
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