import styled from "styled-components"

export const StyledHeader = styled.header`
    padding: 0 8rem;
    width: 100%;
    grid-area: header;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    .profile{
        align-items: center;
        display: flex;
        gap: 1rem;
        padding: 2rem .5rem;
    }
    .profile img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
    }
    #name span {
        color: ${({theme})=> theme.COLORS.GRAY_100};
        font-size: 1.4rem;
    }
    #name strong {
        color: ${({theme})=> theme.COLORS.WHITE};
        font-size: 1.8rem;
    }
    #name {
        display: flex;
        flex-direction: column;
    }
`
export const Logout = styled.button`
    border: none;
    background: none;
    >svg {
        color: ${({theme})=> theme.COLORS.GRAY_100};
        font-size: 24px;
    }
    cursor: pointer;
    &:hover{
        filter: brightness(1.3);
    }
`
/**
 * 
 * aula 397 *** meu gosh
 * 
 */