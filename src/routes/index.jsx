import { BrowserRouter} from 'react-router-dom'
/**
 * o browserrouter permite que eu navegue entre as pages
 */

import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
export const Routes = () =>{
  const {user} = useAuth()
  return (
    <BrowserRouter>
     {user ?<AppRoutes />: <AuthRoutes/>}
    </BrowserRouter>
  )
}

/**
 * rotas aplicadas com react router dom 
 * 
 */