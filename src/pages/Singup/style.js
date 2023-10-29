import styled from 'styled-components'
import BackgroundImg from '../../assets/background.png'
export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
`
export const Form = styled.form`
  width: min(40rem, 90%)  ;
  margin: 18rem 9rem ;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  >p{
    font-size: 1.6rem;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }
  >label{
    font-size: 2.2rem;
  }
  >h1{
      font-size: 4.8rem;
      color: ${({theme})=> theme.COLORS.ORANGE};
  }
  >input:nth-child(1){
    margin-bottom: 2rem;
  }
`

export const Background =  styled.div`
  flex: 1;
  filter: brightness(0.7);
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`