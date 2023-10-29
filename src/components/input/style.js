import styled from 'styled-components'

export const Container = styled.div`

  background: ${({theme})=> theme.COLORS.BACKGROUND_900};
  color:  ${({theme})=> theme.COLORS.GRAY_100};
  
  width: 100%;
  display: flex;
  align-items: center;
  border:none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  >svg{
    margin-left: 10px;
  }
  >input{
    border: none;
    width: 100%;
    padding: 2rem 2.6rem;
    color:  ${({theme})=> theme.COLORS.WHITE};
    background: transparent;
    border-radius: 0.5rem;
    &:placeholder{
      color: ${({theme})=> theme.COLORS.GRAY_300};
    }
  }
`