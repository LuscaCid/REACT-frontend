
import {StyledHeader} from './header'

export function Header (){
    return (
        <StyledHeader>
            <div className="profile">
                <img src="https://github.com/luscaCid.png" alt="image of" />
                <div id="name">
                    <span>Seja bem-vindo</span>
                    <strong>lucas</strong>
                </div>
            </div>
            <button>
                <img src="" alt="fechar" />
            </button>
        </StyledHeader>
    )
}