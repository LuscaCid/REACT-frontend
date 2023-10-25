import styled from 'styled-components'

export const ButtonStyle = styled.button`
    width: 100%;
    background: ${({theme}) => {
        return theme.COLORS.ORANGE
    }};
    border-radius: 10px;
    border: none;
    color: ${({theme}) => {
        return theme.COLORS.BACKGROUND_800
    }};
    cursor: pointer;
    height: 56px;
    font-weight: 500;
    margin-top: 16px;
    &:hover{
        filter: brightness(0.87);
    }
    &:disabled{
        opacity: 0.5;
    }

`