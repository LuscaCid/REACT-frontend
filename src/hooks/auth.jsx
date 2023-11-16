import {createContext, useState, useEffect , useContext} from "react"


import { api } from "../services/api";
export const AuthContext = createContext({})

 function AuthProvider({children }) {

  const [data, setData] = useState({})

  async function signIn({email, password}) {
    try{
      const response = await api.post('/sessions', {email, password})
      const {token, user} = response.data
      
      localStorage.setItem('@rocketNotes:user', JSON.stringify(user))
      localStorage.setItem('@rocketNotes:token', token)
      
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({user, token})

    } catch (error) {
      if(error.response)alert(error.response.data.message)
      else alert ('nao foi possivel entrar')
    } 
    
  }

  function signOut(){
    localStorage.removeItem('@rocketNotes:token')
    localStorage.removeItem('@rocketNotes:user')
    setData({}) /** voltando como objeto vazio */
  }

  /**
   * useEffect vai apenas executar quando o component for renderizado
   * pegando a informação de dentro do localStorage 
   */

  async function updateProfilePhoto({user ,fileIndex}){
    console.log('entrou aqui')
    console.log(fileIndex)
    try{
      const fileUploadForm = new FormData()
      fileUploadForm.append("avatar", fileIndex)
      const response = await api.patch('/avatar', fileUploadForm)       
      return response
      
  }
    catch (error){
      return console.log(error)
    }
  }
  async function updateUser({userUpdate}){
    try{
      const email = userUpdate.email
      const name = userUpdate.name
      const response = await api.put('/users', {email, name})
      const userExists = response.data
      console.log(userExists)
      localStorage.setItem('@rocketNotes:user', JSON.stringify(userExists))
      localStorage.setItem('@rocketNotes:token',data.token)
      setData({user :userExists, token: data.token})
      alert('Atualizado com sucesso')
    } catch (error) {
      if(error.response)alert(error.response.data.message)
      else alert ('nao foi possivel atualizar')
    } 
  }

  async function updateUserPassword({userUpdate}){
    try{
      const oldPassword = userUpdate.oldPassword
      const newPassword = userUpdate.newPassword
      const user = await api.put('/userspassword', { oldPassword, newPassword })
      localStorage.setItem('@rocketNotes:user', JSON.stringify(user.response.data))
      localStorage.setItem('@rocketNotes:token',data.token)
      setData({user, token: data.token})
      alert('Atualizado com sucesso')
    } catch (error) {
      if(error.response)alert(error.response.data.message)
      else alert ('nao foi possivel atualizar')
    } 
  }
  useEffect(()=> {
    const token = localStorage.getItem('@rocketNotes:token')
    const user = localStorage.getItem('@rocketNotes:user')
    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({
        token,
        user : JSON.parse(user) 
      })

    } else {
      signOut()
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      updateProfilePhoto,
      updateUserPassword,
      updateUser,
      signOut,
      signIn,
      user : data.user
     }} >
      {children}
    </AuthContext.Provider>
  )
}

/**
 * authcontext eh basicamente o meu contexto que vai permear todas as 
 * rotas da aplicacao,
 * 
 */

function useAuth(){
  const context = useContext(AuthContext) 
  return context
  
}

export { AuthProvider, useAuth}

/**
 * eu posso prover para todas as minhas rotas da
 * aplicacao um contexto que vai carregar uma 
 * informacao possivelmente retirada de dentro do 
 * banco de dados para que em todas as requisicoes
 * que o usuario fizer, ele consiga acessar
 * somente os dados dele de dentro do db
 * 
 * 
 * useState eh um hook que permite criar estados para as minhas
 * variaveis locais, tanto para armazenar dados que irao sobreviver
 * aos recarregamentos de paginas tendo em vista que variaveis
 * comuns nao sao capazes de armazenar valores e apos uma nova 
 * renderização do react, permanecer com estes valores, logo
 * utiliza-se do const [value, setValue] = useState(valor inicial)
 * o setValue eh uma funcao assincrona, logo ela nao eh executada 
 * de forma instantanea, leva tempo ate retornar o valor, porem 
 * quando o componente react vai retornar no return (
 *  <Container value = {value}>
 * </ Container>
 * )
 * ele retorna o valor atualizado
 */