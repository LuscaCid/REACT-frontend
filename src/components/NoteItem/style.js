import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color : ${({theme})=> theme.COLORS.GRAY_300};
  background: ${({theme , isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900 };
  border: ${({theme, isNew})=> isNew ? '1px dashed ' +theme.COLORS.GRAY_300 : 'none'} ;
  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;
  >button {
    
    border: none;
    background: none;
    color: ${({theme, isNew}) => isNew? theme.COLORS.ORANGE : 'red'};
    font-size: 2rem;
    cursor: pointer;
  }
  >input{
    height: 5.6rem;
    width: 100%;
    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

`


