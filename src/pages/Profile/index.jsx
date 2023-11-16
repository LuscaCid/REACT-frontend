import { Container, Form, Avatar  }  from './style'
import {FiCamera, FiMail, FiLock, FiArrowLeft, FiUser} from 'react-icons/fi'
import {Input} from '../../components/input'
import { CreateButtonSend } from '../../components/button' 
import { Button } from 'style-components'
import { Link } from 'react-router-dom'
import bgProfileImg from '../../assets/Profile_avatar_placeholder_large.png'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { api } from '../../services/api'

export function Profile(){
  const {user, updateUserPassword, updateUser , updateProfilePhoto} = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarURl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : bgProfileImg
  console.log(user)
  
  const [avatar, setAvatar] = useState(avatarURl)
  const [fileIndex, setAvatarFile] = useState(null)
  console.log(user)

  async function handleUpdate(){
    const userUpdate ={
      name,
      email,
      oldPassword,
      newPassword,
      
    }
    if(fileIndex){
      const avatar = await updateProfilePhoto({user, fileIndex})
      console.log(avatar)
      user.avatar = avatar
    }
    if(name || email ){
      await updateUser({userUpdate})
    }
    if(oldPassword && newPassword)await updateUserPassword({userUpdate})    
  }
  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file) //ou seja, toda vez que mudar de valor
    const imagePreview = URL.createObjectURL(file)
    console.log(imagePreview)
    setAvatar(imagePreview)
    

  }
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="foto do usuario" />        

          <label htmlFor="avatar"> 
            <FiCamera/>  
            <input 
            onChange={handleChangeAvatar}
            type="file" 
            id='avatar'/>
          </label> 


        </Avatar>
       
        <Input 
        onChange = {e => { setName(e.target.value)}}
        icon={FiUser} 
        placeholder="Nome"
        type="text"
        value = {name}
        />
        <Input 
        onChange = {e => { setEmail(e.target.value)}}
        icon={FiMail} 
        placeholder="E-mail"
        type="email"
        value = {email}
        />
        <Input 
        onChange = {e => { setOldPassword(e.target.value)}}
        icon={FiLock} 
        placeholder="Senha atual"
        type="password"
        />
        <Input 
        onChange = {e => { setNewPassword(e.target.value)}}
        icon={FiLock} 
        placeholder="Nova senha"
        type="password"
        />
        <CreateButtonSend 
        onClick = {handleUpdate}
        title ="Salvar"/>
      </Form>
    </Container>
  )
} 