import styled from 'styled-components'
export const Container = styled.div`


  width: 100%;
  >header{
    width: 100%;
    height: 14.4rem;
    background: ${({theme})=> theme.COLORS.BACKGROUND_900};
    padding: 4rem 5rem;
    display: flex;
    align-items: center;
    >a svg{
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 2.7rem;
    }
  }
  
` 

export const Form = styled.form`
  margin: 0rem auto;
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  >div:nth-child(3){
    margin-bottom:
    2.4rem;
  }
  
`

export const Avatar = styled.div`
  
  width:22rem;
  position: relative;
  margin: 0 auto 32px;
  >img{
    width: 22rem;
    border-radius: 50%;
    margin-top: -12rem;
    height: 22rem;
  }
  >label {
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 7px;
    bottom: 7px;
    position: absolute;
    width: 4.8rem;
    height: 4.8rem;
    background: ${({theme})=> theme.COLORS.ORANGE};
    >svg{
      width: 22px;
      height: 22px;
      color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    }
    >input {
      display: none;
    }
  }
  >label:hover{
    filter: brightness(0.9);
  }
  >button{
    
    padding: 0;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`
