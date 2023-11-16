import { Container } from "./style";
import {Tag} from '../Tags'
export function Note({data, ...rest}){
  return (
    <Container {...rest}>
      <h1>{data.tittle}</h1>
      
      {
        
        data.tags && 
        <footer>
          {
           data.tags.map(function(tag){
            return <Tag 
            key = {tag.id}
            title= {tag.name}


            />

           })
          }
        </footer>
      }
    </Container>
  )
}