import {RiShutDownLine} from 'react-icons/ri'
import {StyledHeader, Profile,Logout} from './header/'
import { useAuth } from '../../hooks/auth'
import bgProfilePhoto from '../../assets/Profile_avatar_placeholder_large.png'
import { api } from '../../services/api'

export function Header (){
    const {signOut, user} = useAuth()
    const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : bgProfilePhoto
    function logout(){
        signOut()
    }
    return (
        <StyledHeader >
            <Profile to="/profile">
                <img src={avatar} alt="image of" />
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