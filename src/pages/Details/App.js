import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    >main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    } 
`
/**
 * ele cria o elemento html na linha abaixo
 * logo nao preciso passar o nome da div, apenas 
 * o nome do componente criado aqui q é exportado
 */
export const Links = styled.ul`
    list-style: none;
    >li{
        margin-top: 12px;
        a{
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

`
export const Content = styled.div`
    width: min(56rem, 90%);
    margin: auto;
    display: flex;
    flex-direction: column;
    >button:first-child{
        align-self: flex-end;
       
    }
    >h1{
        padding-top: 6.4rem;
        font-weight: 500;
        font-size: 3.6rem;
        
    }
    >p{
        font-size: 1.6rem;
        margin-top: 16px;
        text-align: justify;
    }
`
