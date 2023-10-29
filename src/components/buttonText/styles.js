import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme, isActive}) => isActive ? theme.COLORS.ORANGE : theme.COLORS.WHITE};
  font-size: 16px;
  
  
  
`