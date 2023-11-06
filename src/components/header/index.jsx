import {RiShutDownLine} from 'react-icons/ri'
import {StyledHeader, Profile,Logout} from './header/'
import { useAuth } from '../../hooks/auth'
export function Header (){
    const {signOut, user} = useAuth()
    function logout(){
        signOut()
    }
    return (
        <StyledHeader >
            <Profile to="/profile">
                <img src="https://github.com/luscaCid.png" alt="image of" />
                <div id="name">
                    <span>Seja bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick = {logout}>
                <RiShutDownLine/>
            </Logout>
        </StyledHeader>
    )
}