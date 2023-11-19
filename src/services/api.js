import axios from 'axios'

export const api = axios.create({
  baseURL : "https://node-deploy-1l6c.onrender.com"
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
