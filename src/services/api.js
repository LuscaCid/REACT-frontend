import axios from 'axios'

export const api = axios.create({
  baseURL : "http://18.230.74.245:3000"
})

/**
 * 
 * aqui basicamente estou utilizando do axios para 
 * criar uma variavel que consegue se conectar com 
 * meu backend quando eu faco minha aplicacao do outro
 * lado utilizar ou seja, app.use(cors) e ai a baseURL vai
 * ser o meu servidor local e ai conecta-se apenas passando a 
 * rota especifica
 */
