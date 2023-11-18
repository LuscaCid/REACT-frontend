import { Container, Form, Links } from "./style";
import { Input } from "../../components/input";
import {Header} from '../../components/header'
import { Textarea } from "../../components/Textarea";
import {Section} from '../../components/section'
import { NoteItem } from "../../components/NoteItem";
import { CreateButtonSend } from '../../components/button'
import {Link, useNavigate} from 'react-router-dom'
import {FiLink} from 'react-icons/fi'
import { useState } from "react";

import { api } from "../../services/api";

export const NewNote = () => {
  const navigate = useNavigate()
  
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')

  function handleAddTag(e){
    e.preventDefault()
    if(!newTag)return alert('campo vazio')
    setTags(prevState => [...prevState, newTag])
    setNewTag('')//resetando o valor da tag 
    console.log(tags)
  }
  // tenho um vetor que vai armazenar os links que vao ser inseridos no db
  function handleAddLink(e){
    e.preventDefault()
    setLinks(prevState => [...prevState, newLink])// tanto dessa forma quanto da outra
    setNewLink('')
    console.log(links)
  }

  function handleDeleteLink( deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
    console.log(links)
    /**
     * ele vai retornar pra mim apenas os links que forem diferentes
     * do que eu passar como parametro na function
     */
  
  }
  
  async function handleCreateNote(){
    await api.post('/notes', {
      tittle,
      description,
      tags,
      links
    })
    alert('cadastrada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header/>

      <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
                    
              <Link to={-1}>Voltar</Link>
              
            </header>
            <Input 
            onChange = {e=> setTittle(e.target.value)}
            type="text" 
            placeholder = "Título"/>
            <Textarea 
            onChange = {e=> setDescription(e.target.value)}
            placeholder="Observações"/>
            <Section title="Links úteis"/>
            {
              links.map((link, index) => {
                return <NoteItem 
                key = {String(index)}
                onClick={(e)=>{ 
                  e.preventDefault()
                  handleDeleteLink(link)}}
                value = {link}
                />
                
              })
            }
            <NoteItem 
            onChange = {e => setNewLink(e.target.value)}
            onClick={handleAddLink}
            placeholder = "Novo link"
            value = {newLink}
            isNew/>

            <Section title="Marcadores"/>
            <div className="flex">
            {}
            {
              tags.map((tag,index) => {
                return <NoteItem
                  value ={tag}
                  key = {String(index)}
                  onClick={(event)=>{
                    event.preventDefault()
                    setTags(prevState => prevState.filter(element => element !== tag))
                  }}
                />
              })
            }
            <NoteItem 
            value = {newTag}
            onChange = {e => setNewTag(e.target.value)}
            onClick={handleAddTag}
            placeholder = "Nova tag"
            isNew/>
            </div>
            <CreateButtonSend 
            onClick = {handleCreateNote}
            title= "Salvar" />
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

/**
 * 
 * basciamente o link do react router dom substitui o a
 * logo eu posso tanto estilizar uma div que eh um link
 * que é passado dentro styled components quando estilizar
 * ele proprio
*/