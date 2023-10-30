import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content"
  ;
  >main{
    display: grid;
    grid-area: content;
    overflow-y: auto;
  }
  
  

`
export const Form = styled.form`
  width: min(54rem, 90%) ;
  margin: 5rem auto ;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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

  >.flex{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
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