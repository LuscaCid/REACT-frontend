import {ButtonStyle } from './styles'

export function CreateButtonSend({title, loading = false, ...rest} ) {
    
    return (
        <ButtonStyle 
        {...rest}
        type="button"
        disabled = {loading}//disabled eh uma propiedade presente dentro do botao
        >
            {loading ? 'carregando' : title}
        </ButtonStyle>
    )
}