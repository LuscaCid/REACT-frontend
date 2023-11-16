import {FiPlus, FiSearch} from 'react-icons/fi'
import {Link, useNavigate} from 'react-router-dom'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'
import { ButtonText } from '../../components/buttonText'
import {Header} from '../../components/header'
import { Input } from '../../components/input'
import { Note } from '../../components/notes'
import { Section } from '../../components/section'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'


export function Home(){
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [notes, setNotes] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  const navigate = useNavigate()

  function handleSelectTag(tagName){
    if(tagsSelected.includes(tagName)){
      setTagsSelected(tagsSelected.filter(tags => tagName !== tags))
      console.log(tagsSelected)
    }
    else {
      setTagsSelected(prevState => [...prevState , tagName])
    }
    
  }

  function handleDetails(id){//id da nota que vai ser carregada
    navigate(`/details/${id}`)
  }

  useEffect(()=> {//roda sempre que a tela eh renderizada
    async function loadTags(){
      const response = await api.get('/showalltags')
      setTags(response.data)
    }
    loadTags()

  }, [])

  useEffect(()=> {
    async function loadNotes(){
      const response = await api.get(`/showall?tittle=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }
    loadNotes()
  }, [tagsSelected, search])


  return (
    <Container>
      <Header/>
      <Brand>
        <h1>Rocketnotes</h1>
      
      </Brand>

      <Menu>
        <li><ButtonText 
        onClick = {(e)=> {
          e.preventDefault()
          setTagsSelected([])
        }}
        title='Todos'
        isActive = {tagsSelected.length === 0}/></li>
        {tags && tags.map(tag => {
          return <li key ={tag.id}> 
            <ButtonText
            onClick = {()=> {
              handleSelectTag(tag.name)
            }}

            isActive = {tagsSelected.includes(tag.name)}
            title ={tag.name}
            />
          </li>
        })}
      
      </Menu>

      <Search>
        <Input 
        onChange = {e => setSearch(e.target.value)}
        placeholder="Pesquisar pelo título" 
        icon={FiSearch}/>
      </Search>

      <Content>
        <Section title='Minhas notas'>
          {
            notes && notes.map(note => {
              return <Note
              key = {String(note.id)}
              data = {note}
              onClick = {()=> handleDetails(note.id)}
              />
            })
          }
          
       
          
        </Section>
      
      </Content>

        <NewNote to= "/newnote">
          <FiPlus/>Criar Nota
        </NewNote>
    </Container>
  )
}