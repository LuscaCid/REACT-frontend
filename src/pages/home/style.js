import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px ;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content"
  ;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`
export const Brand = styled.div`
  grid-area: brand;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  display: grid;
  place-content: center;
  color: ${({theme})=> theme.COLORS.ORANGE};
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: center;
  
  >li{

    
    padding: 2rem 0;
    width: 100%;
    border-top: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_700};
    border-bottom: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_700};
    font-size: 1.7rem;
  }
`

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem  6.4rem 0;

`

export const Content = styled.div`
  grid-area: content;
  padding: 2.4rem 6.4rem;
  overflow-y: auto;

`

export const NewNote = styled.button`
  background: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.GREY_100};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  >svg{

  }
  cursor: pointer;
  &:hover{
    filter: brightness(1.1);
  }
`
