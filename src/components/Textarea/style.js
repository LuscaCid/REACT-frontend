import styled from  'styled-components'

export const Container = styled.textarea`
  background: ${({theme})=> theme.COLORS.BACKGROUND_900};
  border-radius: .5rem;
  width: 100%;
  height: 15rem;
  width: 100%;
  border: none;
  padding: 1.7rem;
  color: ${({theme})=> theme.COLORS.WHITE};
  resize: none;
  overflow-y: auto;
  &::placeholder{
    color: ${({theme}) => {
      return theme.COLORS.GRAY_300
    }};
  }

`