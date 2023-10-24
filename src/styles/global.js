import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    :root{
        font-size: 62.5%;
    }
    body , input, button, textarea { 
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }
    body{
        background: ${  ({theme}) => {
            const truthy = true
            if(truthy){
                return theme.COLORS.BACKGROUND_800
            } else {
                return theme.COLORS.BACKGROUND_700
            }
            
        }};

        color: ${({theme})=> theme.COLORS.WHITE};
    }
    a {
        text-decoration: none;
    }
    button a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover a:hover {
        filter: brightness(0.9);
    }
`;