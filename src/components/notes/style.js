import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background: ${({theme})=> theme.COLORS.BACKGROUND_700};
  padding: 2.2rem;
  margin-bottom: 1.6rem;
  border: none;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  transition: filter 0.4s;
  &:hover{
    filter: brightness(.9);
  }
  >h1{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.8rem;
    color: ${({theme})=> theme.COLORS.WHITE};
  }
  >p{
    margin-top: .7rem;
    text-align: left;
  }
  >footer{
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`