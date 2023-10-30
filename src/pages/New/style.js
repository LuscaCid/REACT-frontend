import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  
  

`
export const Form = styled.form`
  width: min(54rem, 90%) ;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  >span {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 2px dashed   ${({theme}) => theme.COLORS.GRAY_100} ;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }

  >header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.6rem;

    >a{
      font-size: 1.6;
      color: ${({theme})=> theme.COLORS.GRAY_100};
    }

    
  }
`
export const Links = styled.li`
  position: relative;
  list-style: none;
  >button{
    top: 2rem;
    right: 1rem;
    font-size: 2rem;
    color: red;
    cursor: pointer;
    position: absolute;
    border: none;
    background: none;
  }

`