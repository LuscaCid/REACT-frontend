import styled from 'styled-components'

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 0.3rem 2rem ;
  border-radius: 0.5rem;
  font-size: 15px;
  margin-right: 12px;
`