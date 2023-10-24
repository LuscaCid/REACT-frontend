import styled from "styled-components"

export const StyledHeader = styled.header`
    padding: 0 8rem;
    width: 100%;
    grid-area: header;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    .profile{
        display: flex;
        gap: 1rem;
        padding: 2rem .5rem;
    }
`